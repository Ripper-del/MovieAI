import { Router } from 'express';
import axios from 'axios';
import { env } from '../env.js';
import { z } from 'zod';

export const chatRouter = Router();

const bodySchema = z.object({
  query: z.string().min(3),
  language: z.string().default('uk-UA').optional()
});

chatRouter.post('/chat', async (req, res) => {
  const parse = bodySchema.safeParse(req.body);
  if (!parse.success) return res.status(400).json({ error: 'Invalid payload' });
  const { query, language = 'uk-UA' } = parse.data;

  // Minimal call to OpenAI Chat Completions API (via HTTP to avoid SDK version drift)
  try {
    const prompt = [
      {"role": "system", "content": "Ти — асистент з підбору фільмів. Відповідай коротко, пропонуй 5 фільмів. Формат: список з назвою і роком."},
      {"role": "user", "content": `Підібери фільм(и) за запитом: "${query}". Мова інтерфейсу: ${language}.`}
    ];

    const resp = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: process.env.OPENAI_MODEL || "gpt-4o-mini",
        messages: prompt,
        temperature: 0.4
      },
      {
        headers: {
          "Authorization": `Bearer ${env.OPENAI_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    const text = resp.data.choices?.[0]?.message?.content ?? "Не вдалося отримати відповідь.";
    res.json({ answer: text });
  } catch (e: any) {
    console.error(e.response?.data || e.message);
    res.status(500).json({ error: "AI service error" });
  }
});
