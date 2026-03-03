import { motion } from 'framer-motion';

/**
 * Text along a curved path (SVG).
 */
export default function CurveLoop({ text = 'M&N Digital • Growth • Strategy •', className = '' }) {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <svg viewBox="0 0 400 120" className="w-full max-w-md h-28">
        <defs>
          <path id="curvePath" d="M 50,60 A 150,150 0 0 1 350,60" fill="none" />
        </defs>
        <text fill="none" className="text-slate-500">
          <motion.textPath
            href="#curvePath"
            startOffset="0"
            className="fill-slate-400 text-sm font-medium"
            style={{ letterSpacing: '0.15em' }}
          >
            {text}
          </motion.textPath>
        </text>
      </svg>
    </div>
  );
}
