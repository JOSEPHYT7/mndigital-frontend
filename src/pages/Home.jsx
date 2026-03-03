import { motion } from 'framer-motion';
import PageMeta from '../components/PageMeta';
import Button from '../components/Button';
import GradientText from '../components/ui/GradientText';
import DecryptedText from '../components/ui/DecryptedText';
import TextType from '../components/ui/TextType';
import AnimatedList from '../components/ui/AnimatedList';
import CardSwap from '../components/ui/CardSwap';
import DarkVeil from '../components/ui/DarkVeil';
import StarBorder from '../components/ui/StarBorder';
import ProfileCard from '../components/ui/ProfileCard';
import LogoLoop from '../components/ui/LogoLoop';
import LaserFlow from '../components/ui/LaserFlow';
import ClickSpark from '../components/ui/ClickSpark';
import AnimatedBackground from '../components/ui/AnimatedBackground';
import { services } from '../data/services';

const fadeUp = { initial: { opacity: 0, y: 28 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 } };
const stagger = { staggerChildren: 0.08, delayChildren: 0.2 };

const PROCESS_STEPS = [
  'Discovery & strategy',
  'Design & architecture',
  'Build & test',
  'Launch & scale',
];

const TESTIMONIALS = [
  { name: 'Sarah Chen', role: 'CEO, TechFlow', quote: 'M&N Digital delivered our new site ahead of schedule. The quality and communication were exceptional.' },
  { name: 'James Wright', role: 'Founder, ScaleUp', quote: 'AI automation they built cut our ops time by 60%. Real ROI, not hype.' },
  { name: 'Priya Sharma', role: 'Marketing Director', quote: 'From branding to campaigns—one team, one vision. Our brand finally feels premium.' },
];

