import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services, getService } from "../../../src/lib/service-data";
import ServiceDetail from "../../../src/components/ServiceDetail";

// ── Static params ────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

// ── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return {
      title: "Servicio no encontrado | Podofisio Clinic",
    };
  }

  const canonicalUrl = `https://www.podofisioclinic.com/servicios/${service.slug}`;

  return {
    title: `${service.title} en Terrassa | Podofisio Clinic`,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${service.title} en Terrassa | Podofisio Clinic`,
      description: service.metaDescription,
      url: canonicalUrl,
      siteName: "Podofisio Clinic",
      images: [
        {
          url: service.image,
          width: 2070,
          height: 1380,
          alt: service.title,
        },
      ],
      locale: "es_ES",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} en Terrassa | Podofisio Clinic`,
      description: service.metaDescription,
      images: [service.image],
    },
  };
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    name: service.title,
    description: service.metaDescription,
    url: `https://www.podofisioclinic.com/servicios/${service.slug}`,
    medicineSystem: "https://schema.org/WesternConventional",
    relevantSpecialty: [
      "https://schema.org/Podiatric",
      "https://schema.org/PhysicalTherapy",
    ],
    recognizingAuthority: {
      "@type": "Organization",
      name: "Col·legi de Podòlegs de Catalunya",
    },
    provider: {
      "@type": "MedicalClinic",
      name: "Podofisio Clinic",
      url: "https://www.podofisioclinic.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Terrassa",
        addressRegion: "Catalunya",
        addressCountry: "ES",
      },
      telephone: "+34 93 000 00 00",
      priceRange: "€€",
    },
    availableService: service.conditions.map((condition) => ({
      "@type": "MedicalIndication",
      name: condition,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceDetail service={service} />
    </>
  );
}
