import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { z } from 'zod';
import { env } from '../env.js';

const prisma = new PrismaClient();
export const authRouter = Router();

const credsSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});

authRouter.post('/register', async (req, res) => {
  const parse = credsSchema.safeParse(req.body);
  if (!parse.success) return res.status(400).json({ error: 'Invalid payload' });
  const { email, password } = parse.data;

  const exists = await prisma.user.findUnique({ where: { email } });
  if (exists) return res.status(409).json({ error: 'User already exists' });

  const passwordHash = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({ data: { email, passwordHash } });

  return res.status(201).json({ id: user.id, email: user.email });
});

authRouter.post('/login', async (req, res) => {
  const parse = credsSchema.safeParse(req.body);
  if (!parse.success) return res.status(400).json({ error: 'Invalid payload' });
  const { email, password } = parse.data;

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return res.status(401).json({ error: 'Invalid credentials' });

  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) return res.status(401).json({ error: 'Invalid credentials' });

  const token = jwt.sign({ sub: user.id, email: user.email }, env.JWT_SECRET, { expiresIn: '7d' });
  return res.json({ token });
});
