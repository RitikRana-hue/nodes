import { DefaultSeoProps } from 'next-seo';

const SEO: DefaultSeoProps = {
  titleTemplate: '%s | NodesIO',
  defaultTitle: 'NodesIO - Smart IoT Waste Management Solutions',
  description:
    'Transform your waste management with NodesIO smart IoT solutions. Real-time monitoring, AI-powered analytics, and sustainable practices for cleaner cities.',
  canonical: 'https://nodesio.com',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nodesio.com',
    siteName: 'NodesIO',
    title: 'NodesIO - Smart IoT Waste Management',
    description:
      'Transform your waste management with smart IoT solutions. Real-time monitoring, AI-powered analytics, and sustainable practices.',
    images: [
      {
        url: 'https://nodesio.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NodesIO - Smart Waste Management Solutions',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    handle: '@nodesio',
    site: '@nodesio',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, maximum-scale=5',
    },
    {
      name: 'keywords',
      content:
        'IoT, waste management, smart cities, sustainability, sensors, AI analytics, route optimization, smart bins',
    },
    {
      name: 'author',
      content: 'NodesIO',
    },
    {
      name: 'theme-color',
      content: '#2563EB',
    },
    {
      httpEquiv: 'x-ua-compatible',
      content: 'IE=edge',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
};

export default SEO;
