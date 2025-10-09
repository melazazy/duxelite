import React, { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { lazyLoadImages } from './utils/imageUtils';
import { AnalyticsProvider } from './context/AnalyticsContext';
import { AppProvider } from './context/AppContext';
import Maintenance from './pages/Maintenance';

// Get environment variables with type safety
const gaTrackingId = import.meta.env.VITE_GA_TRACKING_ID || '';
const isMaintenanceMode = import.meta.env.VITE_MAINTENANCE_MODE === 'true';

// Initialize lazy loading of images
document.addEventListener('DOMContentLoaded', () => {
  // Start lazy loading images
  lazyLoadImages();
  
  // Add a listener for route changes to handle new images
  const observer = new MutationObserver((mutations) => {
    mutations.forEach(() => {
      lazyLoadImages();
    });
  });
  
  // Observe the entire document for changes
  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
});

// Error Boundary Component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    // You can also log the error to an error reporting service
    // logErrorToService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center p-8 max-w-md">
            <h1 className="text-2xl font-bold text-red-600 mb-4">
              Something went wrong
            </h1>
            <p className="text-gray-700 mb-6">
              We're sorry, but an unexpected error occurred. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Add a loading state
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

// Render the app with error boundary and suspense
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <Suspense fallback={<LoadingFallback />}>
        <BrowserRouter>
          <AnalyticsProvider trackingId={gaTrackingId}>
            <AppProvider>
              {isMaintenanceMode ? (
                <Maintenance />
              ) : (
                <App />
              )}
            </AppProvider>
          </AnalyticsProvider>
        </BrowserRouter>
      </Suspense>
    </ErrorBoundary>
  </StrictMode>
);
