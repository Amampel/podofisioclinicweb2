"use client";
import { useEffect, useState } from "react";

// Consentimiento de cookies (LSSI art. 22.2). Solo hay una categoría opcional:
// "multimedia" = contenidos de terceros (vídeo de YouTube y mapa de Google).
// Hasta que el usuario acepta, no se carga nada de terceros que deje cookies.

export const CONSENT_KEY = "podofisio-consent";
export const CONSENT_VERSION = "2026-10-09";
const EVENT = "podofisio-consent-change";
const OPEN_EVENT = "podofisio-consent-open";

export type Consent = {
  multimedia: boolean;
  version: string;
  date: string;
};

export function readConsent(): Consent | null {
  try {
    const raw = window.localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Consent;
    // Si cambia la política, se vuelve a preguntar.
    if (parsed.version !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function saveConsent(multimedia: boolean) {
  const consent: Consent = {
    multimedia,
    version: CONSENT_VERSION,
    date: new Date().toISOString(),
  };
  try {
    window.localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
  } catch {
    // Sin almacenamiento: el consentimiento vale solo para esta visita.
  }
  window.dispatchEvent(new CustomEvent(EVENT, { detail: consent }));
}

export function openConsentSettings() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

export function onConsentOpen(handler: () => void) {
  window.addEventListener(OPEN_EVENT, handler);
  return () => window.removeEventListener(OPEN_EVENT, handler);
}

// undefined = aún no leído (SSR / primer render); null = sin decisión.
export function useConsent(): Consent | null | undefined {
  const [consent, setConsent] = useState<Consent | null | undefined>(undefined);

  useEffect(() => {
    setConsent(readConsent());
    const handler = (e: Event) => setConsent((e as CustomEvent<Consent>).detail);
    window.addEventListener(EVENT, handler);
    return () => window.removeEventListener(EVENT, handler);
  }, []);

  return consent;
}
