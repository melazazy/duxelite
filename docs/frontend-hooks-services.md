# Frontend Hooks & Services

This document covers all custom React hooks, service classes, and utility functions in the frontend codebase.

---

## Custom Hooks

Hooks live in `frontend/src/hooks/`. They encapsulate data-fetching, state management, and side-effects so page components stay clean.

---

### `useApi<T>` — [`useApi.ts`](../frontend/src/hooks/useApi.ts)

Generic data-fetching hook. All domain-specific hooks are built on top of this.

```ts
function useApi<T>(
  apiCall: () => Promise<T>,
  dependencies?: any[]
): { data: T | null; loading: boolean; error: string | null; refetch: () => void }
```

**Returns:** `data`, `loading`, `error`, and a `refetch` function to manually re-trigger the fetch.

---

### Domain Hooks — [`useApi.ts`](../frontend/src/hooks/useApi.ts)

Pre-wired hooks for each data type. Each delegates to its matching `ApiService` method.

| Hook | Returns | API method called |
|---|---|---|
| `useBlogPosts(category?, search?)` | `BlogPost[]` | `getBlogPosts()` |
| `useBlogHomePageData()` | `BlogPost[]` | `getBlogHomePageData()` |
| `usePortfolioHomePageData()` | `PortfolioProject[]` | `getPortfolioHomePageData()` |
| `useServicesHomePageData()` | `Service[]` | `getServicesHomePageData()` |
| `useCaseStudiesHomePageData()` | `CaseStudy[]` | `getCaseStudiesHomePageData()` |

---

### `useFormSubmission<T>` — [`useApi.ts`](../frontend/src/hooks/useApi.ts)

Wraps any async form submission with `loading`, `success`, and `error` state. Resets `success` automatically after 5 seconds.

```ts
function useFormSubmission<T>(): {
  submit: (apiCall: () => Promise<T>) => Promise<void>;
  loading: boolean;
  success: boolean;
  error: string | null;
}
```

---

### `useCaseStudy(slug?)` — [`useCaseStudy.ts`](../frontend/src/hooks/useCaseStudy.ts)

Fetches a single case study by slug. Falls back to local hardcoded data if the API is unavailable.

```ts
function useCaseStudy(slug?: string): {
  caseStudy: CaseStudy | null;
  loading: boolean;
  error: Error | null;
}
```

---

### `useAllCaseStudies()` — [`useCaseStudy.ts`](../frontend/src/hooks/useCaseStudy.ts)

Fetches all case studies. Falls back to local data on API failure.

```ts
function useAllCaseStudies(): {
  caseStudies: CaseStudy[];
  loading: boolean;
  error: Error | null;
}
```

---

### `useProject(slug?)` — [`useProject.ts`](../frontend/src/hooks/useProject.ts)

Fetches a single project by slug. Falls back to hardcoded mock data if the API is unavailable.

```ts
function useProject(slug?: string): {
  project: ProjectDetail | null;
  loading: boolean;
  error: Error | null;
}
```

---

### `useProjects()` — [`useProject.ts`](../frontend/src/hooks/useProject.ts)

Fetches all projects. Falls back to mock data on API failure.

```ts
function useProjects(): {
  projects: ProjectDetail[];
  loading: boolean;
  error: Error | null;
}
```

---

### `useImageLoader(src, fallback?)` — [`useImageLoader.ts`](../frontend/src/hooks/useImageLoader.ts)

Tracks the load state of an image. If loading fails, it falls back to the provided fallback URL.

```ts
function useImageLoader(src: string, fallback?: string): {
  src: string;
  isLoading: boolean;
  error: Error | null;
}
```

---

### `useAnalytics(trackingId)` — [`useAnalytics.ts`](../frontend/src/hooks/useAnalytics.ts)

Initializes Google Analytics and tracks page views automatically on route changes.

```ts
function useAnalytics(trackingId: string): {
  trackEvent: (action, category, label?, value?) => void;
  trackError: (error: Error, fatal?: boolean) => void;
  trackPageView: (path?: string) => void;
}
```

---

## Standalone Analytics Functions — [`useAnalytics.ts`](../frontend/src/hooks/useAnalytics.ts)

These can be imported and called directly when you are outside a React component or don't need the full hook.

| Function | Description |
|---|---|
| `initAnalytics(trackingId)` | Injects the GA script and configures the tracker |
| `trackPageView(path)` | Sends a page view event to GA |
| `trackEvent(action, category, label?, value?)` | Sends a custom event to GA |
| `trackError(error, fatal?)` | Sends an exception event to GA |

---

## Service Classes

Services live in `frontend/src/services/`. They handle all HTTP communication with the backend API and return typed data to hooks and components.

---

### `ApiService` — [`apiService.ts`](../frontend/src/services/apiService.ts)

A singleton Axios-based class that wraps all backend API calls. Import the default export — it is a pre-constructed instance.

```ts
import apiService from '../services/apiService';
```

#### Generic HTTP Methods

| Method | Description |
|---|---|
| `get<T>(url)` | GET request. Returns `T`. Silently handles network errors with a fallback empty array. |
| `post<T>(url, data)` | POST request. Returns `T`. |
| `put<T>(url, data)` | PUT request. Returns `T`. |
| `delete<T>(url)` | DELETE request. Returns `T`. |

#### Domain Methods

