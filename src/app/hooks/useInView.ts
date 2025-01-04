import { useRef, useEffect, useState } from 'react';

const useInView = (options = { threshold: 0.1 }, oneTime = false) => {
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (oneTime) observer.unobserve(entry.target);
        } else if (!oneTime) {
          setIsInView(false);
        }
      });
    }, options);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [options, oneTime]);

  return [elementRef, isInView];
};
export default useInView;
