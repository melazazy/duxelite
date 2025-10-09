import { useState, useEffect } from 'react';

export default function useImageLoader(src: string, fallback?: string) {
  const [imgSrc, setImgSrc] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!src) {
      setImgSrc(fallback || '');
      setIsLoading(false);
      return;
    }

    const img = new Image();
    let isMounted = true;

    const handleLoad = () => {
      if (!isMounted) return;
      setImgSrc(src);
      setIsLoading(false);
      setError(null);
    };

    const handleError = (err: ErrorEvent) => {
      if (!isMounted) return;
      console.error('Image load error:', err);
      setImgSrc(fallback || '');
      setIsLoading(false);
      setError(new Error('Failed to load image'));
    };

    img.src = src;
    img.onload = handleLoad;
    img.onerror = handleError as any;

    // Cleanup function
    return () => {
      isMounted = false;
      img.onload = null;
      img.onerror = null;
    };
  }, [src, fallback]);

  return { src: imgSrc, isLoading, error };
}
