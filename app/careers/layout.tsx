import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers – Join Our Team',
  description:
    'Explore career opportunities at Juggernaut Industries Limited. Join a world-class team working across mining, agriculture, construction, solar energy, and oil & gas in Nigeria.',
  keywords: [
    'careers Juggernaut Industries',
    'jobs mining Nigeria',
    'JIL careers',
    'industrial jobs Abuja',
    'engineering jobs Nigeria',
  ],
  openGraph: {
    title: 'Careers | Juggernaut Industries',
    description:
      'Join our world-class team. Explore career opportunities across mining, agriculture, construction, and energy sectors.',
    url: 'https://juggernautind.com/careers',
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
