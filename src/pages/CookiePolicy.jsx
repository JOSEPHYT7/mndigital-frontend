import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';

export default function CookiePolicy() {
  return (
    <>
      <PageMeta
        title="Cookie Policy – M&N Digital"
        description="Cookie policy for M&N Digital. How we use cookies and how you can manage them."
      />
      <section className="pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.h1
            className="text-4xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Cookie Policy – M&N Digital
          </motion.h1>
          <motion.p
            className="mt-2 text-slate-500 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            Effective Date: [Insert Effective Date]
          </motion.p>

          <motion.div
            className="mt-10 prose prose-invert prose-slate max-w-none text-slate-400 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-xl font-semibold text-white mt-8">Introduction</h2>
            <p>
              This Cookie Policy explains what cookies are, why M&N Digital uses them, and how you can manage your preferences. We use cookies to make our website work properly, to understand how visitors use our site, and to improve your experience. Where the law requires it (for example under GDPR or other applicable data protection laws), we will only use certain cookies with your consent. We comply with applicable data protection laws in the jurisdictions where we operate, including India and the European Union.
            </p>

            <h2 className="text-xl font-semibold text-white mt-8">What Are Cookies?</h2>
            <p>
              Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work more efficiently and to give website owners useful information. Cookies help us improve website functionality and your overall user experience.
            </p>

            <h2 className="text-xl font-semibold text-white mt-8">Types of Cookies We Use</h2>

            <h3 className="text-lg font-medium text-slate-300 mt-6">A. Essential Cookies</h3>
            <p>
              These cookies are required for the website to function. They enable core features such as security, authentication, and basic navigation. You cannot opt out of essential cookies as the site may not work correctly without them.
            </p>

            <h3 className="text-lg font-medium text-slate-300 mt-6">B. Analytics Cookies</h3>
            <p>
              We use analytics cookies to understand how visitors use our website—for example, which pages are viewed most often and how users move around the site. This helps us monitor performance and improve the user experience. Where required by law, we use these cookies only with your consent.
            </p>

            <h3 className="text-lg font-medium text-slate-300 mt-6">C. Functional Cookies</h3>
            <p>
              Functional cookies allow the website to remember choices you make (such as language or region) and to provide enhanced, more personal features. They may be set by us or by third-party providers whose services we use.
            </p>

            <h3 className="text-lg font-medium text-slate-300 mt-6">D. Marketing Cookies</h3>
            <p>
              Where we use marketing or advertising cookies (for example for advertising or retargeting), we do so only with your consent where required by applicable law. You can withdraw this consent at any time through your cookie preferences or browser settings.
            </p>

            <h2 className="text-xl font-semibold text-white mt-8">How We Use Cookies</h2>
            <p>
              We use cookies to improve website performance, analyze traffic and usage patterns, enhance security, and optimize our services. This helps us deliver a better experience for our visitors and clients.
            </p>

            <h2 className="text-xl font-semibold text-white mt-8">Third-Party Cookies</h2>
            <p>
              Some third-party services we use (such as analytics or embedded content) may set their own cookies on your device. We do not control these third-party cookies. We encourage you to review the privacy and cookie policies of those third parties to understand how they use cookies and your data.
            </p>

            <h2 className="text-xl font-semibold text-white mt-8">Managing Cookies</h2>
            <p>
              You can control and manage cookies through your browser settings. Most browsers allow you to view, delete, or block cookies. Please note that blocking or deleting essential cookies may affect how our website works and limit some features or functionality.
            </p>

            <h2 className="text-xl font-semibold text-white mt-8">Consent & Withdrawal</h2>
            <p>
              Where consent is required by law, we obtain it through our cookie banner or preference centre when you first visit our website. You can change your mind at any time by adjusting your cookie settings in your browser or through our cookie preference tool (where available). Withdrawing consent does not affect the lawfulness of processing based on consent before its withdrawal.
            </p>

            <h2 className="text-xl font-semibold text-white mt-8">Data Protection & Privacy</h2>
            <p>
              Cookies typically do not store sensitive personal data directly; they often contain anonymous identifiers. For more information on how we collect, use, and protect your personal data, please see our{' '}
              <Link to="/privacy" className="text-sky-400 hover:text-sky-300 underline">
                Privacy Policy
              </Link>
              .
            </p>

            <h2 className="text-xl font-semibold text-white mt-8">Changes to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in our practices, technology, or legal requirements. Any updates will be posted on this page, and we will update the effective date accordingly. We encourage you to review this policy periodically.
            </p>

            <h2 className="text-xl font-semibold text-white mt-8">Contact Information</h2>
            <p>
              If you have questions about our use of cookies or this Cookie Policy, please contact us:
            </p>
            <p className="mt-4">
              <strong className="text-slate-300">M&N Digital</strong><br />
              Email: [Insert Contact Email]<br />
              Website: [Insert Website URL]
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
