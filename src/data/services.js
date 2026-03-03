// 1 USD ≈ 83 INR (display rate)
export const USD_TO_INR = 83;

// Service-relevant images (Unsplash). Replace with your own assets in production.
const SERVICE_IMAGES = {
  'website-development': 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80', // laptop, code, web dev
  'ecommerce-development': 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80', // e-commerce, shopping
  'web-application': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80', // dashboard, analytics
  'digital-marketing': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80', // marketing, analytics
  'seo-services': 'https://images.unsplash.com/photo-1432888498268-698ff13dac16?w=800&q=80', // search, SEO
  'content-service': 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80', // writing, content
  'design-service': 'https://images.unsplash.com/photo-1561070791-2526d31cc5b5?w=800&q=80', // UI/UX, design
  'branding': 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80', // brand, identity
  'ai-automation': 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80', // AI, technology
  'social-media-content': 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80', // social media
};

const img = (slug) => SERVICE_IMAGES[slug] || null;

export const services = [
  { id: 'website-development', title: 'Website Development', shortDesc: 'Fast, responsive websites that convert visitors into customers.', slug: 'website-development', image: img('website-development') },
  { id: 'ecommerce-development', title: 'E-commerce Development', shortDesc: 'Online stores that scale with secure checkout and inventory.', slug: 'ecommerce-development', image: img('ecommerce-development') },
  { id: 'web-application', title: 'Web Application', shortDesc: 'Custom web apps, dashboards, and SaaS products.', slug: 'web-application', image: img('web-application') },
  { id: 'digital-marketing', title: 'Digital Marketing', shortDesc: 'Paid ads, campaigns, and data-driven growth.', slug: 'digital-marketing', image: img('digital-marketing') },
  { id: 'seo-services', title: 'SEO Services', shortDesc: 'Rank higher with technical and content SEO.', slug: 'seo-services', image: img('seo-services') },
  { id: 'content-service', title: 'Content Service', shortDesc: 'Blogs, copy, and scripts that engage and convert.', slug: 'content-service', image: img('content-service') },
  { id: 'design-service', title: 'Design Service', shortDesc: 'UI/UX, graphics, and design systems.', slug: 'design-service', image: img('design-service') },
  { id: 'branding', title: 'Branding', shortDesc: 'Logo, identity, and guidelines that stand out.', slug: 'branding', image: img('branding') },
  { id: 'ai-automation', title: 'AI & Automation', shortDesc: 'Chatbots, workflows, and smart automation.', slug: 'ai-automation', image: img('ai-automation') },
  { id: 'social-media-content', title: 'Social Media Content Creation', shortDesc: 'Posts, reels, and campaigns that grow your audience.', slug: 'social-media-content', image: img('social-media-content') },
];

function price(usd, inr) {
  return { usd, inr };
}

