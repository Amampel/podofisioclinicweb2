import type { ReactNode } from "react";

// Maqueta común de las páginas legales: título, fecha de actualización y texto.
export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <section className="px-6 md:px-8 py-20 md:py-28">
      <div className="max-w-3xl mx-auto">
        <span className="font-headline text-[10px] md:text-xs uppercase tracking-[0.4em] text-secondary font-bold">
          Información legal
        </span>
        <h1 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tighter text-white mt-4 mb-4">
          {title}
        </h1>
        <p className="text-xs text-neutral-500 mb-12">Última actualización: {updated}</p>
        <div className="legal-content font-body text-neutral-300 leading-relaxed">{children}</div>
      </div>
    </section>
  );
}
