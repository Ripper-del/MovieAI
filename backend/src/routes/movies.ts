import { Router } from 'express';
import axios from 'axios';
import { z } from 'zod';
import { env } from '../env.js';
import { PrismaClient } from '@prisma/client';
import { requireAuth, AuthedRequest } from '../middleware/auth.js';

const prisma = new PrismaClient();
export const moviesRouter = Router();

const BASE = 'https://api.themoviedb.org/3';

moviesRouter.get('/search', async (req, res) => {
  const q = String(req.query.q || '');
  if (!q) return res.status(400).json({ error: 'Missing q' });

  const r = await axios.get(`${BASE}/search/movie`, {
    params: { query: q, include_adult: false, language: 'en-US', page: 1 },
    headers: { Authorization: `Bearer ${env.TMDB_API_KEY}` }
  });
  res.json(r.data);
});

moviesRouter.get('/:id', async (req, res) => {
  const id = req.params.id;
  const r = await axios.get(`${BASE}/movie/${id}`, {
    params: { language: 'en-US' },
    headers: { Authorization: `Bearer ${env.TMDB_API_KEY}` }
  });
  res.json(r.data);
});

// Save favorite (auth required)
moviesRouter.post('/:id/favorite', requireAuth, async (req: AuthedRequest, res) => {
  const tmdbId = Number(req.params.id);
  if (Number.isNaN(tmdbId)) return res.status(400).json({ error: 'Invalid id' });

  await prisma.favorite.upsert({
    where: { userId_tmdbId: { userId: req.user!.id, tmdbId } },
    update: {},
    create: { userId: req.user!.id, tmdbId }
  });
  res.json({ ok: true });
});

moviesRouter.get('/me/favorites', requireAuth, async (req: AuthedRequest, res) => {
  const favs = await prisma.favorite.findMany({ where: { userId: req.user!.id } });
  res.json(favs);
});
