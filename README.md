# Web Dev 2 Group Project — Setup Guide

This project is built with Next.js 15, TypeScript, and Prisma (SQLite).

## Prerequisites
- Node.js 18+ (recommend 20+)
- npm (comes with Node)

Verify:
```bash
node -v
npm -v
```

## 1) Install dependencies
```bash
npm install
```

## 2) Configure environment
Create a `.env` file in the project root with the database connection string (SQLite):
```env
# SQLite DB lives inside the prisma/ folder
DATABASE_URL="file:./dev.db"
```

## 3) Set up the database (Prisma)
Generate the Prisma Client:
```bash
npx prisma generate
```

Create the database and apply existing migrations:
```bash
npx prisma migrate dev
```

(Optional) Open Prisma Studio to inspect data:
```bash
npx prisma studio
```

## 4) Run the app in development
```bash
npm run dev
```
Visit `http://localhost:3000`.

## 5) Build and run in production (optional) THIS IS FOR PRODUCTION dont need to do this when developing
```bash
npm run build
npm start
```

## Common scripts
- `npm run dev`: Start the Next.js dev server
- `npm run build`: Build for production
- `npm start`: Run the production server
- `npx prisma generate`: Generate Prisma Client
- `npx prisma migrate dev`: Apply pending migrations (and create new ones when developing)
- `npx prisma studio`: Visual DB browser

## Notes
- Default DB is SQLite via Prisma. You can switch providers in `prisma/schema.prisma` and update `DATABASE_URL` accordingly.
- Main entry page is in `src/app/page.tsx`.