| Method | Returns | Description |
|---|---|---|
| `submitContactForm(formData)` | `Promise<ContactResponse>` | Posts a contact form submission |
| `subscribeNewsletter(email)` | `Promise<NewsletterResponse>` | Subscribes an email to the newsletter |
| `getBlogPosts(params?)` | `Promise<BlogPostsResponse>` | Fetches paginated blog posts (supports `page`, `category`, `search`, `per_page`) |
| `getBlogPost(slug)` | `Promise<BlogPost>` | Fetches a single blog post |
| `getBlogHomePageData()` | `Promise<BlogPost[]>` | Fetches homepage-featured blog posts |
| `getPortfolioProjects(category?)` | `Promise<PortfolioProject[]>` | Fetches all projects, optionally filtered by category |
| `getPortfolioHomePageData()` | `Promise<PortfolioProject[]>` | Fetches homepage-featured projects |
| `getServices()` | `Promise<Service[]>` | Fetches all services (parses JSON `features` field if stored as string) |
| `getServicesHomePageData()` | `Promise<Service[]>` | Fetches homepage-featured services |
| `getCaseStudies()` | `Promise<CaseStudy[]>` | Fetches all case studies |
| `getCaseStudy(slug)` | `Promise<CaseStudy>` | Fetches a single case study by slug |
| `getCaseStudiesHomePageData()` | `Promise<CaseStudy[]>` | Fetches homepage-featured case studies |
| `getTestimonials()` | `Promise<Testimonial[]>` | Fetches all testimonials |

#### Request Interceptors

The service automatically:
- Attaches the CSRF token from `<meta name="csrf-token">` to every request
- Attaches `Accept-Language` from `localStorage.getItem('language')` (defaults to `en`)
- Logs validation errors (422) and server errors (500) to the console

---

### `FormService` — [`formService.ts`](../frontend/src/services/formService.ts)

A thin wrapper around `ApiService` that adds client-side validation before making API calls. Imported as a singleton.

```ts
import formService from '../services/formService';
```

| Method | Description |
|---|---|
| `submitContactForm(formData)` | Validates required fields and email format, then posts to `/contact` |
| `subscribeToNewsletter(email)` | Validates email format, then posts to `/newsletter` |

Both methods return `{ success: boolean; message: string }` and never throw — errors are caught and returned in the response object.

---

### `projectService.ts` — [`projectService.ts`](../frontend/src/services/projectService.ts)

Standalone `fetch`-based functions (not Axios) for project CRUD. Useful outside of the `ApiService` singleton.

| Function | Description |
|---|---|
| `fetchProjects()` | Fetches and transforms all projects from the API |
| `fetchProjectBySlug(slug)` | Fetches and transforms a single project |
| `createProject(projectData)` | POSTs a new project (admin use) |
| `updateProject(slug, projectData)` | PATCHes an existing project (admin use) |
| `deleteProject(slug)` | DELETEs a project (admin use) |

All functions throw on HTTP errors and log to the console.

---

## Context Providers

Context files live in `frontend/src/context/`.

---

### `AppProvider` — [`AppContext.tsx`](../frontend/src/context/AppContext.tsx)

Wraps the app with global UI state.

```tsx
<AppProvider>
  <App />
</AppProvider>
```

**Provides via `useAppContext()`:**

| Value | Type | Description |
|---|---|---|
| `isDarkMode` | `boolean` | Whether dark mode is active |
| `toggleDarkMode()` | `() => void` | Toggles dark mode and updates `document.documentElement` class |
| `isAuthenticated` | `boolean` | Whether the user is logged in |
| `login(token)` | `(token: string) => void` | Sets auth state and stores token in `localStorage` |
| `logout()` | `() => void` | Clears auth state and removes token from `localStorage` |
| `userToken` | `string \| null` | The stored auth token |

---

### `AnalyticsProvider` — [`AnalyticsContext.tsx`](../frontend/src/context/AnalyticsContext.tsx)

Wraps the app with analytics tracking.

```tsx
<AnalyticsProvider trackingId="G-XXXXXXXXXX">
  <App />
</AnalyticsProvider>
```

**Provides via `useAnalyticsContext()`:**

| Value | Description |
|---|---|
| `trackEvent(action, category, label?, value?)` | Send a custom GA event |
| `trackError(error, fatal?)` | Send an exception event to GA |
| `trackPageView(path?)` | Manually track a page view |

---

## Utility Functions

Utilities live in `frontend/src/utils/`.

---

### `imageUtils.ts` — [`imageUtils.ts`](../frontend/src/utils/imageUtils.ts)

#### `getResponsiveImageSources(basePath, options?)`

Generates a `srcSet` and `sizes` string for responsive images.

```ts
getResponsiveImageSources('/images/hero.jpg', {
  widths: [320, 640, 960, 1280, 1920],  // default
  sizes: '(max-width: 768px) 100vw, 50vw',
  format: 'webp',  // default
  quality: 80,     // default
})
// Returns: { srcSet, sizes, src }
```

#### `preloadImages(imageUrls)`

Injects `<link rel="preload" as="image">` tags into `<head>` for a list of URLs. Use for critical above-the-fold images.

```ts
preloadImages(['/images/hero.jpg', '/images/logo.png']);
```

#### `lazyLoadImages()`

Activates lazy loading for all `<img data-src="...">` elements using `IntersectionObserver`. Falls back to immediate loading in browsers without observer support.

---

## Build Scripts

Scripts live in `frontend/scripts/`.

---

### `optimize-images.js` — [`optimize-images.js`](../frontend/scripts/optimize-images.js)

Run with:

```bash
node frontend/scripts/optimize-images.js
```

**What it does:**
1. Scans `frontend/public/images/**` for `.jpg`, `.jpeg`, `.png`, `.gif`, `.webp` files
2. For each image, creates:
   - A full-quality WebP version (`*-optimized.webp`)
   - Responsive WebP variants at widths: 320, 640, 960, 1280, 1920px
3. Skips files already ending in `-optimized`

Requires the `sharp` and `glob` npm packages.
