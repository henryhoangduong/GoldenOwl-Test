# 🧑‍💻 Web Developer Intern Assignment

## 🧠 Project structure
This project is divided into two main parts: `frontend` and `backend`.

### 📦 frontend

- `src/` – Source code for the React frontend  
  - `components/` – Reusable UI components  
  - `pages/` – Page-level components  
  - `hooks/` – Custom React hooks  
  - `App.tsx` – Main application component  
  - `main.tsx` – Entry point for the Vite app  
  - `services/` – API call definitions  
- `public/` – Static files  
- `Dockerfile` – Containerization for the frontend  
- `vite.config.ts` – Vite configuration  
- `tsconfig.json` – TypeScript configuration for the frontend  

### 🛠️ backend

- `src/` – Source code for the Express API  
  - `configs/` – Configuration files for the API  
  - `models/` – TypeORM entity models  
  - `seeds/` – Database seed scripts  
  - `routes/` – API route definitions  
  - `controllers/` – Route handler logic  
  - `middleware/` – Custom Express middleware  
  - `utils/` – Utility functions and helpers  
  - `index.ts` – Entry point for the server  
- `Dockerfile` – Containerization for the backend  
- `tsconfig.json` – TypeScript configuration for the backend  

---

## 🚀 Tech Stack

### Frontend  
- **ReactJS** – UI library for building user interfaces  
- **TypeScript** – Typed JavaScript  
- **Vite** – Fast frontend tooling  
- **shadcn/ui** – Component library  

### Backend  
- **Express** – Web framework for Node.js  
- **TypeScript** – Typed JavaScript  
- **TypeORM** – ORM for database management  

### Database  
- **PostgreSQL** – SQL database  
- **NeonDB** – Serverless PostgreSQL  

### Deployment  
- **Vercel** – Deployment for frontend  
- **Render** – Deployment for backend  

---

## 🛠️ Run Instructions

### 🔹 Frontend

> Make sure to create a `.env` file based on `.env.example`.

#### 👉 Local Development


```bash
cd frontend

# Install dependencies
npm install

# Run development server
npm run dev
```
#### 🐳 Docker

```bash
cd frontend

# Build the Docker image
docker build -t my-frontend .

# Run the container
docker run -p 5173:5173 --env-file=.env my-frontend
```

### 🔹 Backend

> Make sure to create a `.env` file based on `.env.example`.

#### 👉 Local Development

```bash
cd backend

# Install dependencies
npm install

# Run development server
npm run dev
```
#### 🐳 Docker
```bash
cd backend

# Build the Docker image
docker build -t my-backend .

# Run the container
docker run -p 8000:8000 --env-file=.env my-backend
```
