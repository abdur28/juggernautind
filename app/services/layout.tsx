import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services – Mining, Agriculture, Construction & Energy',
  description:
    'Explore Juggernaut Industries\' comprehensive services including Mining & Exploration, Agriculture, Construction, Solar Energy, and Oil & Gas across Nigeria.',
  keywords: [
    'mining services Nigeria',
    'agricultural services Abuja',
    'construction company Nigeria',
    'solar energy Nigeria',
    'oil and gas services',
    'mineral exploration Nigeria',
  ],
  openGraph: {
    title: 'Our Services | Juggernaut Industries',
    description:
      'Comprehensive industrial solutions across mining, agriculture, construction, and renewable energy sectors in Nigeria.',
    url: 'https://juggernautind.com/services',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
