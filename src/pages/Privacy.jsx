import { motion } from 'framer-motion';
import PageMeta from '../components/PageMeta';

export default function Privacy() {
  return (
    <>
      <PageMeta
        title="Privacy Policy"
        description="Privacy policy for M&N Digital. How we collect, use, and protect your data."
      />
      <section className="pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.h1 className="text-4xl font-bold text-white" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            Privacy Policy
          </motion.h1>
          <motion.p className="mt-2 text-slate-500 text-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
            Last updated: March 2025
          </motion.p>
          <motion.div className="mt-10 prose prose-invert prose-slate max-w-none text-slate-400 space-y-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <p>
              M&N Digital (“we”, “our”, or “us”) respects your privacy. This policy describes how we collect, use, and protect information when you use our website mndigital.com and our services.
            </p>
            <h2 className="text-xl font-semibold text-white mt-8">Information we collect</h2>
            <p>
              We may collect information you provide directly, such as name, email, phone, company name, and message content when you submit our contact form or book a consultation. We may also collect usage data (e.g. IP address, browser type, pages visited) for analytics and security.
            </p>
            <h2 className="text-xl font-semibold text-white mt-8">How we use it</h2>
            <p>
              We use your information to respond to inquiries, deliver services, send relevant updates (with your consent), improve our website and services, and comply with legal obligations.
            </p>
            <h2 className="text-xl font-semibold text-white mt-8">Sharing and disclosure</h2>
            <p>
              We do not sell your personal data. We may share data with service providers (e.g. hosting, email) who assist our operations under strict confidentiality. We may disclose information if required by law or to protect our rights and safety.
            </p>
            <h2 className="text-xl font-semibold text-white mt-8">Security and retention</h2>
            <p>
              We use reasonable technical and organizational measures to protect your data. We retain your information only as long as necessary for the purposes described or as required by law.
            </p>
            <h2 className="text-xl font-semibold text-white mt-8">Your rights</h2>
            <p>
              Depending on your location, you may have rights to access, correct, delete, or restrict processing of your data. To exercise these rights or ask questions, contact us at hello@mndigital.com.
            </p>
            <h2 className="text-xl font-semibold text-white mt-8">Changes</h2>
            <p>
              We may update this policy from time to time. The “Last updated” date at the top reflects the latest version. Continued use of our site after changes constitutes acceptance.
            </p>
            <p className="mt-8">
              <strong className="text-slate-300">Contact:</strong> hello@mndigital.com for any privacy-related questions.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
