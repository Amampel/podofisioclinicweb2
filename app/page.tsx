import type { Metadata } from "next";
import Home from "../src/views/Home";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuándo debo ir al podólogo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Debes visitar al podólogo si tienes dolor en los pies, uñas encarnadas, durezas o callosidades, cambios en la forma del pie o si practicas deporte regularmente. También es recomendable una revisión anual preventiva, especialmente si tienes diabetes o problemas circulatorios.",
      },
    },
    {
      "@type": "Question",
      name: "¿Para qué sirven las plantillas ortopédicas personalizadas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las plantillas ortopédicas personalizadas corrigen la pisada, distribuyen mejor las cargas y alivian el dolor en pies, rodillas, caderas y espalda. En Podofisio Clinic las fabricamos mediante escáner 3D e impresión aditiva para una adaptación perfecta a tu pie y actividad.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es la fascitis plantar y cómo se trata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La fascitis plantar es la inflamación de la fascia plantar, el tejido que une el talón con los dedos. Provoca un dolor intenso en el talón especialmente al dar los primeros pasos por la mañana. En Podofisio Clinic la tratamos con EPI/EPTE guiada por ecografía, radiofrecuencia Indiba, plantillas personalizadas y corrección biomecánica.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuándo debo acudir al fisioterapeuta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Es recomendable visitar al fisioterapeuta ante cualquier dolor muscular o articular que persista más de 72 horas, tras una lesión deportiva, para recuperarte de una cirugía o de forma preventiva si tienes sobrecarga por trabajo físico o sedentarismo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es el estudio biomecánico de la pisada?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El estudio biomecánico es un análisis computerizado de cómo pisas y caminas usando plataformas de presiones y sensores inerciales. Detectamos desequilibrios que causan dolor en pies, rodillas, caderas o espalda y obtenemos los datos para fabricar tus plantillas 3D personalizadas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Dónde está Podofisio Clinic en Terrassa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Estamos en el Carrer de la Salut, 42, 08221 Terrassa (Barcelona). Atendemos de lunes a jueves de 9h a 20h y los viernes de 9h a 18h. También atendemos pacientes de Rubí, Sant Cugat del Vallès, Sabadell y el Vallès Occidental.",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "Podólogo y Fisioterapeuta en Terrassa",
  description:
    "Clínica de podología y fisioterapia en Terrassa. Especialistas en fascitis plantar, uñas encarnadas, biomecánica del pie, plantillas ortopédicas y fisioterapia deportiva. Pide cita hoy.",
  keywords: [
    "podólogo Terrassa",
    "fisioterapeuta Terrassa",
    "clínica podología Terrassa",
    "fisioterapia Terrassa",
    "fascitis plantar Terrassa",
    "uñas encarnadas Terrassa",
    "plantillas ortopédicas Terrassa",
    "estudio biomecánico Terrassa",
    "fisioterapia deportiva Terrassa",
    "dolor de pie Terrassa",
    "podologia Terrassa",
    "fisioteràpia Terrassa",
    "podòleg Terrassa",
    "mejor podólogo Terrassa",
    "clínica podología fisioterapia Terrassa",
    "dolor talón Terrassa",
    "extremidad inferior Terrassa",
  ],
  alternates: {
    canonical: "/",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Home />
    </>
  );
}