export const serviceDetails = {
  'website-development': {
    title: 'Website Development',
    image: img('website-development'),
    problem: 'Your business needs a fast, professional web presence that works on every device and converts visitors into customers.',
    longDescription: 'From landing pages to full corporate sites, we deliver pixel-perfect, fast-loading websites built with modern stacks. Every project includes responsive design, SEO foundations, and clear conversion paths so your site works as hard as you do.',
    solutions: 'We build responsive, SEO-friendly websites using modern stacks (React, Node) with clear structure and strong calls-to-action.',
    features: ['Responsive design (mobile-first)', 'SEO optimization & performance', 'Clear navigation and CTAs', 'Forms and analytics', 'Fast load times and security'],
    process: ['Discovery and requirements', 'Design and approval', 'Development and testing', 'Launch and handover'],
    faqs: [
      { q: 'How long does a typical website take?', a: 'Most projects are delivered in 4–8 weeks depending on scope and revisions.' },
      { q: 'Do you host the website?', a: 'We can set up hosting (Vercel, Netlify) or work with your existing provider.' },
      { q: 'Can I update content myself?', a: 'Yes. We can add a CMS or simple admin for key content.' },
    ],
    subServices: [
      { name: 'Landing Page (1 page)', what: 'Single-page site with hero, features, CTA, contact form.', price: price(199, 16499) },
      { name: 'Business Website (5–7 pages)', what: 'Home, About, Services, Gallery, Contact, FAQ.', price: price(549, 45599) },
      { name: 'Corporate Website (10–15 pages)', what: 'Multi-section site with blog, team, case studies.', price: price(999, 82999) },
      { name: 'Custom Web App UI', what: 'Front-end for dashboards, tools, or SaaS (design + build).', price: price(1499, 124499) },
    ],
  },
  'ecommerce-development': {
    title: 'E-commerce Development',
    image: img('ecommerce-development'),
    longDescription: 'We build online stores that convert: secure checkout, inventory management, and seamless payment and shipping integrations so you can focus on growth.',
    problem: 'You need a reliable online store that handles products, payments, and orders without slowing you down.',
    solutions: 'We design and build e-commerce experiences with secure checkout, inventory logic, and integrations (payment, shipping).',
    features: ['Product catalog and search', 'Secure checkout and payments', 'Order and inventory management', 'Shipping and tax options', 'Analytics and reporting'],
    process: ['Catalog and UX planning', 'Design and checkout flow', 'Build and integrations', 'Launch and training'],
    faqs: [
      { q: 'Which payment gateways do you support?', a: 'Stripe, PayPal, Razorpay, and others depending on your region.' },
      { q: 'Can you migrate my existing store?', a: 'Yes. We migrate from Shopify, WooCommerce, etc. with minimal downtime.' },
    ],
    subServices: [
      { name: 'Basic Store (up to 50 products)', what: 'Catalog, cart, checkout, one payment gateway.', price: price(899, 74699) },
      { name: 'Mid-size Store (50–500 products)', what: 'Search, filters, multiple gateways, basic reporting.', price: price(1899, 157799) },
      { name: 'Enterprise Store', what: 'Custom features, multi-currency, ERP integration.', price: price(3999, 331999) },
      { name: 'Store Migration', what: 'Full migration from another platform with data and SEO.', price: price(499, 41499) },
    ],
  },
  'web-application': {
    title: 'Web Application',
    image: img('web-application'),
    longDescription: 'Custom web applications and SaaS products built for scale. We handle architecture, security, and deployment so you get a product that grows with you.',
    problem: 'You need a custom web app—dashboard, tool, or SaaS—that fits your workflow and scales.',
    solutions: 'We build secure, scalable web applications with modern stacks and clear UX.',
    features: ['Custom UI/UX', 'Authentication and roles', 'API integration', 'Real-time updates (if needed)', 'Deployment and DevOps'],
    process: ['Discovery and scope', 'Architecture and design', 'Sprint-based development', 'Launch and support'],
    faqs: [
      { q: 'What tech stack do you use?', a: 'React/Next.js frontend, Node.js or similar backend, PostgreSQL/MongoDB.' },
      { q: 'Do you build MVPs?', a: 'Yes. We scope MVPs to validate ideas quickly and iterate.' },
    ],
    subServices: [
      { name: 'MVP (Minimum Viable Product)', what: 'Core features to validate your idea, 2–3 months.', price: price(2499, 207499) },
      { name: 'SaaS Dashboard', what: 'Admin dashboard, users, subscriptions, analytics.', price: price(4499, 373499) },
      { name: 'Custom Web App', what: 'Tailored to your workflow; quote after discovery.', price: price(5999, 497499) },
      { name: 'API Development', what: 'REST or GraphQL API for your product or integration.', price: price(1299, 107899) },
    ],
  },
  'digital-marketing': {
    title: 'Digital Marketing',
    image: img('digital-marketing'),
    longDescription: 'Data-driven paid campaigns across Google, Meta, and LinkedIn. We optimize for leads and revenue with clear reporting and continuous testing.',
    problem: 'You need more leads and sales but lack expertise in paid ads and campaign strategy.',
    solutions: 'We run and optimize paid campaigns (Google, Meta, LinkedIn) and align them with your goals.',
    features: ['Campaign strategy', 'Ad creatives and copy', 'Landing page optimization', 'Tracking and reporting', 'A/B testing'],
    process: ['Audit and goals', 'Strategy and channels', 'Launch and optimize', 'Monthly reporting'],
    faqs: [
      { q: 'Which platforms do you run ads on?', a: 'Google Ads, Meta (Facebook/Instagram), LinkedIn, and others as needed.' },
      { q: 'Is there a minimum budget?', a: 'We recommend at least $500–1000/month for meaningful results.' },
    ],
    subServices: [
      { name: 'PPC Management (Google/Meta)', what: 'Setup, targeting, creatives, and monthly optimization.', price: price(399, 33199) },
      { name: 'Social Media Ads', what: 'Meta & Instagram campaigns; creative and copy included.', price: price(349, 28999) },
      { name: 'Email Marketing', what: 'Sequences, automation, and monthly sends.', price: price(299, 24899) },
      { name: 'Full Funnel Strategy', what: 'Strategy, multiple channels, and reporting.', price: price(799, 66399) },
    ],
  },
  'seo-services': {
    title: 'SEO Services',
    image: img('seo-services'),
    longDescription: 'Technical and content SEO that drives organic traffic. We audit, optimize, and create a sustainable strategy so you rank where it matters.',
    problem: 'Your site isn’t ranking or attracting organic traffic despite good products or content.',
    solutions: 'We improve technical SEO, on-page structure, and content so you rank better and get qualified traffic.',
    features: ['Technical SEO audit', 'Keyword and topic research', 'On-page optimization', 'Content recommendations', 'Monthly reporting'],
    process: ['Audit and baseline', 'Strategy and keywords', 'Optimization and content', 'Monitor and refine'],
    faqs: [
      { q: 'How soon will we see results?', a: 'Technical gains in weeks; sustained traffic growth often 3–6 months.' },
      { q: 'Do you work with local businesses?', a: 'Yes. We include local SEO and GMB optimization where relevant.' },
    ],
    subServices: [
      { name: 'One-time SEO Audit', what: 'Technical and on-page audit with actionable report.', price: price(299, 24899) },
      { name: 'SEO Starter (monthly)', what: 'Basic optimization, 2–4 pages/month, monthly report.', price: price(199, 16499) },
      { name: 'SEO Growth (monthly)', what: 'Full optimization, content support, backlink outreach.', price: price(449, 37299) },
      { name: 'Enterprise SEO (monthly)', what: 'Dedicated strategist, full site and content plan.', price: price(899, 74699) },
    ],
  },
  'content-service': {
    title: 'Content Service',
    image: img('content-service'),
    longDescription: 'Blogs, landing pages, and scripts that match your voice and SEO goals. We deliver ready-to-publish content that engages and converts.',
    problem: 'You need quality content that ranks, engages, and converts but lack time or writers.',
    solutions: 'We create blogs, copy, and scripts aligned with your brand and SEO goals.',
    features: ['Blog and article writing', 'Landing page and sales copy', 'Video scripts', 'Editing and SEO alignment', 'Content calendar support'],
    process: ['Brief and tone', 'Outline and approval', 'Draft and revision', 'Publish or handover'],
    faqs: [
      { q: 'Do you write in our tone?', a: 'Yes. We align with your brand voice and guidelines.' },
      { q: 'Is SEO included?', a: 'We optimize for keywords and structure; full SEO can be bundled.' },
    ],
    subServices: [
      { name: 'Blog Post (800–1200 words)', what: 'One SEO-optimized article, 1 revision.', price: price(79, 6559) },
      { name: 'Landing Page Copy', what: 'Hero, benefits, CTA, and supporting sections.', price: price(149, 12399) },
      { name: 'Content Package (5 posts)', what: '5 blog posts with keywords and internal linking.', price: price(349, 28999) },
      { name: 'Video Script (3–5 min)', what: 'Script for explainer or promo video.', price: price(99, 8219) },
    ],
  },
  'design-service': {
    title: 'Design Service',
    image: img('design-service'),
    longDescription: 'UI/UX and graphic design that elevates your product. From wireframes to design systems, we deliver assets that development teams love.',
    problem: 'Your product or brand needs professional UI/UX or graphic design to compete.',
    solutions: 'We deliver UI/UX for web and app, plus graphic design and design systems.',
    features: ['UI/UX design', 'Wireframes and prototypes', 'Graphic design and assets', 'Design systems', 'Handoff to development'],
    process: ['Discovery and references', 'Wireframes and flow', 'Visual design and iteration', 'Handoff and specs'],
    faqs: [
      { q: 'What tools do you use?', a: 'Figma for UI/UX; we can export for any stack.' },
      { q: 'Do you do illustration?', a: 'Yes. Custom illustrations and icons can be included.' },
    ],
    subServices: [
      { name: 'UI Design (5–10 screens)', what: 'High-fidelity UI for web or app.', price: price(499, 41499) },
      { name: 'UX Research + Wireframes', what: 'User flow, wireframes, and recommendations.', price: price(399, 33199) },
      { name: 'Graphic Design (per asset)', what: 'Social graphics, banners, thumbnails.', price: price(49, 4069) },
      { name: 'Design System', what: 'Components, tokens, and documentation.', price: price(899, 74699) },
    ],
  },
  'branding': {
    title: 'Branding',
    image: img('branding'),
    longDescription: 'Logo, identity, and guidelines that make you memorable. We create a cohesive brand that works across web, print, and social.',
    problem: 'Your brand looks inconsistent or outdated and doesn’t reflect the quality of your offer.',
    solutions: 'We define or refresh your brand identity and apply it consistently across touchpoints.',
    features: ['Logo and visual identity', 'Brand guidelines', 'Color and typography', 'Templates and collateral', 'Asset delivery'],
    process: ['Brand discovery', 'Concepts and direction', 'Refinement and guidelines', 'Rollout and assets'],
    faqs: [
      { q: 'Do you do logo-only?', a: 'Yes. Logo + basic guidelines from the pricing below.' },
      { q: 'What file formats do we get?', a: 'SVG, PNG, PDF, and source files for print and digital.' },
    ],
    subServices: [
      { name: 'Logo Only', what: 'Logo concept, 2 revisions, final files.', price: price(199, 16499) },
      { name: 'Logo + Basic Guidelines', what: 'Logo, colors, type, usage do’s and don’ts.', price: price(399, 33199) },
      { name: 'Full Brand Identity', what: 'Logo, guidelines, business card, letterhead, social kit.', price: price(799, 66399) },
      { name: 'Brand Refresh', what: 'Update existing identity with new direction and assets.', price: price(549, 45599) },
    ],
  },
  'ai-automation': {
    title: 'AI & Automation',
    image: img('ai-automation'),
    longDescription: 'Chatbots, workflow automation, and data pipelines that save time and surface insights. We use proven tools and custom integrations so you get real ROI.',
    problem: 'Repetitive tasks and scattered data are slowing your team and limiting insights.',
    solutions: 'We use AI and automation to streamline workflows, reduce manual work, and surface insights.',
    features: ['Workflow automation', 'Chatbots and AI assistants', 'Data pipelines', 'Document automation', 'Integrations'],
    process: ['Audit of workflows', 'Automation roadmap', 'Build and test', 'Deploy and iterate'],
    faqs: [
      { q: 'What tools do you use?', a: 'Make, Zapier, custom scripts, and AI APIs (OpenAI, etc.) as needed.' },
      { q: 'Is my data secure?', a: 'Yes. We follow security best practices and can work within compliance needs.' },
    ],
    subServices: [
      { name: 'Chatbot (website or WhatsApp)', what: 'Rule-based or AI chatbot, up to 50 intents.', price: price(449, 37299) },
      { name: 'Workflow Automation', what: 'Automate 3–5 workflows (email, CRM, sheets, etc.).', price: price(399, 33199) },
      { name: 'Data Pipeline / Reporting', what: 'Connect sources, clean data, dashboards or reports.', price: price(549, 45599) },
      { name: 'Custom AI Integration', what: 'Custom AI features (summarization, classification, etc.).', price: price(999, 82999) },
    ],
  },
  'social-media-content': {
    title: 'Social Media Content Creation',
    image: img('social-media-content'),
    longDescription: 'Consistent posts, reels, and campaigns that grow your audience. We handle strategy, creation, and scheduling so your channels stay active and on-brand.',
    problem: 'You need a steady stream of engaging posts and reels but lack time or creatives.',
    solutions: 'We create and schedule posts, reels, and campaigns that grow your audience and engagement.',
    features: ['Content calendar', 'Posts and stories', 'Reels/short-form video', 'Captions and hashtags', 'Scheduling and reporting'],
    process: ['Strategy and calendar', 'Content creation', 'Review and schedule', 'Monthly reporting'],
    faqs: [
      { q: 'Which platforms?', a: 'Instagram, Facebook, LinkedIn, Twitter/X; we tailor per platform.' },
      { q: 'Do you manage community?', a: 'Yes. We can add comment and DM management to packages.' },
    ],
    subServices: [
      { name: 'Starter (12 posts/month)', what: '12 feed posts + 8 stories; 2 platforms.', price: price(199, 16499) },
      { name: 'Growth (20 posts + 4 reels)', what: '20 posts, 4 reels, stories; 2–3 platforms.', price: price(349, 28999) },
      { name: 'Pro (30 posts + 8 reels)', what: 'Full calendar, reels, stories, basic ads support.', price: price(549, 45599) },
      { name: 'Campaign (one-off)', what: 'Campaign concept, creatives, and copy for a launch.', price: price(299, 24899) },
    ],
  },
};
