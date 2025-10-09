import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  className?: string;
  title?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ className = '', title }) => {
  const location = useLocation();
  const [breadcrumbs, setBreadcrumbs] = React.useState<BreadcrumbItem[]>([]);

  React.useEffect(() => {
    const pathnames = location.pathname.split('/').filter((x) => x);
    const breadcrumbItems: BreadcrumbItem[] = [];

    // Always add Home as the first breadcrumb
    breadcrumbItems.push({ label: 'Home', path: '/' });

    // Add other path segments
    let currentUrl = '';
    
    pathnames.forEach((path, index) => {
      // Skip numeric IDs in the path
      if (!/^\d+$/.test(path)) {
        currentUrl += `/${path}`;
        
        // Custom labels for specific paths
        let label: string;
        if (path === 'portfolio' || path === 'projects') {
          label = 'Portfolio';
        } else if (path === 'case-studies') {
          label = 'Case Studies';
        } else if (path === 'about') {
          label = 'About Us';
        } else {
          // Convert kebab-case to Title Case for other paths
          label = path
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        }
        
        // Don't add the current page as a link if it's the last segment
        const isLast = index === pathnames.length - 1;
        breadcrumbItems.push({
          label,
          path: isLast ? undefined : currentUrl
        });
      }
    });

    setBreadcrumbs(breadcrumbItems);
  }, [location]);

  return (
    <div className={`text-center mb-12 ${className}`}>
      {title && <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>}
      {breadcrumbs.length > 1 && (
        <nav className="flex justify-center items-center text-sm text-white/70">
          <ol className="flex items-center space-x-2">
            {breadcrumbs.map((item, index) => (
              <li key={item.label} className="flex items-center">
                {index > 0 && <ChevronRight className="w-4 h-4 mx-2 text-white/40" />}
                {item.path ? (
                  <Link 
                    to={item.path} 
                    className="hover:text-[#00CFFF] transition-colors duration-200 text-lg"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-white text-lg font-medium">{item.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      )}
    </div>
  );
};

export default Breadcrumb;
