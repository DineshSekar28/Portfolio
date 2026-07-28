import React from 'react';
import { useInView } from 'react-intersection-observer';

function Reveal({ children, index = 0, className = '' }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <div
      ref={ref}
      className={`reveal ${inView ? 'reveal-visible' : ''} ${className}`.trim()}
      style={{ '--i': index }}
    >
      {children}
    </div>
  );
}

export default Reveal;
