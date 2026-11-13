# Getting Started

This guide walks you through setting up the Duxelite project for local development.

## Prerequisites

Make sure the following are installed on your machine:

- **Node.js** 18+
- **PHP** 8.2+
- **Composer**
- **MySQL** 8.0+
- **Docker** *(optional — for containerized development)*

---

## Installation

### 1. Clone and enter the project

```bash
cd /path/to/duxone
```

### 2. Install PHP dependencies

```bash
cd backend && composer install
```

### 3. Install Node.js dependencies

```bash
cd frontend && npm install
```

### 4. Set up environment variables

```bash
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
```

Then open `backend/.env` and configure your database connection (`DB_HOST`, `DB_DATABASE`, `DB_USERNAME`, `DB_PASSWORD`).

### 5. Generate the application key

```bash
cd backend && php artisan key:generate
```

### 6. Run database migrations

```bash
cd backend && php artisan migrate
```

Optionally seed the database with sample data:

```bash
cd backend && php artisan db:seed
```

### 7. Start development servers

```bash
# Option 1: Root npm script (recommended — starts both frontend and backend)
npm run dev

# Option 2: Laravel Sail (Docker-based)
cd backend && ./vendor/bin/sail up
```

---

## Development URLs

| Service | URL |
|---|---|
| Frontend (React/Vite) | http://localhost:5173 |
| Backend API (Laravel) | http://localhost:8000 |
| Admin Panel (Filament) | http://localhost:8000/admin |

---

## Useful Commands

### Frontend

```bash
cd frontend && npm run dev      # Start dev server with hot reload
cd frontend && npm run build    # Build for production
cd frontend && npm run lint     # Run ESLint
```

### Backend

```bash
cd backend && php artisan serve            # Start Laravel dev server
cd backend && php artisan queue:work       # Process background job queues
cd backend && php artisan test             # Run all tests
cd backend && php artisan migrate:fresh    # Drop and re-run all migrations
cd backend && php artisan migrate:fresh --seed  # Reset DB and seed sample data
```

---

## Environment Variables

### Frontend (`frontend/.env`)

| Variable | Description |
|---|---|
| `VITE_API_BASE_URL` | Base URL for the backend API (e.g. `http://localhost:8000/api`) |

### Backend (`backend/.env`)

| Variable | Description |
|---|---|
| `APP_KEY` | Auto-generated Laravel app key |
| `DB_*` | Database connection settings |
| `REDIS_*` | Redis cache/queue connection |
| `MAIL_*` | Mail driver and credentials for contact form emails |

---

> See [Architecture Overview](./architecture.md) for a deeper look at the project structure.
