# Development Workflow

Standards and practices for the Duxelite development team.

---

## Branching Strategy

| Branch | Purpose |
|---|---|
| `main` | Production-ready code — always deployable |
| `dev` | Integration branch — features are merged here first for testing |
| `feature/*` | New features and enhancements (e.g. `feature/blog-search`) |
| `bugfix/*` | Bug fixes (e.g. `bugfix/contact-form-email`) |
| `hotfix/*` | Critical production fixes applied directly on top of `main` |

---

## Code Quality Standards

### Frontend
- **ESLint** — enforces JavaScript/TypeScript rules
- **Prettier** — auto-formats code on save
- **TypeScript** strict mode — no implicit `any`, strict null checks

### Backend
- **PHP CS Fixer** — auto-formats PHP to PSR-12 standard
- PSR-12 code style compliance throughout

### Testing
- Minimum **80% code coverage** required
- Backend: **PHPUnit** and **Pest**
- All tests must pass before merging

### Commits
- Use [Conventional Commits](https://www.conventionalcommits.org/) format:
  ```
  feat: add newsletter unsubscribe endpoint
  fix: correct image fallback in useImageLoader
  docs: update API reference for case studies
  chore: upgrade Tailwind to 3.4
  ```

---

## Pull Request Process

1. **Fork or branch** from `dev`
2. Make your changes following the code style standards above
3. **Write or update tests** for any new or modified functionality
4. Run the full test suite locally:
   ```bash
   cd backend && php artisan test
   cd frontend && npm run lint
   ```
5. Open a Pull Request against `dev`
6. At least **one review and approval** is required before merging
7. All CI checks must pass (GitHub Actions)

---

## CI/CD Pipeline

GitHub Actions runs automatically on every pull request and push to `main`/`dev`:

- **Frontend:** lint check, TypeScript type check, build
- **Backend:** PHP CS Fixer check, PHPUnit test suite
- **Deploy:** Merges to `main` trigger a production deployment

---

## Contributing Guidelines

- Follow the established code style (run formatters before committing)
- Write clear, concise commit messages in Conventional Commit format
- Add tests for every new feature or bug fix
- Update the relevant doc in `docs/` for any API or interface changes
- Keep pull requests focused — one feature or fix per PR

---

> For setup instructions see [Getting Started](./getting-started.md). For the API spec see [API Reference](./api-reference.md).
