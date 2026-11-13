# Architecture Overview

The Duxelite platform is a **full-stack monorepo** with a React frontend and a Laravel backend, communicating over a RESTful JSON API.

---

## High-Level Structure

```
duxone/
├── frontend/          # React + TypeScript (Vite)
│   └── src/
│       ├── components/    # Reusable UI components
│       ├── pages/         # Route-level page components
│       ├── hooks/         # Custom React hooks
│       ├── services/      # API service layer
│       ├── context/       # React context providers
│       └── utils/         # Pure utility functions
├── backend/           # Laravel 12 (PHP 8.2+)
│   └── app/
│       ├── Http/Controllers/Api/   # REST API controllers
│       ├── Http/Controllers/Auth/  # Authentication controllers
│       ├── Models/                 # Eloquent ORM models
│       ├── Http/Middleware/        # Request middleware
│       └── Mail/                   # Mailable classes
├── docs/              # Technical documentation (this folder)
└── database/          # Migrations and seeders
```

---

## Technology Stack

### Frontend

| Tool | Version | Purpose |
|---|---|---|
| React | 18 | UI framework |
| TypeScript | 5+ | Type-safe JavaScript |
| Vite | 5.4 | Build tool and dev server |
| Tailwind CSS | 3.4 | Utility-first styling |
| Framer Motion | 12.23 | Animations and transitions |
| React Hook Form | — | Form state management |
| Yup | — | Schema-based form validation |
| Axios | — | HTTP client for API calls |
| Lucide React | — | Icon library |
| React Context API | — | Global state management |

### Backend

| Tool | Version | Purpose |
|---|---|---|
| Laravel | 12 | PHP web framework |
| PHP | 8.2+ | Runtime |
| MySQL | 8.0+ | Primary database |
| Eloquent ORM | — | Database abstraction layer |
| Laravel Sanctum | — | API token authentication |
| Filament | 3.2 | Admin dashboard panel |
| Redis | — | Caching and queue storage |
| Laravel Horizon | — | Queue monitoring dashboard |
| l5-swagger | — | OpenAPI/Swagger API documentation |
| Laravel Telescope | — | Dev-time request and query monitoring |

### DevOps & Tooling

| Tool | Purpose |
|---|---|
| Git + GitHub | Version control |
| GitHub Actions | CI/CD pipeline |
| Docker / Laravel Sail | Containerized local development |
| ESLint + Prettier | Frontend code quality |
| PHP CS Fixer | Backend code style (PSR standards) |
| PHPUnit + Pest | Backend testing |

---

## Data Flow

```
Browser
  │
  ▼
React (Vite SPA)
  │  axios / fetch
  ▼
Laravel REST API  (/api/*)
  │  Eloquent ORM
  ▼
MySQL Database
  │
  └── Redis (cache layer for frequent reads)
```

---

## Admin Panel

The Filament admin panel is accessible at `/admin`. It allows the content team to:

- Create, edit, and publish **blog posts**
- Manage **portfolio projects** and **case studies**
- View and respond to **contact form submissions**
- Manage **newsletter subscribers**
- Configure **services** and **testimonials**

---

> See [API Reference](./api-reference.md) for endpoint details, or [Frontend Hooks & Services](./frontend-hooks-services.md) for the client-side data layer.
