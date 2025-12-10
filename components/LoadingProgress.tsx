import React, { useEffect, useState } from 'react';

const LoadingProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 300);
          return 100;
        }
        // Accelerate progress
        const increment = prev < 50 ? 10 : prev < 90 ? 5 : 2;
        return Math.min(prev + increment, 100);
      });
    }, 50);

    // Complete loading when page is ready
    if (document.readyState === 'complete') {
      setProgress(100);
      setTimeout(() => {
        clearInterval(interval);
        setIsLoading(false);
      }, 300);
    } else {
      window.addEventListener('load', () => {
        setProgress(100);
        setTimeout(() => {
          clearInterval(interval);
          setIsLoading(false);
        }, 300);
      });
    }

    return () => clearInterval(interval);
  }, []);

  if (!isLoading) return null;

  return (
    <div 
      className="fixed top-0 left-0 right-0 z-[9999] h-1 bg-slate-100 transition-opacity duration-300"
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page loading progress"
    >
      <div
        className="h-full bg-gradient-to-r from-science-500 to-science-600 transition-all duration-300 ease-out shadow-sm"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default LoadingProgress;






