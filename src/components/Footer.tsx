import Link from "next/link";
import CookieSettingsButton from "./CookieSettingsButton";

export default function Footer() {
  return (
    <footer className="bg-surface-lowest w-full py-20 px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="mb-6 block">
              <img src="/assets/images/podofisio_logo.png" alt="Podofisio Clinic Logo" className="h-16 w-auto grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
            </Link>
            <p className="font-body text-sm leading-relaxed text-neutral-400">
              Cuidado avanzado para tus pies y extremidad inferior. Tecnología y profesionalismo en el corazón de Terrassa.
            </p>
          </div>

          <div>
            <span className="text-xs font-bold text-white uppercase tracking-widest mb-6 block">Navegación</span>
            <ul className="space-y-4">
              <li><Link href="/servicios" className="text-sm text-neutral-400 hover:text-white transition-colors">Servicios</Link></li>
              <li><Link href="/nosotros" className="text-sm text-neutral-400 hover:text-white transition-colors">Nosotros</Link></li>
              <li><Link href="/tarifas" className="text-sm text-neutral-400 hover:text-white transition-colors">Tarifas</Link></li>
              <li><Link href="/blog" className="text-sm text-neutral-400 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <span className="text-xs font-bold text-white uppercase tracking-widest mb-6 block">Contacto</span>
            <ul className="space-y-4">
              <li className="text-sm text-neutral-400">Plaça de Mossèn Jacint Verdaguer, 1, Terrassa</li>
              <li className="text-sm text-neutral-400">+34 624 57 87 54</li>
              <li className="text-sm text-neutral-400">podofisioclinic@gmail.com</li>
            </ul>
          </div>

          <div>
            <span className="text-xs font-bold text-white uppercase tracking-widest mb-6 block">Síguenos</span>
            <div className="flex space-x-6">
              <a href="https://www.instagram.com/podofisio.clinic/" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors text-sm">Instagram</a>
            </div>
          </div>
        </div>

        {/* pr-20: deja libre la columna de los botones flotantes (WhatsApp / llamar) */}
        <div className="pt-8 pr-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-sm text-neutral-500">© 2024 Podofisio Clinic. Precision in Motion.</span>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            <Link href="/aviso-legal" className="text-xs text-neutral-600 hover:text-white transition-colors">Aviso legal</Link>
            <Link href="/politica-de-privacidad" className="text-xs text-neutral-600 hover:text-white transition-colors">Política de privacidad</Link>
            <Link href="/politica-de-cookies" className="text-xs text-neutral-600 hover:text-white transition-colors">Política de cookies</Link>
            <CookieSettingsButton className="text-xs text-neutral-600 hover:text-white transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
}
