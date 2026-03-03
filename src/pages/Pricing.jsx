import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import Button from '../components/Button';
import CurrencyToggle, { formatPriceFromObj, useCurrency } from '../components/CurrencyToggle';
import AnimatedCard from '../components/ui/AnimatedCard';
import { services, serviceDetails, USD_TO_INR } from '../data/services';

const fadeUp = { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } };

export default function Pricing() {
  const { currency, setCurrency } = useCurrency();

  return (
    <>
      <PageMeta
        title="Pricing"
        description="Transparent pricing for all services. View in USD or INR. Website development, e-commerce, digital marketing, SEO, content, design, branding, AI & automation, social media."
      />
      <section className="pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <h1 className="text-4xl sm:text-5xl font-bold text-white">Pricing</h1>
            <p className="mt-4 text-slate-400 max-w-xl mx-auto">
              Clear pricing for every service. Toggle between USD and INR. All prices are starting points; custom quotes available.
            </p>
            <div className="mt-6 flex justify-center">
              <CurrencyToggle currency={currency} setCurrency={setCurrency} />
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial="initial"
            animate="animate"
            variants={{ animate: { transition: { staggerChildren: 0.04 } } }}
          >
            {services.map((s, i) => {
              const detail = serviceDetails[s.slug];
              const subServices = detail?.subServices || [];
              const minUSD = subServices.length ? Math.min(...subServices.map((sub) => sub.price.usd)) : null;
              const minINR = subServices.length ? Math.min(...subServices.map((sub) => sub.price.inr)) : null;
              return (
                <motion.div key={s.id} variants={fadeUp}>
                  <AnimatedCard delay={i * 0.04} hover={false} className="overflow-hidden">
                    <div className="p-6 sm:p-8">
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div>
                          <h2 className="text-xl font-bold text-white">{s.title}</h2>
                          <p className="mt-1 text-slate-400 text-sm">{s.shortDesc}</p>
                        </div>
                        <div className="flex items-center gap-4">
                          {minUSD != null && (
                            <span className="text-lg font-semibold text-[#F97316]">
                              From {currency === 'INR' ? `₹${minINR.toLocaleString('en-IN')}` : `$${minUSD}`}
                            </span>
                          )}
                          <Link
                            to={`/services/${s.slug}`}
                            className="text-[#F97316] font-medium text-sm hover:underline whitespace-nowrap"
                          >
                            View all options →
                          </Link>
                        </div>
                      </div>
                      {subServices.length > 0 && (
                        <div className="mt-6 pt-6 border-t border-slate-700 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                          {subServices.slice(0, 4).map((sub) => (
                            <div key={sub.name} className="text-sm">
                              <p className="text-slate-300 font-medium truncate" title={sub.name}>{sub.name}</p>
                              <p className="text-[#F97316] font-semibold">{formatPriceFromObj(sub.price, currency)}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </AnimatedCard>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.p className="text-center text-slate-500 mt-10 text-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            Conversion at 1 USD ≈ ₹{USD_TO_INR}. Final quote depends on scope. <Link to="/contact" className="text-[#F97316] hover:underline">Get a custom quote</Link>.
          </motion.p>
        </div>
      </section>
    </>
  );
}
