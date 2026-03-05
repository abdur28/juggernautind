import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Projects – Delivered Excellence Across Nigeria',
  description:
    'Explore selected projects delivered by Juggernaut Industries Limited, from government contracts to private sector partnerships in mining, construction, and agriculture.',
  keywords: [
    'Juggernaut Industries projects',
    'mining projects Nigeria',
    'construction projects Abuja',
    'NIMEP contractor',
    'Segilola gold mine',
    'Nigerian infrastructure projects',
  ],
  openGraph: {
    title: 'Our Projects | Juggernaut Industries',
    description:
      'Selected projects making key impacts across Nigeria – government contracts, mining operations, and infrastructure development.',
    url: 'https://juggernautind.com/projects',
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
