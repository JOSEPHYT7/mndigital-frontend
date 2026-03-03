import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageMeta from '../components/PageMeta';
import PixelCard from '../components/ui/PixelCard';
import StarBorder from '../components/ui/StarBorder';
import LaserFlow from '../components/ui/LaserFlow';
import { services } from '../data/services';
import { servicesPageSEO, servicesPageFinalCTA } from '../data/servicesPageContent';

const icons = ['🌐', '🛒', '⚡', '📈', '🔍', '✍️', '🎨', '🪙', '🤖', '📱'];

export default function Services() {
  return (
    <>
      <PageMeta
        title="Our Services"
        description={servicesPageSEO.metaDescription}
        path={servicesPageSEO.urlSlug}
      />
      <section className="relative pt-24 pb-24 sm:pt-32 sm:pb-32 min-h-screen">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.15) 100%)',
          }}
        />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              {servicesPageSEO.h1}
            </h1>
            <p className="mt-6 text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
              End-to-end digital solutions with clear pricing. View in USD or
              INR and choose the service that fits your goals.
            </p>
          </motion.div>

          <LaserFlow className="mb-16 opacity-40" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Link key={s.id} to={`/services/${s.slug}`} className="block group">
                <PixelCard delay={i * 0.05}>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{icons[i]}</span>
                      <h2 className="text-xl font-bold text-white">
                        {s.title}
                      </h2>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {s.shortDesc}
                    </p>
                    <span className="mt-4 inline-block text-[#F97316] font-semibold text-sm">
                      View pricing →
                    </span>
                  </div>
                </PixelCard>
              </Link>
            ))}
          </div>

          <motion.section
            className="mt-24 text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <StarBorder className="inline-block max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                {servicesPageFinalCTA.headline}
              </h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                {servicesPageFinalCTA.paragraph}
              </p>
              <Link
                to={servicesPageFinalCTA.ctaLink}
                className="inline-flex items-center justify-center rounded-lg bg-[#F97316] px-6 py-3 text-base font-semibold text-white hover:bg-[#ea580c] transition-colors"
              >
                {servicesPageFinalCTA.ctaButton}
              </Link>
            </StarBorder>
          </motion.section>

          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <StarBorder className="inline-block max-w-md">
              <p className="text-slate-300 text-sm">
                All prices are starting points. Get a custom quote for your
                scope—we respond within 24 hours.
              </p>
              <Link
                to="/contact"
                className="mt-4 inline-block text-[#F97316] font-semibold text-sm hover:underline"
              >
                Contact us →
              </Link>
            </StarBorder>
          </motion.div>
        </div>
      </section>
    </>
  );
}
