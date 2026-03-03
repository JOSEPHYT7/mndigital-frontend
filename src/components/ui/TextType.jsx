import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function TextType({ lines, className = '', speed = 80, delayStart = 0 }) {
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const text = lines[currentLine] || '';
    if (currentChar <= text.length) {
      const t = setTimeout(() => {
        if (currentChar === text.length) {
          setTimeout(() => {
            setCurrentLine((l) => (l + 1) % lines.length);
            setCurrentChar(0);
          }, 1200);
        } else {
          setCurrentChar((c) => c + 1);
        }
      }, currentChar === 0 ? (currentLine === 0 ? delayStart : 400) : speed);
      return () => clearTimeout(t);
    }
  }, [currentLine, currentChar, lines, speed, delayStart]);

  useEffect(() => {
    const t = setInterval(() => setShowCursor((c) => !c), 500);
    return () => clearInterval(t);
  }, []);

  const text = lines[currentLine] || '';
  const visible = text.slice(0, currentChar);

  return (
    <span className={className}>
      {visible}
      <motion.span
        animate={{ opacity: showCursor ? 1 : 0 }}
        className="inline-block w-0.5 h-[1em] align-middle bg-[#F97316] ml-0.5"
      />
    </span>
  );
}
