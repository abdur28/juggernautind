export function OrganizationJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Juggernaut Industries Limited',
    alternateName: 'JIL',
    url: 'https://juggernautind.com',
    logo: 'https://juggernautind.com/logo.png',
    foundingDate: '2006',
    description:
      'Juggernaut Industries Limited (JIL) - A Nigerian company delivering quality services across Mining, Agriculture & Agro-Processing, Construction, and Renewable Energy since 2006.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '3 Wiser Estate, Off Regent School Road',
      addressLocality: 'Mabushi',
      addressRegion: 'Abuja',
      addressCountry: 'NG',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+234-7052440133',
      contactType: 'customer service',
      availableLanguage: 'English',
    },
    sameAs: [
      'https://ng.linkedin.com/company/juggernaut-industries-ltd',
    ],
    areaServed: {
      '@type': 'Country',
      name: 'Nigeria',
    },
    knowsAbout: [
      'Mining & Exploration',
      'Agriculture & Agro-Processing',
      'Construction',
      'Renewable Energy',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function LocalBusinessJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Juggernaut Industries Limited',
    image: 'https://juggernautind.com/logo.png',
    url: 'https://juggernautind.com',
    telephone: '+234-7052440133',
    email: 'info@juggernautind.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '3 Wiser Estate, Off Regent School Road',
      addressLocality: 'Mabushi, Abuja',
      addressRegion: 'FCT',
      postalCode: '900108',
      addressCountry: 'NG',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 9.0820,
      longitude: 7.4262,
    },
    priceRange: '$$$$',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
