# DuxOne - All-in-One Business Platform (SaaS)

A comprehensive SaaS platform with modular architecture for accounting, HR, and CRM functionalities.

## Project Structure

This project uses a monorepo structure:

- `/frontend` - React/TypeScript frontend with Vite and Tailwind CSS
- `/backend` - Laravel PHP backend API
- `/database` - Database migrations and seeders

## Getting Started

### Prerequisites

- Node.js 16+
- PHP 8.1+
- Composer
- MySQL or PostgreSQL

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/duxone.git
cd duxone
```

2. Install dependencies:
```bash
npm install
cd backend && composer install
```

3. Set up environment variables:
```bash
cp backend/.env.example backend/.env
# Configure your database settings in .env
```

4. Run migrations:
```bash
cd backend && php artisan migrate
```

5. Start development servers:
```bash
npm run dev
```

## Features

- Multi-tenant architecture
- Accounting module
- HR module (coming soon)
- CRM module (coming soon)
- Subscription management

## Technology Stack

- **Frontend**: React, TypeScript, Tailwind CSS, Vite
- **Backend**: Laravel, PHP
- **Database**: MySQL/PostgreSQL
- **Authentication**: Laravel Sanctum

## License

[MIT](LICENSE)
