# 🎬 MovieAI

<<<<<<< HEAD
**MovieAI** — це стримінг-сервіс у стилі Netflix, побудований на відкритих базах даних фільмів та інтегрований із ChatGPT для інтелектуального пошуку й персональних рекомендацій.
=======
![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/React-18-blue?logo=react&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-blue?logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-enabled-blue?logo=docker&logoColor=white)
![CI/CD](https://img.shields.io/badge/GitHub_Actions-CI%2FCD-lightgrey?logo=githubactions&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green)

**MovieAI** — це стримінг‑сервіс у стилі Netflix, побудований на відкритих базах даних фільмів та інтегрований із ChatGPT для інтелектуального пошуку й персональних рекомендацій.
>>>>>>> 934ae0f (Первый коммит)

---

## 🚀 Функціонал
- 📂 Каталог фільмів і серіалів з жанрами, акторами та описами  
- 🔎 Пошук за ключовими словами, жанрами, акторами, роком  
<<<<<<< HEAD
- 🤖 ChatGPT-помічник для підбору фільмів за вільним запитом  
=======
- 🤖 ChatGPT‑помічник для підбору фільмів за вільним запитом  
>>>>>>> 934ae0f (Первый коммит)
- ⭐ Обране та закладки  
- 👤 Акаунти користувачів (реєстрація/логін, збереження вподобань)  

---

<<<<<<< HEAD
## 🛠️ Технологічний стек
**Backend**
- Node.js + Express / NestJS  
- PostgreSQL / MySQL  
- Prisma / TypeORM  
- OpenAI API (ChatGPT)  
- TMDB API / IMDb Dataset  

**Frontend**
- React / Next.js  
- TailwindCSS + ShadCN UI  
- Zustand / Redux  
- Axios / React Query  

**Інфраструктура**
- Docker  
- Nginx  
- GitHub Actions (CI/CD)  
- Vercel / Railway  

---

## 👥 Команда
- **Андрій** — Backend, AI-інтеграція  
- **Рома** — Frontend, UI/UX  

---

🌐 API Ендпоінти

GET /api/movies → список фільмів

GET /api/movies/:id → деталі фільму

GET /api/search?q=... → пошук

POST /api/chat → рекомендації від ChatGPT

POST /api/auth/login → вхід

POST /api/auth/register → реєстрація

---

📌 Git Flow

main — стабільна версія

dev — основна розробка

feature/* — нові функції

fix/* — виправлення багів

---

Формат комітів (Conventional Commits):

feat: додано пошук фільмів

fix: виправлено баг авторизації

docs: оновлено README

=======
## ⚡ Встановлення та запуск
```bash
# Клонування проєкту
git clone https://github.com/username/movieai.git
cd movieai

# Docker (БД)
docker compose up -d

# Backend
cd backend
npm install
npm run prisma:migrate
npm run dev

# Frontend (в окремому терміналі)
cd ../frontend
npm install
npm run dev
```

---

## 🌐 API Ендпоінти (чернетка)
- `POST /api/auth/register` → реєстрація  
- `POST /api/auth/login` → вхід (отримання JWT)  
- `GET /api/movies/search?q=...` → пошук (TMDB proxy)  
- `GET /api/movies/:id` → деталі фільму (TMDB proxy)  
- `POST /api/chat` → рекомендації від ChatGPT (stub)  

---

## 📌 Git Flow
- `main` — стабільна версія  
- `dev` — основна розробка  
- `feature/*` — нові функції  
- `fix/*` — виправлення багів  

**Формат комітів (Conventional Commits):**
- `feat: додано пошук фільмів`  
- `fix: виправлено баг авторизації`  
- `docs: оновлено README`  

---

## 📜 Ліцензія
MIT License © 2025 MovieAI
>>>>>>> 934ae0f (Первый коммит)
