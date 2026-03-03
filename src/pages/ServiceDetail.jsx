import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageMeta from '../components/PageMeta';
import Button from '../components/Button';
import CurrencyToggle, { formatPriceFromObj, useCurrency } from '../components/CurrencyToggle';
import AnimatedList from '../components/ui/AnimatedList';
import StarBorder from '../components/ui/StarBorder';
import ElectricBorder from '../components/ui/ElectricBorder';
import ClickSpark from '../components/ui/ClickSpark';
import LaserFlow from '../components/ui/LaserFlow';
import { services, serviceDetails } from '../data/services';
import { getServicePageContent } from '../data/servicesPageContent';

const fadeUp = { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } };

export default function ServiceDetail() {
  const { slug } = useParams();
  const { currency, setCurrency } = useCurrency();
  const detail = slug ? serviceDetails[slug] : null;
  const serviceMeta = slug ? services.find((s) => s.slug === slug) : null;
  const image = serviceMeta?.image || detail?.image;
  const pageContent = slug ? getServicePageContent(slug) : null;

  if (!detail) {
    return (
      <section className="pt-24 pb-20 px-4 text-center">
        <h1 className="text-2xl font-bold text-white">Service not found</h1>
        <Link to="/services" className="mt-4 inline-block text-[#F97316] hover:underline">Back to Services</Link>
      </section>
    );
  }

  const { title, problem, longDescription, solutions, features, process, faqs, subServices } = detail;

  return (
    <>
      <PageMeta
        title={title}
        description={pageContent?.overview?.slice(0, 155) ?? (longDescription ? longDescription.slice(0, 155) : `${title} — ${problem.slice(0, 120)}...`)}
        path={`/services/${slug}`}
      />

      {/* Hero with service title */}
      <section className="relative pt-20 pb-12 sm:pt-28 sm:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[#0F172A]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
          <Link to="/services" className="text-slate-400 hover:text-[#F97316] text-sm font-medium transition-colors">← All Services</Link>
          <motion.h1
            className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="mt-6 text-lg sm:text-xl text-slate-400 max-w-3xl leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {pageContent ? pageContent.overview : problem}
          </motion.p>
        </div>
        <LaserFlow className="absolute bottom-0 left-0 right-0 opacity-40" />
      </section>

      {/* Service-related image (only on service detail page) */}
      {image && (
        <section className="relative py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.div
              className="rounded-2xl overflow-hidden glass-card border border-white/10 shadow-xl"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              <img
                src={image}
                alt={title}
                className="w-full h-56 sm:h-72 object-cover"
              />
            </motion.div>
          </div>
        </section>
      )}

      <section className="py-16 sm:py-20 glass">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {pageContent ? (
            <>
              {/* A–H detailed content */}
              <motion.div
                className="space-y-8 mb-16"
                initial="initial"
                animate="animate"
                variants={{ animate: { transition: { staggerChildren: 0.06 } } }}
              >
                <motion.div variants={fadeUp}>
                  <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">A. Overview</h2>
                  <p className="text-slate-300 leading-relaxed">{pageContent.overview}</p>
                </motion.div>

                <motion.div variants={fadeUp}>
                  <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">B. Sub-Services</h2>
                  <ul className="list-disc list-inside text-slate-300 space-y-1">
                    {pageContent.subServicesList.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div variants={fadeUp}>
                  <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">C. The Problem We Solve</h2>
                  <p className="text-slate-300 leading-relaxed">{pageContent.problem}</p>
                </motion.div>

                <motion.div variants={fadeUp}>
                  <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">D. Our Solution</h2>
                  <p className="text-slate-300 leading-relaxed">{pageContent.solution}</p>
                </motion.div>

                <motion.div variants={fadeUp}>
                  <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">E. What We Deliver (Features)</h2>
                  <ul className="list-disc list-inside text-slate-300 space-y-1">
                    {pageContent.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div variants={fadeUp}>
                  <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">F. Our Process</h2>
                  <ol className="list-decimal list-inside text-slate-300 space-y-1">
                    {pageContent.process.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ol>
                </motion.div>

                <motion.div variants={fadeUp}>
                  <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">G. Business Impact</h2>
                  <p className="text-slate-300 leading-relaxed">{pageContent.businessImpact}</p>
                </motion.div>

                {pageContent.crossServiceSuggestions?.length > 0 && (
                  <motion.div variants={fadeUp}>
                    <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">Cross-Service</h2>
                    <ul className="list-disc list-inside text-slate-300 space-y-1">
                      {pageContent.crossServiceSuggestions.map((line, i) => (
                        <li key={i}>{line}</li>
                      ))}
                    </ul>
                  </motion.div>
                )}

                <motion.div variants={fadeUp}>
                  <Link
                    to={pageContent.ctaAction}
                    className="inline-flex items-center justify-center rounded-lg bg-[#F97316] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#ea580c] transition-colors"
                  >
                    {pageContent.ctaText}
                  </Link>
                </motion.div>
              </motion.div>
            </>
          ) : (
            <>
              <motion.section className="mb-16" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-2xl font-bold text-white mb-4">Our approach</h2>
                <p className="text-slate-400 leading-relaxed text-lg">{solutions}</p>
              </motion.section>
              <motion.section className="mb-16" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-2xl font-bold text-white mb-6">What you get</h2>
                <AnimatedList
                  items={features}
                  renderItem={(f) => (
                    <div className="flex items-start gap-3 py-2">
                      <span className="text-[#F97316] mt-1 shrink-0">✓</span>
                      <span className="text-slate-400">{f}</span>
                    </div>
                  )}
                />
              </motion.section>
              <motion.section className="mb-16" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-2xl font-bold text-white mb-6">Process</h2>
                <ol className="space-y-4">
                  {process.map((step, i) => (
                    <li key={step} className="flex gap-4">
                      <span className="text-[#F97316] font-bold shrink-0 w-8">0{i + 1}</span>
                      <span className="text-slate-400">{step}</span>
                    </li>
                  ))}
                </ol>
              </motion.section>
            </>
          )}

          {/* Pricing */}
          {subServices && subServices.length > 0 && (
            <motion.div className="mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-white">What we offer & pricing</h2>
                <CurrencyToggle currency={currency} setCurrency={setCurrency} />
              </div>
              <p className="text-slate-400 mb-8">All prices are starting points. Select a sub-service or request a custom quote.</p>
              <div className="space-y-4">
                {subServices.map((sub) => (
                  <StarBorder key={sub.name} className="mb-4">
                    <div className="p-6 flex flex-wrap items-start justify-between gap-6">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-white">{sub.name}</h3>
                        <p className="mt-1 text-slate-400 text-sm">{sub.what}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-2xl font-bold text-[#F97316]">{formatPriceFromObj(sub.price, currency)}</span>
                        <span className="text-slate-500 text-sm block mt-1">
                          {currency === 'INR' ? `≈ $${sub.price.usd}` : `≈ ₹${sub.price.inr?.toLocaleString('en-IN')}`}
                        </span>
                      </div>
                    </div>
                  </StarBorder>
                ))}
              </div>
            </motion.div>
          )}

          {/* FAQs */}
          {faqs && faqs.length > 0 && (
            <motion.section className="mb-16" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-bold text-white mb-6">FAQs</h2>
              <div className="space-y-4">
                {faqs.map(({ q, a }) => (
                  <div key={q} className="p-6 rounded-xl bg-slate-800/50 border border-slate-700">
                    <dt className="font-semibold text-white">{q}</dt>
                    <dd className="mt-2 text-slate-400">{a}</dd>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {/* CTA */}
          <ElectricBorder>
            <div className="text-center py-6">
              <h2 className="text-xl font-bold text-white">Ready to get started with {title}?</h2>
              <p className="mt-2 text-slate-400">We reply within 24 hours. Book a call or send us your brief.</p>
              <div className="mt-6">
                <ClickSpark>
                  <Button to="/contact">Contact us or book a call</Button>
                </ClickSpark>
              </div>
            </div>
          </ElectricBorder>
        </div>
      </section>
    </>
  );
}
