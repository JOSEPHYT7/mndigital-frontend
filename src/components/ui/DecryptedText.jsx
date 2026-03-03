import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const CHARS = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

export default function DecryptedText({
  text,
  className = '',
  speed = 50,
  maxIterations = 12,
  trigger = 'view',
  onComplete,
}) {
  const [display, setDisplay] = useState('');
  const [done, setDone] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (trigger === 'view' && !ref.current) return;
    let cancelled = false;
    const len = text.length;
    let iteration = 0;

    const run = () => {
      if (cancelled) return;
      const next = text
        .split('')
        .map((char, i) => {
          const progress = iteration / maxIterations;
          const threshold = (i / len) * progress;
          if (iteration / maxIterations > threshold + 0.1) return char;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join('');
      setDisplay(next);
      iteration++;
      if (iteration <= maxIterations) {
        setTimeout(run, speed);
      } else {
        setDisplay(text);
        setDone(true);
        onComplete?.();
      }
    };

    if (trigger === 'view') {
      const ob = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting) run();
        },
        { threshold: 0.2 }
      );
      if (ref.current) ob.observe(ref.current);
      return () => {
        cancelled = true;
        ob.disconnect();
      };
    }
    run();
    return () => { cancelled = true; };
  }, [text, speed, maxIterations, trigger, onComplete]);

  return (
    <motion.span ref={ref} className={className} initial={{ opacity: 0.9 }} animate={{ opacity: 1 }}>
      {display || text}
    </motion.span>
  );
}
