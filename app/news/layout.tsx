import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News & Updates',
  description:
    'Stay updated with the latest news, announcements, and industry insights from Juggernaut Industries Limited.',
  keywords: [
    'Juggernaut Industries news',
    'JIL updates',
    'Nigerian mining news',
    'industrial news Nigeria',
  ],
  openGraph: {
    title: 'News & Updates | Juggernaut Industries',
    description:
      'Latest news, announcements, and industry insights from Juggernaut Industries Limited.',
    url: 'https://juggernautind.com/news',
  },
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
