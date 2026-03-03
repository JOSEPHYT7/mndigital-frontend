import { Helmet } from 'react-helmet-async';

const DEFAULT_OG_IMAGE = 'https://mndigital.com/og-image.png';
const SITE_URL = 'https://mndigital.com';

export default function PageMeta({
  title,
  description,
  path = '',
  image = DEFAULT_OG_IMAGE,
  noIndex = false,
}) {
  const url = path ? `${SITE_URL}${path}` : SITE_URL;
  const fullTitle = title ? `${title} | M&N Digital` : 'M&N Digital – AI-Powered Growth Solutions';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || 'Premium digital growth agency using AI-driven automation for faster, smarter solutions.'} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || 'Premium digital growth agency using AI-driven automation.'} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="M&N Digital" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || 'Premium digital growth agency using AI-driven automation.'} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
