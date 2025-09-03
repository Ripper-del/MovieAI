# 🎬 MovieAI

**MovieAI** — це стримінг-сервіс у стилі Netflix, побудований на відкритих базах даних фільмів та інтегрований із ChatGPT для інтелектуального пошуку й персональних рекомендацій.

---

## 🚀 Функціонал
- 📂 Каталог фільмів і серіалів з жанрами, акторами та описами  
- 🔎 Пошук за ключовими словами, жанрами, акторами, роком  
- 🤖 ChatGPT-помічник для підбору фільмів за вільним запитом  
- ⭐ Обране та закладки  
- 👤 Акаунти користувачів (реєстрація/логін, збереження вподобань)  

---

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

