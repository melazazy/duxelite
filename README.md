# Duxelite Corporate Website

A modern corporate website and digital presence platform for Duxelite, showcasing web development services, portfolio, and expertise in the MENA region.

## Project Overview

**Target Audience:** Businesses seeking web development, ERP systems, SaaS platforms, and e-learning solutions

**Core Services:**
- Web Development
- ERP Systems
- SaaS Solutions
- E-learning Platforms

**Key Features:**
- Modern responsive design
- Portfolio showcase
- Blog system
- Contact management
- Admin dashboard
- SEO optimization
- Multi-language support (Arabic/English)

## Technical Architecture

This project uses a modern full-stack architecture:

- **Frontend:** React/TypeScript with Vite, Tailwind CSS, Framer Motion
- **Backend:** Laravel 12 with Filament admin panel
- **Database:** MySQL with Redis caching
- **Authentication:** Laravel Sanctum
- **Development:** Docker support, GitHub Actions CI/CD

## Getting Started

### Prerequisites

- Node.js 18+
- PHP 8.2+
- Composer
- MySQL 8.0+
- Docker (optional, for containerized development)

### Installation

1. Navigate to the project directory:
```bash
cd /path/to/duxone
```

2. Install PHP dependencies:
```bash
cd backend && composer install
```

3. Install Node.js dependencies:
```bash
cd frontend && npm install
```

4. Set up environment variables:
```bash
# Copy and configure environment files
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env

# Configure your database settings in backend/.env
```

5. Generate application key:
```bash
cd backend && php artisan key:generate
```

6. Run database migrations:
```bash
cd backend && php artisan migrate
```

7. Start development servers:
```bash
# Option 1: Using npm scripts (recommended)
npm run dev

# Option 2: Using Laravel Sail (if Docker is available)
cd backend && ./vendor/bin/sail up
```

### Development URLs
- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:8000
- **Admin Panel:** http://localhost:8000/admin

## Core Features

### Website Sections
- **Homepage** - Hero section, services overview, portfolio highlights
- **About Us** - Company story, team showcase, mission and values
- **Services** - Web development, ERP systems, SaaS solutions, e-learning platforms
- **Portfolio** - Project gallery, detailed case studies, client success metrics
- **Blog** - SEO-optimized articles, content management system
- **Contact** - Contact forms, Google Maps integration, direct communication channels

### Technical Features
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Performance Optimized** - Fast loading, SEO-friendly, Core Web Vitals compliant
- **Admin Dashboard** - Content management via Filament admin panel
- **Multi-language Support** - Arabic and English language switching
- **SEO Ready** - Meta tags, structured data, sitemap generation
- **Security** - CSRF protection, XSS prevention, secure authentication
- **API Integration** - RESTful API for frontend-backend communication

## Technology Stack

### Frontend
- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite 5.4
- **Styling:** Tailwind CSS 3.4
- **Animation:** Framer Motion 12.23
- **Forms:** React Hook Form with Yup validation
- **HTTP Client:** Axios
- **Icons:** Lucide React
- **State Management:** React Context API

### Backend
- **Framework:** Laravel 12
- **PHP Version:** 8.2+
- **Database:** MySQL 8.0+
- **ORM:** Eloquent
- **Authentication:** Laravel Sanctum
- **Admin Panel:** Filament 3.2
- **Caching:** Redis
- **Queue System:** Laravel Horizon
- **API Documentation:** Laravel Swagger (l5-swagger)

### Development & DevOps
- **Version Control:** Git with GitHub
- **Package Managers:** Composer (PHP), npm (Node.js)
- **Code Quality:** ESLint, Prettier, PHP CS Fixer
- **Containerization:** Docker with Laravel Sail
- **CI/CD:** GitHub Actions
- **Testing:** PHPUnit, Pest
- **Monitoring:** Laravel Telescope

## Project Roadmap

### Phase 1 (Current - Foundation)
- ✅ Core website structure and design system
- ✅ Basic portfolio showcase
- ✅ Contact forms and lead generation
- 🔄 Blog system implementation
- 🔄 Admin dashboard setup

### Phase 2 (Next - Enhancement)
- ⏳ Advanced case studies and project details
- ⏳ Client portal for project management
- ⏳ Resource library and downloads
- ⏳ Webinars and events management
- ⏳ Performance optimization and SEO improvements

### Phase 3 (Future - Expansion)
- ⏳ Multi-language support (Arabic/English)
- ⏳ Advanced analytics and tracking
- ⏳ Marketing automation integration
- ⏳ CRM system integration
- ⏳ Mobile application development

## Development Workflow

### Branching Strategy
- `main` - Production-ready code
- `dev` - Integration branch for testing
- `feature/*` - New features and enhancements
- `bugfix/*` - Bug fixes and patches
- `hotfix/*` - Critical production fixes

### Code Quality Standards
- **Frontend:** ESLint, Prettier, TypeScript strict mode
- **Backend:** PHP CS Fixer, PSR standards compliance
- **Testing:** Minimum 80% code coverage
- **Commits:** Conventional commit messages
- **Pull Requests:** Require review and testing

## Contributing

We welcome contributions to improve the Duxelite Corporate Website! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Make your changes** following our coding standards
4. **Add tests** for new functionality
5. **Commit your changes** (`git commit -m 'Add some amazing feature'`)
6. **Push to the branch** (`git push origin feature/amazing-feature`)
7. **Open a Pull Request**

### Development Guidelines
- Follow the established code style and conventions
- Write clear, concise commit messages
- Add appropriate tests for new features
- Update documentation for any API changes
- Ensure all tests pass before submitting PR

## Support & Documentation

### Local Development Setup
```bash
# Install all dependencies
npm install && cd backend && composer install

# Set up environment
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env

# Run migrations and seeders
cd backend && php artisan migrate && php artisan db:seed

# Start development servers
npm run dev
```

### Useful Commands
```bash
# Frontend commands
cd frontend && npm run dev      # Start dev server
cd frontend && npm run build    # Build for production
cd frontend && npm run lint     # Run linting

# Backend commands
cd backend && php artisan serve           # Start Laravel server
cd backend && php artisan queue:work      # Process queues
cd backend && php artisan test            # Run tests
cd backend && php artisan migrate:fresh   # Reset database
```

## License

This project is proprietary software developed exclusively for Duxelite.

© 2025 Duxelite. All rights reserved.

## Contact & Support

For technical support, feature requests, or business inquiries:

- **Email:** [support@duxelite.net]
- **LinkedIn:** [Duxelite LinkedIn Page]
- **Website:** [www.duxelite.net]

---

**Built with ❤️ by the Duxelite Development Team**

*Duxelite - Empowering businesses through innovative web solutions*
