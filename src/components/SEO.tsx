import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
}

export default function SEO({ 
  title = "PODOFISIO CLINIC Terrassa | Especialistas en Extremidad Inferior", 
  description = "Clínica en Terrassa especializada en fisioterapia invasiva y podología para la extremidad inferior. Biomecánica digital y recuperación avanzada.",
  canonical = "https://podofisioclinic.com/",
  ogImage = "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop"
}: SEOProps) {
  const fullTitle = title.includes("PODOFISIO CLINIC") ? title : `${title} | PODOFISIO CLINIC`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD for LocalBusiness */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          "name": "PODOFISIO CLINIC",
          "image": ogImage,
          "@id": "https://podofisioclinic.com/",
          "url": "https://podofisioclinic.com/",
          "telephone": "+34 937 80 00 00",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Carrer de la Salut, 42",
            "addressLocality": "Terrassa",
            "postalCode": "08221",
            "addressCountry": "ES"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 41.5632,
            "longitude": 2.0089
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "09:00",
              "closes": "20:00"
            }
          ],
          "sameAs": [
            "https://www.facebook.com/podofisioclinic",
            "https://www.instagram.com/podofisioclinic"
          ],
          "medicalSpecialty": ["Physiotherapy", "Podiatry"],
          "description": description
        })}
      </script>
    </Helmet>
  );
}
