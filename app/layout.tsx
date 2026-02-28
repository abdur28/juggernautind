import type { Metadata } from "next";
import { fontVariables } from "@/lib/fonts";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SmoothScrollProvider } from "@/components/animations/smooth-scroll";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Juggernaut Industries Limited | Building Africa's Future",
    template: "%s | Juggernaut Industries",
  },
  description:
    "Juggernaut Industries Limited (JIL) - A Nigerian company delivering quality services across Mining, Agriculture, Construction, Solar Energy, and Oil & Gas since 2006.",
  keywords: [
    "Juggernaut Industries",
    "JIL Nigeria",
    "Mining Nigeria",
    "Agriculture Nigeria",
    "Construction Abuja",
    "Solar Energy Nigeria",
    "Oil and Gas Nigeria",
    "Nigerian industrial company",
    "Abuja contractors",
  ],
  authors: [{ name: "Juggernaut Industries Limited" }],
  creator: "Juggernaut Industries Limited",
  publisher: "Juggernaut Industries Limited",
  metadataBase: new URL("https://juggernautind.com"),
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://juggernautind.com",
    siteName: "Juggernaut Industries Limited",
    title: "Juggernaut Industries Limited | Building Africa's Future",
    description:
      "A Nigerian company with a vision to be on the global listing of world class companies. Services in Mining, Agriculture, Construction, Solar Energy, and Oil & Gas.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Juggernaut Industries Limited",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Juggernaut Industries Limited",
    description: "Building Africa's Future Together since 2006",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${fontVariables} antialiased bg-deep-navy text-off-white`}>
        <SmoothScrollProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
