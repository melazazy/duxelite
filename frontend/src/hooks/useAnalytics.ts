import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Extend the Window interface to include gtag
declare global {
  interface Window {
    gtag: any; // We've already defined the proper types in global.d.ts
    dataLayer: any[];
  }
}

// Initialize Google Analytics
export const initAnalytics = (trackingId: string) => {
  if (typeof window === 'undefined' || !trackingId) return;

  // Prevent duplicate initialization
  if (window.gtag) return;

  // Create script element
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
  document.head.appendChild(script);

  // Initialize data layer
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };

  // Configure with tracking ID
  window.gtag('js', new Date());
  window.gtag('config', trackingId, {
    send_page_view: false, // We'll handle page views manually
    transport_url: 'https://www.google-analytics.com',
    first_party_collection: true,
  });
};

// Track page view
const trackPageView = (path: string) => {
  if (!window.gtag) return;
  
  window.gtag('event', 'page_view', {
    page_path: path,
    page_title: document.title,
    page_location: window.location.href,
  });};

// Track custom event
const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (!window.gtag) return;
  
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Track errors
const trackError = (error: Error, fatal = false) => {
  trackEvent(
    'exception',
    'Error',
    `${error.name}: ${error.message}`,
    fatal ? 1 : 0
  );
};

// Hook to track page views
export const useAnalytics = (trackingId: string) => {
  const location = useLocation();

  useEffect(() => {
    // Initialize on mount
    initAnalytics(trackingId);

    // Track initial page view
    trackPageView(location.pathname);

    // Track page views on route changes
    const unlisten = () => {
      trackPageView(location.pathname);
    };

    return () => unlisten();
  }, [trackingId, location.pathname]);

  return {
    trackEvent,
    trackError,
    trackPageView: (path?: string) => trackPageView(path || location.pathname),
  };
};

// Export all necessary functions
export { trackEvent, trackError, trackPageView };

export default useAnalytics;
