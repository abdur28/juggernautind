import { Cormorant_Garamond, Montserrat, Nunito_Sans } from 'next/font/google';

// Display font - For hero headlines, brand name, large display text
export const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

// Heading font - For section titles, navigation, buttons
export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-heading',
  display: 'swap',
});

// Body font - For paragraphs, descriptions, general text
export const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

// Combined font variables for className
export const fontVariables = `${cormorantGaramond.variable} ${montserrat.variable} ${nunitoSans.variable}`;
