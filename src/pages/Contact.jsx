import { useState } from 'react';
import { motion } from 'framer-motion';
import PageMeta from '../components/PageMeta';
import { services } from '../data/services';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    serviceInterested: '',
    budget: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');
    try {
      const res = await fetch(`${API_BASE}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus('error');
        setErrorMessage(data.message || data.error || 'Something went wrong. Please try again.');
        return;
      }
      setStatus('success');
      setForm({ name: '', businessName: '', email: '', phone: '', serviceInterested: '', budget: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMessage('Network error. Please check your connection or try again later.');
    }
  };

  return (
    <>
      <PageMeta
        title="Contact"
        description="Get in touch with M&N Digital. Book a consultation or send a message. We reply within 24 hours."
      />
      <section className="pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl sm:text-5xl font-bold text-white">Contact us</h1>
            <p className="mt-4 text-slate-400">
              Fill out the form below or book a call. We reply within 24 hours.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <motion.div className="lg:col-span-1 space-y-6" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
              <p className="text-slate-400 text-sm">
                Interested in a specific service? Select it in the form and we’ll tailor our response. You can also embed your Calendly or other booking link here.
              </p>
              <p className="text-slate-500 text-sm">
                <strong className="text-slate-400">Email:</strong> hello@mndigital.com
              </p>
              <p className="text-slate-500 text-sm">
                <strong className="text-slate-400">Response time:</strong> Within 24 hours
              </p>
            </motion.div>

            <motion.div className="lg:col-span-2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-xl glass-card border border-white/10 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#F97316]/20 flex items-center justify-center mx-auto text-3xl text-[#F97316]">✓</div>
                  <h2 className="mt-4 text-xl font-semibold text-white">Thank you</h2>
                  <p className="mt-2 text-slate-400">
                    We’ve received your message and will get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Name *</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg glass border border-white/10 text-white placeholder-slate-500 focus:ring-2 focus:ring-[#F97316] focus:border-[#F97316]/50 focus:outline-none"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="businessName" className="block text-sm font-medium text-slate-300 mb-1">Business</label>
                      <input
                        id="businessName"
                        name="businessName"
                        type="text"
                        value={form.businessName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg glass border border-white/10 text-white placeholder-slate-500 focus:ring-2 focus:ring-[#F97316] focus:border-[#F97316]/50 focus:outline-none"
                        placeholder="Company name"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">Email *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg glass border border-white/10 text-white placeholder-slate-500 focus:ring-2 focus:ring-[#F97316] focus:border-[#F97316]/50 focus:outline-none"
                        placeholder="you@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-1">Phone</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg glass border border-white/10 text-white placeholder-slate-500 focus:ring-2 focus:ring-[#F97316] focus:border-[#F97316]/50 focus:outline-none"
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="serviceInterested" className="block text-sm font-medium text-slate-300 mb-1">Interested service</label>
                      <select
                        id="serviceInterested"
                        name="serviceInterested"
                        value={form.serviceInterested}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg glass border border-white/10 text-white focus:ring-2 focus:ring-[#F97316] focus:border-[#F97316]/50 focus:outline-none"
                      >
                        <option value="">Select...</option>
                        {services.map((s) => (
                          <option key={s.id} value={s.title}>{s.title}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-slate-300 mb-1">Budget</label>
                      <input
                        id="budget"
                        name="budget"
                        type="text"
                        value={form.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg glass border border-white/10 text-white placeholder-slate-500 focus:ring-2 focus:ring-[#F97316] focus:border-[#F97316]/50 focus:outline-none"
                        placeholder="e.g. $5,000 - $10,000"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg glass border border-white/10 text-white placeholder-slate-500 focus:ring-2 focus:ring-[#F97316] focus:border-[#F97316]/50 focus:outline-none resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  {status === 'error' && (
                    <p className="text-red-400 text-sm">{errorMessage}</p>
                  )}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full sm:w-auto bg-[#F97316] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#ea580c] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? 'Sending...' : 'Submit'}
                  </button>
                </form>
              )}
            </motion.div>
          </div>

          {/* Placeholder for Calendly/booking embed */}
          <motion.div className="mt-16 p-6 rounded-xl glass border border-white/10 border-dashed text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <p className="text-slate-500 text-sm">
              Prefer to book a call? Add your Calendly or booking widget here (iframe or link).
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
