import { useAppContext } from '../context/AppContext';

const Maintenance = () => {
  const { isDarkMode } = useAppContext();

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-4 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white'}`}>
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <svg
            className="mx-auto h-16 w-16 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h1 className="text-4xl font-bold mb-4">Under Maintenance</h1>
        <p className="text-xl mb-8">
          We're performing scheduled maintenance. We'll be back online shortly!
        </p>
        <div className="space-y-2 text-gray-600 dark:text-gray-300">
          <p>Our team is working hard to bring you an improved experience.</p>
          <p>Estimated time until we're back: <span className="font-semibold">30 minutes</span></p>
          <p>Last updated: October 3, 2025</p>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
