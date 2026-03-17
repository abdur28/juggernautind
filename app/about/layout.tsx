import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us – Who We Are',
  description:
    'Learn about Juggernaut Industries Limited (JIL), an indigenous Nigerian company incorporated in 2006 delivering quality services in Mining, Agriculture & Agro-Processing, Construction, and Renewable Energy.',
  keywords: [
    'Juggernaut Industries about',
    'JIL Nigeria company',
    'Nigerian industrial company',
    'mining company Nigeria',
    'Abuja construction company',
  ],
  openGraph: {
    title: 'About Juggernaut Industries Limited',
    description:
      'An indigenous Nigerian company with a vision to be on the global listing of world class companies. Mining, Agriculture & Agro-Processing, Construction, and Renewable Energy since 2006.',
    url: 'https://juggernautind.com/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
