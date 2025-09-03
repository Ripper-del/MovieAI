import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import { authRouter } from './routes/auth.js';
import { moviesRouter } from './routes/movies.js';
import { chatRouter } from './routes/chat.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => res.json({ ok: true }));

app.use('/api/auth', authRouter);
app.use('/api/movies', moviesRouter);
app.use('/api', chatRouter);

const port = Number(process.env.PORT || 4000);
app.listen(port, () => {
  console.log(`[movieai] backend running on http://localhost:${port}`);
});
