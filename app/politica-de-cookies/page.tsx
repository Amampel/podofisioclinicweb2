import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "../../src/components/LegalPage";
import CookieSettingsButton from "../../src/components/CookieSettingsButton";

export const metadata: Metadata = {
  title: "Política de cookies",
  description:
    "Qué cookies y tecnologías similares utiliza la web de Podofisio Clinic, para qué sirven y cómo gestionarlas.",
  alternates: { canonical: "/politica-de-cookies" },
};

export default function Page() {
  return (
    <LegalPage title="Política de cookies" updated="9 de octubre de 2026">
      <p>
        En cumplimiento del artículo 22.2 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la
        Información y de Comercio Electrónico (LSSICE), le informamos sobre las cookies y tecnologías similares que
        utiliza el sitio web podofisioclinic.com, titularidad de PODOFISIO TERRASSA S.L. (en adelante “Podofisio
        Clinic”).
      </p>

      <h2>¿Qué son las cookies?</h2>
      <p>
        Las cookies son pequeños archivos que los sitios web guardan en el navegador del usuario. Junto con otras
        tecnologías similares, como el almacenamiento local del navegador, permiten que la web funcione
        correctamente, recordar preferencias o, en el caso de servicios de terceros, recoger información sobre la
        navegación.
      </p>

      <h2>Cookies que utiliza esta web</h2>
      <h3>Técnicas o necesarias (no requieren consentimiento)</h3>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Titular</th>
              <th>Finalidad</th>
              <th>Duración</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>podofisio-consent</td>
              <td>Podofisio Clinic (propia)</td>
              <td>
                Almacenamiento local del navegador que guarda su elección sobre las cookies, para no volver a
                preguntarle en cada visita.
              </td>
              <td>Hasta que la borre o cambie esta política</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Contenidos de terceros (solo con su consentimiento)</h3>
      <p>
        La web incorpora dos contenidos de Google que, al cargarse, pueden instalar cookies propias de ese
        proveedor. Ninguno de ellos se carga hasta que usted acepta esta categoría en el aviso de cookies.
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Servicio</th>
              <th>Titular</th>
              <th>Finalidad</th>
              <th>Más información</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>YouTube (modo de privacidad mejorada, youtube-nocookie.com)</td>
              <td>Google Ireland Ltd.</td>
              <td>Reproducir el vídeo de presentación de la clínica en la portada.</td>
              <td>
                <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer">
                  Política de cookies de Google
                </a>
              </td>
            </tr>
            <tr>
              <td>Google Maps</td>
              <td>Google Ireland Ltd.</td>
              <td>Mostrar la ubicación de la clínica en la página de contacto.</td>
              <td>
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                  Política de privacidad de Google
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Medición de visitas</h3>
      <p>
        Para conocer el rendimiento técnico y el número de visitas utilizamos Vercel Web Analytics y Speed Insights
        (Vercel Inc.). Estas herramientas no instalan cookies ni identifican al usuario: trabajan con datos
        agregados y anónimos.
      </p>

      <h2>Cómo gestionar o retirar su consentimiento</h2>
      <p>
        Puede aceptar, rechazar o configurar las cookies en el aviso que aparece en su primera visita, y cambiar
        de opinión en cualquier momento desde el enlace “Configurar cookies” del pie de página o desde este botón:
      </p>
      <p>
        <CookieSettingsButton className="mt-2 border border-outline-variant text-white px-6 py-3 rounded-md font-headline font-bold text-[11px] uppercase tracking-widest hover:bg-white/5 transition-all" />
      </p>
      <p>
        También puede bloquear o eliminar las cookies desde la configuración de su navegador. Si rechaza los
        contenidos de terceros, la web seguirá funcionando con normalidad; solo dejará de mostrarse el vídeo de la
        portada y el mapa, que podrá abrir directamente en Google Maps.
      </p>

      <h2>Más información</h2>
      <p>
        Para cualquier duda sobre el tratamiento de sus datos puede consultar nuestra{" "}
        <Link href="/politica-de-privacidad">política de privacidad</Link> o escribirnos a{" "}
        <a href="mailto:info@podofisioclinic.com">info@podofisioclinic.com</a>.
      </p>
    </LegalPage>
  );
}
