import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services – Mining, Agriculture, Construction & Energy',
  description:
    'Explore Juggernaut Industries\' comprehensive services including Mining & Exploration, Agriculture & Agro-Processing, Construction, and Renewable Energy across Nigeria.',
  keywords: [
    'mining services Nigeria',
    'agricultural services Abuja',
    'construction company Nigeria',
    'renewable energy Nigeria',
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
