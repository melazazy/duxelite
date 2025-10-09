import { Component, ErrorInfo, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
    // Here you would typically log the error to an error reporting service
    // logErrorToService(error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || <DefaultErrorFallback error={this.state.error} />;
    }

    return this.props.children;
  }
}

// Default error fallback component
const DefaultErrorFallback = ({ error }: { error: Error | null }) => {
  const { isDarkMode } = useAppContext();
  
  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-4 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white'}`}>
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold mb-4 text-red-600">Something went wrong</h1>
        <p className="text-lg mb-6">
          We're sorry, but an unexpected error occurred. Our team has been notified.
        </p>
        {error && (
          <details className="mb-6 p-4 bg-gray-100 dark:bg-gray-800 rounded text-left">
            <summary className="font-medium cursor-pointer">Error Details</summary>
            <pre className="mt-2 text-sm overflow-auto">
              {error.toString()}
            </pre>
          </details>
        )}
        <div className="space-x-4">
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Reload Page
          </button>
          <Link
            to="/"
            className="px-6 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorBoundary;
