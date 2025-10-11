import { Suspense, lazy, useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import PagesHeader from './components/PagesHeader';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';
import { AppProvider, useAppContext } from './context/AppContext';
import Maintenance from './pages/Maintenance';
import NotFound from './pages/NotFound';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Services = lazy(() => import('./pages/Services'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const CaseStudy = lazy(() => import('./pages/CaseStudy'));
const CaseStudies = lazy(() => import('./components/CaseStudies'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogDetail = lazy(() => import('./pages/BlogDetail'));
const Contact = lazy(() => import('./pages/Contact'));
const Team = lazy(() => import('./pages/Team'));
const Careers = lazy(() => import('./pages/Careers'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

// Check for maintenance mode (can be controlled via environment variable or API)
const MAINTENANCE_MODE = import.meta.env.VITE_MAINTENANCE_MODE === 'true';

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';
  const { isDarkMode } = useAppContext();
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  // Handle offline/online status
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Handle 404 for unknown routes
  useEffect(() => {
    // This is a simple 404 handler. In a real app, you might want to use a proper router-based solution
    const routes = [
      '/', 
      '/about', 
      '/services', 
      '/projects', 
      '/projects/:slug',
      '/case-studies', 
      '/case-studies/:slug',
      '/blog', 
      '/blog/:slug',
      '/contact', 
      '/team', 
      '/careers', 
      '/privacy-policy', 
      '/terms-of-service',
      '/maintenance',
      '/404'
    ];
    
    // Check if the current path matches any of the defined routes
    const isValidRoute = routes.some(route => {
      // Convert route pattern to regex (handle dynamic segments)
      const routePattern = route
        .replace(/:[^/]+/g, '[^/]+') // Replace :param with [^/]+
        .replace(/\//g, '\\/');      // Escape slashes
      
      const routeRegex = new RegExp(`^${routePattern}(\/|$)`);
      return routeRegex.test(location.pathname);
    });
    
    if (!isValidRoute && location.pathname !== '/404' && location.pathname !== '/maintenance') {
      navigate('/404', { replace: true });
    }
  }, [location.pathname, navigate]);

  if (MAINTENANCE_MODE && location.pathname !== '/maintenance') {
    return <Maintenance />;
  }

  // Show offline message if user is offline
  if (!isOnline) {
    return (
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 fixed bottom-0 left-0 right-0 z-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center
          ">
            <svg className="h-5 w-5 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <p className="text-sm text-yellow-700">You're currently offline. Some features may not be available.</p>
          </div>
          <button 
            onClick={() => window.location.reload()}
            className="text-sm text-yellow-700 hover:text-yellow-800 font-medium"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white'}`}>
      <ScrollToTop />
      {isHome ? <Header /> : <PagesHeader />}
      <main>
        <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:slug" element={<ProjectDetail />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/case-studies/:slug" element={<CaseStudy />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/team" element={<Team />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/maintenance" element={<Maintenance />} />
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;