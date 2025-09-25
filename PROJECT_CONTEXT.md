# Duxelite Corporate Website - Project Context

## 1. Project Overview

**Project Name:** Duxelite Corporate Website

**Project Type:** Corporate Website & Digital Presence Platform

**Target Audience:** Businesses seeking web development, ERP systems, SaaS platforms, and e-learning solutions

**Business Model:** B2B Service Provider

**Strategic Goals:**
- Establish a strong digital presence
- Showcase portfolio and expertise
- Generate qualified leads
- Build brand authority in the MENA region
- Support business growth through digital channels

## 2. Core Features & Pages

### Key Pages
- **Homepage**
  - Hero section with value proposition
  - Services overview
  - Portfolio highlights
  - Client testimonials
  - Clear call-to-action sections

- **About Us**
  - Company story and mission
  - Team showcase
  - Core values and achievements
  - Company timeline

- **Services**
  - Web Development
  - ERP Systems
  - SaaS Solutions
  - E-learning Platforms
  - Each with detailed descriptions and benefits

- **Portfolio**
  - Project gallery
  - Detailed case studies
  - Project categorization
  - Client success metrics

- **Blog**
  - SEO-optimized articles
  - Category and tag system
  - Related posts
  - Social sharing

- **Contact**
  - Contact form
  - Google Maps integration
  - Direct WhatsApp/LinkedIn access
  - Office locations and hours

## 3. Technical Stack

### Frontend
- **Framework:** React.js with Next.js
- **Styling:** TailwindCSS
- **Animation:** Framer Motion / AOS (Animate On Scroll)
- **State Management:** React Context API
- **Form Handling:** React Hook Form
- **Internationalization:** next-i18next
- **UI Components:** Headless UI / Radix UI

### Backend
- **Framework:** Laravel 12
- **API:** RESTful API
- **Authentication:** Laravel Sanctum
- **Admin Panel:** Nova / Filament
- **Caching:** Redis
- **Queue:** Laravel Horizon

### Database
- **Primary:** MySQL / MariaDB
- **Caching:** Redis
- **Search:** Laravel Scout with Meilisearch

### Infrastructure
- **Hosting:** VPS (scalable to cloud)
- **CI/CD:** GitHub Actions
- **Monitoring:** Laravel Telescope
- **Backup:** Spatie Laravel Backup
- **Security:** SSL, CSRF Protection, XSS Protection

## 4. Design System

