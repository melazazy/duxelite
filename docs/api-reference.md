# API Reference

All API routes are prefixed with `/api`. Responses follow the structure:

```json
{
  "success": true,
  "data": { ... }
}
```

Error responses include a `message` field and may include a `errors` object for validation failures.

---

## Blog

### `GET /api/blog/posts`
Returns a paginated list of published blog posts.

**Query Parameters:**

| Param | Type | Description |
|---|---|---|
| `page` | integer | Page number (default: 1) |
| `per_page` | integer | Items per page (default: 10) |
| `category` | string | Filter by category slug |
| `search` | string | Full-text search query |

**Response:** Paginated array of `BlogPost` objects with `meta.current_page`, `meta.last_page`, `meta.total`.

---

### `GET /api/blog/posts/{slug}`
Returns a single blog post by its slug.

---

### `GET /api/blog/homepage`
Returns a curated selection of blog posts for display on the homepage.

---

### `POST /api/blog/posts` *(Admin)*
Creates a new blog post.

---

### `PUT /api/blog/posts/{id}` *(Admin)*
Updates an existing blog post.

---

### `DELETE /api/blog/posts/{id}` *(Admin)*
Deletes a blog post.

---

## Blog Categories

### `GET /api/blog/categories`
Returns all blog categories.

### `POST /api/blog/categories` *(Admin)*
Creates a new category.

### `GET /api/blog/categories/{id}`
Returns a single category.

### `PUT /api/blog/categories/{id}` *(Admin)*
Updates a category.

### `DELETE /api/blog/categories/{id}` *(Admin)*
Deletes a category.

---

## Projects (Portfolio)

### `GET /api/projects`
Returns all published projects.

**Query Parameters:**

| Param | Type | Description |
|---|---|---|
| `category` | string | Filter by category slug |

---

### `GET /api/projects/{slug}`
Returns a single project by slug.

---

### `GET /api/projects/homepage`
Returns featured projects for the homepage.

---

### `POST /api/projects` *(Admin)*
Creates a new project.

### `PATCH /api/projects/{slug}` *(Admin)*
Updates an existing project.

### `DELETE /api/projects/{slug}` *(Admin)*
Deletes a project.

---

## Project Categories

### `GET /api/project-categories`
Returns all project categories.

### `POST /api/project-categories` *(Admin)*
Creates a new category.

### `GET /api/project-categories/{id}`
Returns a single category.

### `PUT /api/project-categories/{id}` *(Admin)*
Updates a category.

### `DELETE /api/project-categories/{id}` *(Admin)*
Deletes a category.

---

## Case Studies

### `GET /api/case-studies`
Returns all published case studies.

### `GET /api/case-studies/{slug}`
Returns a single case study by slug.

### `GET /api/case-studies/homepage`
Returns featured case studies for the homepage.

### `POST /api/case-studies` *(Admin)*
Creates a new case study.

### `PUT /api/case-studies/{id}` *(Admin)*
Updates an existing case study.

### `DELETE /api/case-studies/{id}` *(Admin)*
Deletes a case study.

---

## Services

### `GET /api/services`
Returns all services.

### `GET /api/services/{slug}`
Returns a single service by slug.

### `GET /api/services/homepage`
Returns featured services for the homepage.

### `POST /api/services` *(Admin)*
Creates a new service.

### `PUT /api/services/{id}` *(Admin)*
Updates a service.

### `DELETE /api/services/{id}` *(Admin)*
Deletes a service.

---

## Testimonials

### `GET /api/testimonials`
Returns all published testimonials.

### `POST /api/testimonials` *(Admin)*
Creates a new testimonial.

### `GET /api/testimonials/{id}`
Returns a single testimonial.

### `PUT /api/testimonials/{id}` *(Admin)*
Updates a testimonial.

### `DELETE /api/testimonials/{id}` *(Admin)*
Deletes a testimonial.

---

## Contact

### `POST /api/contact`
Submits a contact form message. Triggers an email notification.

**Request Body:**

```json
{
  "name": "string (required)",
  "email": "string (required, valid email)",
  "company": "string (optional)",
  "phone": "string (optional)",
  "service": "string (required)",
  "budget": "string (optional)",
  "timeline": "string (optional)",
  "message": "string (required)"
}
```

**Response:**

```json
{
  "success": true,
  "message": "Thank you for your message! We will get back to you soon."
}
```

---

## Newsletter

### `POST /api/newsletter`
Subscribes an email to the newsletter.

**Request Body:**

```json
{
  "email": "string (required, valid email)"
}
```

### `DELETE /api/newsletter/{email}`
Unsubscribes an email from the newsletter.

---

## Authentication

### `POST /api/auth/login`
Authenticates a user and returns a session token.

**Request Body:**

```json
{
  "email": "string",
  "password": "string"
}
```

### `POST /api/auth/logout`
Logs out the authenticated user and invalidates the session.

### `POST /api/auth/register`
Registers a new user account.

### `POST /api/auth/forgot-password`
Sends a password reset link to the given email.

### `POST /api/auth/reset-password`
Resets the password using a token from the reset email.

---

> **Full interactive docs** are available via Swagger at `http://localhost:8000/api/documentation` (when running locally).
