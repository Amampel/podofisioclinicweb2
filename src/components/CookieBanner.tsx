"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { onConsentOpen, saveConsent, useConsent } from "../lib/consent";

export default function CookieBanner() {
  const consent = useConsent();
  const [open, setOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [multimedia, setMultimedia] = useState(false);

  useEffect(() => {
    if (consent === null) setOpen(true);
  }, [consent]);

  useEffect(
    () =>
      onConsentOpen(() => {
        setMultimedia(Boolean(consent?.multimedia));
        setShowSettings(true);
        setOpen(true);
      }),
    [consent]
  );

  if (!open) return null;

  const decide = (value: boolean) => {
    saveConsent(value);
    setOpen(false);
    setShowSettings(false);
  };

  const buttonBase =
    "px-5 py-3 rounded-md font-headline font-bold text-[11px] uppercase tracking-widest transition-all";

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Configuración de cookies"
      className="fixed inset-x-0 bottom-0 z-[60] p-4 md:p-6"
    >
      <div className="max-w-3xl mx-auto bg-surface-low border border-white/10 rounded-2xl shadow-2xl p-6 md:p-8">
        <p className="font-headline text-sm font-bold text-white mb-2">Tu privacidad</p>
        <p className="font-body text-sm text-neutral-400 leading-relaxed">
          Usamos almacenamiento técnico necesario para que la web funcione. Con tu permiso,
          cargaremos también contenidos de terceros (el vídeo de YouTube de la portada y el mapa de
          Google en contacto), que pueden instalar sus propias cookies. Puedes aceptar, rechazar o
          configurar. Más información en la{" "}
          <Link href="/politica-de-cookies" className="text-white underline underline-offset-2">
            política de cookies
          </Link>
          .
        </p>

        {showSettings && (
          <div className="mt-6 space-y-3">
            <div className="flex items-start justify-between gap-4 bg-white/5 rounded-xl p-4">
              <div>
                <p className="text-sm font-bold text-white">Técnicas</p>
                <p className="text-xs text-neutral-400">
                  Necesarias para el funcionamiento de la web y para recordar tu elección. Siempre activas.
                </p>
              </div>
              <span className="text-xs text-neutral-500 shrink-0">Siempre</span>
            </div>
            <label className="flex items-start justify-between gap-4 bg-white/5 rounded-xl p-4 cursor-pointer">
              <div>
                <p className="text-sm font-bold text-white">Contenidos de terceros</p>
                <p className="text-xs text-neutral-400">
                  Vídeo de YouTube y mapa de Google Maps (Google Ireland Ltd.).
                </p>
              </div>
              <input
                type="checkbox"
                checked={multimedia}
                onChange={(e) => setMultimedia(e.target.checked)}
                className="mt-1 h-5 w-5 accent-white shrink-0"
              />
            </label>
          </div>
        )}

        <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:justify-end">
          {showSettings ? (
            <button
              type="button"
              onClick={() => decide(multimedia)}
              className={`${buttonBase} border border-outline-variant text-white hover:bg-white/5`}
            >
              Guardar selección
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setShowSettings(true)}
              className={`${buttonBase} border border-outline-variant text-white hover:bg-white/5`}
            >
              Configurar
            </button>
          )}
          <button
            type="button"
            onClick={() => decide(false)}
            className={`${buttonBase} border border-outline-variant text-white hover:bg-white/5`}
          >
            Rechazar
          </button>
          <button
            type="button"
            onClick={() => decide(true)}
            className={`${buttonBase} bg-primary text-background hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]`}
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
