import { motion } from 'framer-motion';
import PageMeta from '../components/PageMeta';

export default function Terms() {
  return (
    <>
      <PageMeta
        title="Terms of Service"
        description="Terms of service for M&N Digital website and services."
      />
      <section className="pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.h1 className="text-4xl font-bold text-white" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            Terms of Service
          </motion.h1>
          <motion.p className="mt-2 text-slate-500 text-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
            Last updated: March 2025
          </motion.p>
          <motion.div className="mt-10 prose prose-invert prose-slate max-w-none text-slate-400 space-y-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <p>
              Welcome to M&N Digital. By using our website mndigital.com and our services, you agree to these Terms of Service. If you do not agree, please do not use our site or services.
            </p>
            <h2 className="text-xl font-semibold text-white mt-8">Use of the website</h2>
            <p>
              You may use our website for lawful purposes only. You must not attempt to gain unauthorized access to our systems, transmit malware, or use the site in any way that could harm us or others.
            </p>
            <h2 className="text-xl font-semibold text-white mt-8">Services and agreements</h2>
            <p>
              Specific projects and retainers are governed by separate agreements (e.g. statements of work, contracts). These Terms apply to general use of our website and form the baseline for our relationship unless otherwise agreed in writing.
            </p>
            <h2 className="text-xl font-semibold text-white mt-8">Intellectual property</h2>
            <p>
              Content on this site (text, design, logos) is owned by M&N Digital or our licensors. You may not copy, modify, or distribute it without our permission. Deliverables from paid projects are governed by the relevant project agreement.
            </p>
            <h2 className="text-xl font-semibold text-white mt-8">Disclaimer</h2>
            <p>
              Our website and materials are provided “as is.” We do not guarantee uninterrupted or error-free access. We are not liable for any indirect, incidental, or consequential damages arising from your use of the site or our services, to the extent permitted by law.
            </p>
            <h2 className="text-xl font-semibold text-white mt-8">Limitation of liability</h2>
            <p>
              Our total liability for any claim related to the website or these Terms shall not exceed the amount you paid us in the twelve (12) months preceding the claim, or one hundred dollars (100 USD), whichever is greater.
            </p>
            <h2 className="text-xl font-semibold text-white mt-8">Changes</h2>
            <p>
              We may update these Terms at any time. The “Last updated” date indicates the latest version. Continued use of the site after changes constitutes acceptance. For material changes, we may notify you via email or a notice on the site.
            </p>
            <p className="mt-8">
              <strong className="text-slate-300">Contact:</strong> hello@mndigital.com for questions about these Terms.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
