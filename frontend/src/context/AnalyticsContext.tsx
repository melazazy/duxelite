import React, { createContext, useContext, ReactNode } from 'react';
import useAnalytics from '../hooks/useAnalytics';
import { trackEvent, trackError } from '../hooks/useAnalytics';

interface AnalyticsContextType {
  trackEvent: (action: string, category: string, label?: string, value?: number) => void;
  trackError: (error: Error, fatal?: boolean) => void;
  trackPageView: (path?: string) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

interface AnalyticsProviderProps {
  children: ReactNode;
  trackingId: string;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children, trackingId }) => {
  const analytics = useAnalytics(trackingId);

  return (
    <AnalyticsContext.Provider value={{
      trackEvent: analytics.trackEvent,
      trackError: analytics.trackError,
      trackPageView: analytics.trackPageView,
    }}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export const useAnalyticsContext = (): AnalyticsContextType => {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalyticsContext must be used within an AnalyticsProvider');
  }
  return context;
};

// Export the track functions for direct use when context is not available
export { trackEvent, trackError };