### Color Palette
- Primary: Deep Blue (#0A2540)
- Accent: Light Cyan (#00CFFF)
- Neutral: White, Light Gray, Dark Gray
- Status: Success, Warning, Error, Info

### Typography
- Primary Font: Poppins
- Secondary Font: Inter
- Base Font Size: 16px
- Scale: 1.25 (Major Third)

### UI Components
- Buttons (Primary, Secondary, Outline, Ghost)
- Cards (Project, Team, Service)
- Forms (Input, Select, Checkbox, Radio)
- Navigation (Desktop, Mobile, Footer)
- Modals & Dialogs
- Alerts & Notifications
- Loading States
- Empty States

## 5. Performance & Optimization

### Core Web Vitals Targets
- LCP: < 2.5s
- FID: < 100ms
- CLS: < 0.1
- TTI: < 3.8s
- TBT: < 300ms

### Optimization Strategies
- Image optimization (WebP, lazy loading)
- Code splitting
- Route-based chunking
- Critical CSS inlining
- Font optimization
- Asset caching
- CDN integration

## 6. SEO Strategy

### On-Page SEO
- Semantic HTML5
- Meta tags optimization
- Structured data (Schema.org)
- XML sitemap
- robots.txt
- Canonical URLs

### Technical SEO
- Mobile-first indexing
- Page speed optimization
- SSL/HTTPS
- URL structure
- 404 handling
- Pagination

## 7. Analytics & Tracking
- Google Analytics 4
- Google Tag Manager
- Hotjar for heatmaps
- Form analytics
- Custom event tracking
- Conversion tracking

## 8. Accessibility
- WCAG 2.1 AA Compliance
- Keyboard navigation
- Screen reader optimization
- Color contrast
- ARIA labels
- Focus management

## 9. Security
- CSRF protection
- XSS prevention
- SQL injection prevention
- Rate limiting
- Secure headers
- Regular security audits

## 10. Maintenance & Support
- Uptime monitoring
- Performance monitoring
- Regular backups
- Security updates
- Content updates
- Technical support

## 11. Future Roadmap

### Phase 1 (Launch)
- Core website launch
- Basic portfolio
- Blog setup
- Contact system

### Phase 2 (Enhancement)
- Advanced case studies
- Client portal
- Resource library
- Webinars/Events

### Phase 3 (Expansion)
- Multi-language support
- Advanced analytics
- Marketing automation
- Integration with CRM

## 12. Success Metrics
- Website traffic
- Lead generation
- Conversion rates
- Engagement metrics
- Search rankings
- Social shares

### Frontend
- **Framework:** React.js
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **State Management:** React Context API / Redux
- **Development Server:** Vite Dev Server (Port 5173)

### Backend
- **Framework:** Laravel 10.x
- **API:** RESTful API with Sanctum for authentication
- **Database:** MySQL
- **Caching:** Redis (recommended)
- **Queue:** Laravel Horizon (recommended)
- **Local Development:** Laravel Sail / Docker

### Development Tools
- **Version Control:** Git with GitHub
- **CI/CD:** GitHub Actions
- **Containerization:** Docker
- **Local Environment:** Laravel Sail
- **API Testing:** Postman / Insomnia

## 3. System Architecture

### API Endpoints
- **Authentication:** Sanctum-based token authentication
- **Core Modules:**
  - Contact Management
  - Blog System
  - Portfolio Management
  - Service Catalog
  - Case Studies

### Database Schema
Key entities include:
- `contacts`: Store contact form submissions
- `blog_posts`: Blog articles and content
- `portfolio_projects`: Showcase projects
- `services`: Service offerings
- `case_studies`: Detailed project case studies

## 4. Development Environment

### Local Setup
- **App URL:** http://localhost:8081
- **PhpMyAdmin:** http://localhost:8080
- **Vite/Node:** http://localhost:5173
- **Laravel API:** http://localhost:8000

### Docker Services
- Web Server (Nginx/Apache)
- PHP 8.2
- MySQL 8.0
- Redis (for caching/queues)
- MailHog (email testing)

## 5. Project Structure

### Frontend (React)
```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── services/      # API service layer
├── hooks/         # Custom React hooks
├── contexts/      # React contexts
├── utils/         # Utility functions
└── assets/        # Static assets
```

### Backend (Laravel)
```
app/
├── Http/Controllers/Api/  # API Controllers
├── Models/                # Eloquent Models
├── Services/             # Business logic
├── Repositories/         # Data access layer
├── Mail/                 # Email templates
└── Console/              # Artisan commands

database/
├── migrations/           # Database migrations
├── seeders/             # Database seeders
└── factories/           # Model factories
```

## 6. API Documentation

### Authentication
- Uses Laravel Sanctum for API token authentication
- CSRF protection enabled for web routes
- CORS configured for development and production

### Rate Limiting
- API rate limiting implemented
- Configurable through Laravel's rate limiter

## 7. Development Workflow

### Branching Strategy
- `main`: Production-ready code
- `dev`: Integration branch
- `feature/*`: New features
- `bugfix/*`: Bug fixes
- `hotfix/*`: Critical production fixes

### Git Hooks
- Pre-commit hooks for code quality
- Pre-push hooks for testing

## 8. Testing Strategy

### Test Types
- Unit Tests (PHPUnit)
- Feature Tests (Laravel)
- Integration Tests
- End-to-End Tests (Pest)

### Test Coverage
- Minimum 80% code coverage required
- Automated testing in CI/CD pipeline

## 9. Deployment

### Environments
1. **Local**
   - For development and testing
   - Uses local database and services

2. **Staging**
   - Mirrors production environment
   - Used for QA and UAT

3. **Production**
   - Live environment
   - Monitored and maintained

### Deployment Process
1. Push to `main` branch triggers CI/CD
2. Automated tests run
3. Build process executes
4. Deployment to production after approval

## 10. Security Measures

### Data Protection
- Data encryption at rest and in transit
- Regular security audits
- Input validation and sanitization

### Authentication & Authorization
- Role-based access control (RBAC)
- JWT for API authentication
- Password hashing with bcrypt

## 11. Monitoring & Maintenance

### Logging
- Laravel's logging system
- Error tracking with Sentry
- Request logging

### Performance
- Query optimization
- Caching strategy
- Asset optimization

## 12. Future Roadmap

### Short-term Goals
1. Implement core modules
2. User authentication and authorization
3. Basic reporting

### Long-term Vision
1. AI-powered analytics
2. Mobile applications
3. Third-party integrations
4. Marketplace for plugins/extensions

## 13. Support & Documentation

### Developer Documentation
- API documentation (OpenAPI/Swagger)
- Code style guides
- Contribution guidelines

### User Documentation
- Admin manuals
- User guides
- Video tutorials

## 14. Contact Information

For technical support or inquiries, please contact the development team at [Your Contact Email].

Easy for non-specialists, yet compliant with local business regulations (e.g., VAT, e-invoicing).

Scalable and integration-ready for future modules.

Functional Requirements (Accounting Module Example)

Dashboard: KPIs (Revenue, Expenses, Profit, Cash Flow), alerts.

Invoicing: Create/send/customize invoices, VAT-ready, PDF/email, payment tracking.

Expenses: Track expenses, receipts, categories, approval workflows.

General Ledger: Auto/manual entries, account balances.

Bank Reconciliation: Manual/CSV import, future bank API integration.

Clients & Vendors: Centralized records, balances, history, credit limits.

Tax & Compliance: VAT calculations, tax-ready reports, localization support.

Reports: P&L, Balance Sheet, Cash Flow, Aged Receivables/Payables, export PDF/Excel.

Non-Functional Requirements

UX/UI: Clean, intuitive, RTL-ready, optimized for SMEs.

Performance: Dashboard <3s load, caching, queues, pagination.

Security: SSL/TLS, AES-256 encryption, RBAC, CSRF/XSS protection, API rate limiting.

Scalability: Multi-tenant (stancl/tenancy), Docker, horizontal scaling.

Integration: RESTful APIs (later GraphQL), webhooks, API Gateway.

Accessibility: WCAG compliance.

Extensibility: Modules interact via shared APIs.

Monitoring: Telescope, Horizon, Sentry/New Relic.

Testing: Unit + Feature + E2E, >80% coverage, CI/CD pipeline.

Deliverables

Functional specifications with acceptance criteria.

Wireframes/Mockups for main screens.

System architecture diagram (modules, DB, APIs).

Database schema (invoices, items, accounts, transactions).

API endpoints list.

Future integration plan with other modules.

2. Engineering Guidelines (Unified Context V2)
Development Philosophy (Gear Protocol)

Think → Plan → Act → Verify.

Safe Edits: small, explained, incremental.

Follow KISS & DRY.

Version this document in Git like code.

Back-End (Laravel/PHP)

Standards: PSR (1,4,12), clear naming.

Structure: Slim controllers, Services/Actions, Repository Pattern, Traits/Helpers.

Design: SOLID, suitable Design Patterns, avoid Anemic Domain Models.

Database: Migrations + Seeders, ≥3NF, snake_case, indexes, repositories.

Performance: Redis cache, queues, pagination.

Security: CSRF/XSS, Form Requests, Policies/Gates, rate limiting, encryption.

Testing: Unit + Feature tests (Pest).

Docs: PHPDoc, Swagger/OpenAPI, structured README.

Front-End (Livewire + Tailwind + JS/TS)

Standards: HTML5, CSS3, ECMAScript, no inline CSS/JS.

Structure: Component-based, Atomic Design for scale.

CSS/Styling: TailwindCSS, responsive, mixins/variables.

JavaScript: Master Vanilla JS, modular ES6, SOLID components, TypeScript/JSDoc, Alpine.js/Redux for state.

Performance: Minification, Tree-shaking, Code Splitting, Lazy Loading, optimized images.

Accessibility: Semantic HTML, alt text, ARIA, keyboard nav.

UX/UI: Consistency, clear navigation, feedback.

Security: Client validation, secure API handling.

Testing: Jest/RTL for components, Cypress/Playwright E2E, ESLint + Prettier.

Docs: README, Storybook/Styleguide if needed.

Collaboration & DevOps

Code Review: mandatory for every PR.

Git Workflow: branch → PR → review → merge.

CI/CD: GitHub Actions (tests + lint + deploy).

Environment Variables: .env for configs.

Logging/Monitoring: Telescope, Horizon (dev); Sentry/New Relic (prod).

Backup/Logs: spatie/backup + spatie/activitylog.

Docs: README, Wiki, project guides.

Expected Deliverables (Any Module)

Clean, structured code.

Unit + Feature + E2E tests.

Documentation (README, comments, guides).

Responsive UI.

Scalable design.

Monitoring & logging ready.

3. Project Setup & Tools
Core Tech

Framework: Laravel 12 (Livewire + Tailwind).

Database: MySQL (PostgreSQL-ready).

Multi-tenancy: stancl/tenancy.

Billing: Laravel Cashier.

Admin Panel: Filament.

Caching/Queues: Redis + Horizon.

Debugging/Monitoring: Telescope, Debugbar, Sentry.

Backup/Logs: spatie/backup + spatie/activitylog.

Dev Environment

Dockerized setup with docker-compose.yml.

install.sh for initializing project & packages.

verify.sh for checking package installation.

Access (Local)

App: http://localhost:8081

PhpMyAdmin: http://localhost:8080

Vite/Node: http://localhost:5173

GitHub Workflow

Branching: main (stable), dev (integration), feature/*.

PR template + Issue template.

GitHub Actions for testing + linting + deployment.
