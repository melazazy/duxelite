# Duxelite Corporate Website

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-13.4+-000000?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Laravel](https://img.shields.io/badge/Laravel-12.x-FF2D20?style=flat&logo=laravel&logoColor=white)](https://laravel.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.0-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

## 🌟 Overview

Duxelite is a modern corporate website built with Next.js and Laravel, designed to showcase our services in web development, ERP systems, SaaS platforms, and e-learning solutions. The website is built with performance, accessibility, and SEO in mind.

## ✨ Features

- **Modern & Responsive Design**
  - Mobile-first approach
  - Dark mode support
  - Smooth animations and transitions

- **Core Pages**
  - Homepage with key services and portfolio highlights
  - Detailed service pages
  - Portfolio with case studies
  - Blog with SEO optimization
  - Contact page with integrated forms

- **Technical Highlights**
  - Server-side rendering with Next.js
  - RESTful API with Laravel
  - Optimized for Core Web Vitals
  - Multi-language support ready

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- PHP 8.2+
- Composer 2.5+
- MySQL 8.0+
- Redis (for caching and queues)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-org/duxelite-website.git
   cd duxelite-website
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd ../backend
   composer install
   ```

4. **Environment Setup**
   - Copy `.env.example` to `.env` in both frontend and backend directories
   - Generate application key: `php artisan key:generate`
   - Configure database and other environment variables

5. **Database Setup**
   ```bash
   php artisan migrate --seed
   ```

6. **Start Development Servers**
   - Frontend: `npm run dev` (runs on http://localhost:3000)
   - Backend: `php artisan serve` (runs on http://localhost:8000)

## 🛠 Development

### Frontend Development
```bash
cd frontend
npm run dev
```

### Backend Development
```bash
cd backend
php artisan serve
```

### Running Tests
```bash
# Frontend tests
npm test

# Backend tests
php artisan test
```

### Building for Production
```bash
# Frontend
npm run build

# Backend
composer install --optimize-autoloader --no-dev
php artisan optimize
```

## 📦 Tech Stack

### Frontend
- **Framework:** Next.js 13+
- **Styling:** Tailwind CSS 3.3+
- **State Management:** React Context API
- **Animation:** Framer Motion
- **Form Handling:** React Hook Form
- **Internationalization:** next-i18next

### Backend
- **Framework:** Laravel 12
- **API:** RESTful
- **Authentication:** Laravel Sanctum
- **Admin Panel:** Nova / Filament
- **Caching:** Redis
- **Search:** Laravel Scout with Meilisearch

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

For any inquiries, please contact us at [contact@duxelite.com](mailto:contact@duxelite.com)

---

<div align="center">
  Made with ❤️ by Duxelite Team
</div>