export default function Home() {
  return (
    <>
      <PageMeta
        title="M&N Digital – AI-Powered Growth Solutions"
        description="Premium digital growth agency using AI-driven automation for faster, smarter solutions. Website development, e-commerce, digital marketing, SEO, content, design, branding, AI & automation, social media."
      />

      {/* Hero – premium with DecryptedText + GradientText + TextType + animated background */}
      <section className="relative min-h-[90dvh] flex flex-col justify-center overflow-hidden bg-[#0F172A] pt-24 pb-20">
        <AnimatedBackground />
        <DarkVeil />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(249,115,22,0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_60%,rgba(249,115,22,0.06),transparent)]" />
        <LaserFlow className="absolute bottom-0 left-0 right-0 opacity-60" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.p
            className="text-sm font-semibold text-[#F97316] uppercase tracking-[0.2em]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Digital Growth Agency
          </motion.p>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.05] tracking-tight">
            <DecryptedText text="AI-Powered " trigger="view" className="inline" />
            <GradientText className="inline-block mt-2">Growth Solutions</GradientText>
          </h1>
          <div className="mt-8 h-[4.5rem] sm:h-14 flex items-center justify-center text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto">
            <TextType
              lines={[
                'We deliver faster and smarter with AI-driven automation.',
                'From websites to full-stack digital—one partner.',
                'Premium quality. Transparent pricing. Real results.',
              ]}
              speed={60}
              delayStart={800}
            />
          </div>
          <motion.div
            className="mt-14 flex flex-wrap justify-center gap-5"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <ClickSpark>
              <Button to="/contact">Book Consultation</Button>
            </ClickSpark>
            <ClickSpark>
              <Button to="/services" variant="outline">View Services</Button>
            </ClickSpark>
          </motion.div>
        </div>
      </section>

      {/* Logo loop – trusted by */}
      <section className="relative py-12 glass border-y border-white/10">
        <DarkVeil />
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center text-slate-500 text-sm uppercase tracking-widest mb-8">Trusted by ambitious brands</p>
          <LogoLoop speed={40} />
        </div>
      </section>

      {/* Services – Card swap (text-only) + LaserFlow + ClickSpark */}
      <section className="py-28 sm:py-36 bg-[#0F172A] relative">
        <DarkVeil />
        <LaserFlow className="absolute top-0 left-0 right-0 opacity-50 z-10" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div className="text-center mb-20" variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <motion.h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight" variants={fadeUp}>Our Services</motion.h2>
            <motion.p className="mt-6 text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed" variants={fadeUp}>
              End-to-end digital solutions with transparent pricing. From websites and e-commerce to marketing, SEO, content, design, branding, AI, and social.
            </motion.p>
          </motion.div>
          <CardSwap
            items={services}
            getLink={(s) => `/services/${s.slug}`}
            getTitle={(s) => s.title}
            getDescription={(s) => s.shortDesc}
          />
          <motion.div className="text-center mt-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <ClickSpark>
              <Button to="/services">See all services</Button>
            </ClickSpark>
          </motion.div>
        </div>
        <LaserFlow className="absolute bottom-0 left-0 right-0 opacity-50 z-10" />
      </section>

      {/* Why Us – StarBorder + AnimatedList */}
      <section className="relative py-28 glass-panel overflow-hidden">
        <DarkVeil />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(249,115,22,0.06),transparent_60%)]" aria-hidden />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div className="text-center mb-20" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">Why M&N Digital</h2>
            <p className="mt-6 text-slate-400 max-w-xl mx-auto text-lg">Strategy, design, and AI-driven automation—so you get results without the wait.</p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            {[
              { title: 'Faster delivery', desc: 'AI-powered workflows cut routine work so we ship on time, every time.' },
              { title: 'Smarter insights', desc: 'Data-driven decisions and clear reporting so you know exactly what’s working.' },
              { title: 'Scalable systems', desc: 'Builds that grow with you—from MVP to enterprise.' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="h-full"
              >
                <div className="glass-card border border-white/10 rounded-2xl p-8 sm:p-10 h-full text-left transition-colors duration-200 hover:border-[#F97316]/70 hover:bg-white/5">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#F97316]/10 text-xs font-semibold uppercase tracking-[0.18em] text-[#F97316]">
                    0{i + 1}
                  </div>
                  <h3 className="mt-5 text-lg sm:text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process – AnimatedList */}
      <section className="relative py-28 bg-[#0F172A]">
        <DarkVeil />
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.h2 className="text-4xl font-bold text-white text-center mb-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            How we work
          </motion.h2>
          <motion.p className="text-slate-400 text-center mb-14" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            Simple, transparent process from first call to launch.
          </motion.p>
          <AnimatedList
            items={PROCESS_STEPS}
            renderItem={(step, i) => (
              <div className="flex items-center gap-6 py-4 border-b border-slate-800 last:border-0">
                <span className="text-2xl font-bold text-[#F97316]/70 w-10">0{i + 1}</span>
                <span className="text-lg font-semibold text-white">{step}</span>
              </div>
            )}
            className="space-y-0"
          />
        </div>
      </section>

      {/* Testimonials – ProfileCard */}
      <section className="relative py-28 glass-panel">
        <DarkVeil />
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.h2 className="text-4xl sm:text-5xl font-bold text-white text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Trusted by growing businesses
          </motion.h2>
          <motion.p className="mt-4 text-slate-400 text-center max-w-xl mx-auto" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            We focus on results and long-term partnerships.
          </motion.p>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <ProfileCard key={t.name} name={t.name} role={t.role} quote={t.quote} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA – StarBorder */}
      <section className="relative py-28 bg-[#0F172A]">
        <DarkVeil />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <StarBorder className="inline-block w-full max-w-2xl">
            <div className="py-8 sm:py-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to grow?</h2>
              <p className="mt-4 text-slate-400">Book a free consultation. We reply within 24 hours.</p>
              <div className="mt-8">
                <ClickSpark>
                  <Button to="/contact">Book Consultation</Button>
                </ClickSpark>
              </div>
            </div>
          </StarBorder>
        </div>
      </section>
    </>
  );
}
