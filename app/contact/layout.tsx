import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us – Get In Touch',
  description:
    'Contact Juggernaut Industries Limited for consultations, partnerships, or inquiries. Located at 3 Wiser Estate, Off Regent School Road, Mabushi, Abuja, Nigeria.',
  keywords: [
    'contact Juggernaut Industries',
    'JIL Abuja office',
    'mining consultation Nigeria',
    'construction inquiry Abuja',
    'industrial services contact',
  ],
  openGraph: {
    title: 'Contact Us | Juggernaut Industries',
    description:
      'Ready to start your next project? Reach out to Juggernaut Industries for consultations, partnerships, or inquiries.',
    url: 'https://juggernautind.com/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
