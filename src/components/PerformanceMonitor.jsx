import { useEffect } from 'react';

export default function PerformanceMonitor() {
  useEffect(() => {
    // Monitora performance
    if ('performance' in window) {
      const navigationTiming = performance.getEntriesByType('navigation')[0];
      
      if (navigationTiming) {
        const metrics = {
          TTFB: navigationTiming.responseStart - navigationTiming.requestStart,
          FCP: () => {
            const paintEntries = performance.getEntriesByType('paint');
            const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
            return fcpEntry ? fcpEntry.startTime : null;
          },
          LCP: () => {
            const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
            return lcpEntries.length > 0 ? lcpEntries[lcpEntries.length - 1].startTime : null;
          }
        };
        
        console.log('Performance Metrics:', metrics);
      }
    }
    
    // Prefetch de recursos importantes
    const prefetchResources = () => {
      const resources = [
        '/profile-hero.jpg',
        '/profile-full.jpg',
        '/logo1.png'
      ];
      
      resources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = resource;
        document.head.appendChild(link);
      });
    };
    
    prefetchResources();
  }, []);

  return null;
}
