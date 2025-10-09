// Utility function to generate responsive image sources
export function getResponsiveImageSources(
  basePath: string,
  options: {
    widths?: number[];
    sizes?: string;
    format?: 'webp' | 'jpg' | 'png';
    quality?: number;
  } = {}
) {
  const {
    widths = [320, 640, 960, 1280, 1920],
    sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw',
    format = 'webp',
    quality = 80,
  } = options;

  const srcSet = widths
    .map(
      (width) =>
        `${basePath}?w=${width}&q=${quality}&fm=${format} ${width}w`
    )
    .join(', ');

  return {
    srcSet,
    sizes,
    src: `${basePath}?w=${widths[0]}&q=${quality}&fm=${format}`,
  };
}

// Function to preload important images
export function preloadImages(imageUrls: string[]) {
  if (typeof window === 'undefined') return;

  imageUrls.forEach((url) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = url;
    link.fetchPriority = 'high';
    document.head.appendChild(link);
  });
}

// Function to lazy load images
export function lazyLoadImages() {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    // Fallback for browsers that don't support IntersectionObserver
    const images = document.querySelectorAll('img[data-src]');
    images.forEach((img) => {
      const src = img.getAttribute('data-src');
      if (src) {
        img.setAttribute('src', src);
        img.removeAttribute('data-src');
      }
    });
    return;
  }

  const lazyImages = Array.from(
    document.querySelectorAll('img[data-src]')
  ) as HTMLImageElement[];

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        const src = img.getAttribute('data-src');
        
        if (src) {
          img.src = src;
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      }
    });
  }, {
    rootMargin: '200px 0px',
    threshold: 0.01
  });

  lazyImages.forEach((img) => imageObserver.observe(img));
}
