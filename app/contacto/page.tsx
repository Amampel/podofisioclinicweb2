import type { Metadata } from "next";
import ContactPage from "../../src/views/ContactPage";

export const metadata: Metadata = {
  title: "Pide tu Cita - Podología y Fisioterapia en Terrassa",
  description:
    "Pide cita en Podofisio Clinic Terrassa. Estamos en Plaça de Mossèn Jacint Verdaguer, 1, 08221 Terrassa. Atención por teléfono, WhatsApp o formulario online. Lunes a jueves 9h-20h, viernes 9h-18h.",
  keywords: [
    "pedir cita podólogo Terrassa",
    "cita fisioterapia Terrassa",
    "reservar cita podología Terrassa",
    "podólogo urgente Terrassa",
    "contacto podología Terrassa",
    "clínica podología cerca Terrassa",
    "teléfono podólogo Terrassa",
    "WhatsApp podólogo Terrassa",
    "dirección clínica podología Terrassa",
    "Plaça Mossèn Jacint Verdaguer Terrassa podología",
    "cita online fisioterapia Terrassa",
  ],
  alternates: {
    canonical: "/contacto",
  },
};

export default function Page() {
  return <ContactPage />;
}
