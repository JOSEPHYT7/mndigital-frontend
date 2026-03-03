import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageMeta from '../components/PageMeta';
import { aboutPageContent } from '../data/aboutPageContent';
import LaserFlow from '../components/ui/LaserFlow';
import StarBorder from '../components/ui/StarBorder';

const fadeUp = { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } };
const stagger = { animate: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } };

export default function About() {
  const { meta, hero, founder, approach, why, values, vision, closing } = aboutPageContent;

  return (
    <>
      <PageMeta title={meta.title} description={meta.description} path="/about" />

      {/* Hero */}
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 overflow-hidden bg-[#0F172A]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(249,115,22,0.08),transparent_50%)]" />
        <LaserFlow className="absolute bottom-0 left-0 right-0 opacity-40" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {hero.headline}
          </motion.h1>
          <motion.p
            className="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {hero.subheading}
          </motion.p>
          <motion.p
            className="mt-4 text-sm font-semibold text-[#F97316] uppercase tracking-wider"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {hero.positioning}
          </motion.p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-slate-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            className="space-y-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-40px' }}
            variants={stagger}
          >
            {/* Founder */}
            <motion.section variants={fadeUp}>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Founder</h2>
              <p className="text-slate-300 font-semibold">{founder.name} · {founder.role}</p>
              <p className="mt-4 text-slate-400 leading-relaxed">{founder.intro}</p>
            </motion.section>

            {/* My Approach */}
            <motion.section variants={fadeUp}>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">{approach.title}</h2>
              <p className="text-slate-300 font-medium">{approach.lead}</p>
              <ul className="mt-4 space-y-2 text-slate-400 leading-relaxed">
                {approach.points.map((point, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-[#F97316] shrink-0">—</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Why M&N Digital Exists */}
            <motion.section variants={fadeUp}>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">{why.title}</h2>
              <ul className="space-y-2 text-slate-400 leading-relaxed">
                {why.problem.map((line, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-[#F97316] shrink-0">—</span>
                    {line}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-slate-300 leading-relaxed">{why.solution}</p>
            </motion.section>

            {/* Core Values */}
            <motion.section variants={fadeUp}>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Core Values</h2>
              <div className="space-y-6">
                {values.map((v, i) => (
                  <div key={i} className="border-l-2 border-[#F97316]/50 pl-5">
                    <h3 className="text-lg font-semibold text-white">{v.title}</h3>
                    <p className="mt-1 text-slate-400 text-sm leading-relaxed">{v.description}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Vision */}
            <motion.section variants={fadeUp}>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">{vision.title}</h2>
              <ul className="space-y-3 text-slate-400 leading-relaxed">
                {vision.statements.map((s, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-[#F97316] shrink-0">→</span>
                    {s}
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Closing + CTA */}
            <motion.section variants={fadeUp}>
              <StarBorder className="block">
                <p className="text-slate-300 leading-relaxed">{closing.paragraph}</p>
                <Link
                  to={closing.ctaLink}
                  className="mt-6 inline-flex items-center justify-center rounded-lg bg-[#F97316] px-6 py-3 text-base font-semibold text-white hover:bg-[#ea580c] transition-colors"
                >
                  {closing.ctaText}
                </Link>
              </StarBorder>
            </motion.section>
          </motion.div>
        </div>
      </section>
    </>
  );
}
