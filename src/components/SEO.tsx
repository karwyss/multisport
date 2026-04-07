import { Helmet } from 'react-helmet-async';

type SEOProps = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
};

export default function SEO({ 
  title = 'MultiSport Wadowice - Nauka Pływania | Obozy Sportowe',
  description = 'MultiSport Wadowice - nauka pływania dla dzieci i dorosłych. Zajęcia sportowe, obozy zimowe i letnie w Wadowicach. Zapisz się już dziś!',
  image = 'https://karwyss.github.io/multisport/og-image.svg',
  url = 'https://karwyss.github.io/multisport/'
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="nauka pływania Wadowice, szkółka pływacka Wadowice, obozy sportowe Wadowice, pływanie dla dzieci, pływanie dla dorosłych, aqua aerobik" />
      <meta name="author" content="MultiSport Wadowice" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pl_PL" />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta name="geo.region" content="PL-12" />
      <meta name="geo.placename" content="Wadowice" />
    </Helmet>
  );
}
