"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { ArrowLeft, ChevronDown, Plus, Minus, ArrowRight } from "lucide-react";
import { ServiceData, services } from "../lib/service-data";

interface ServiceDetailProps {
  service: ServiceData;
}

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function ServiceDetail({ service }: ServiceDetailProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const relatedServiceData = service.relatedServices
    .map((slug) => services.find((s) => s.slug === slug))
    .filter(Boolean) as ServiceData[];

  return (
    <main className="bg-background">
      {/* ── 1. HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background">
        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(198,198,203,0.08) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Gradient fade bottom */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent pointer-events-none" />

        {/* Giant background number */}
        <span
          aria-hidden="true"
          className="absolute right-0 bottom-0 font-headline font-extrabold text-white/[0.03] leading-none select-none pointer-events-none"
          style={{ fontSize: "25vw" }}
        >
          {service.number}
        </span>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-24">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 text-on-surface-variant text-sm hover:text-white transition-colors group"
            >
              <ArrowLeft
                size={14}
                className="group-hover:-translate-x-1 transition-transform"
              />
              Todos los servicios
            </Link>
          </motion.div>

          {/* Category badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6"
          >
            <span className="inline-block bg-background/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 text-secondary text-xs font-headline font-bold uppercase tracking-widest">
              {service.category}
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-headline text-5xl md:text-8xl font-extrabold tracking-tighter text-white leading-tight max-w-3xl mb-6"
          >
            {service.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-on-surface-variant text-lg md:text-xl font-light max-w-xl mb-14 leading-relaxed"
          >
            {service.subtitle}
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap items-center gap-y-6 mb-14"
          >
            {service.stats.map((stat, i) => (
              <div key={i} className="flex items-center">
                {i > 0 && (
                  <div className="w-px h-10 bg-white/10 mx-6 hidden sm:block" />
                )}
                <div>
                  <p className="text-secondary text-3xl font-headline font-bold leading-none">
                    {stat.value}
                  </p>
                  <p className="text-on-surface-variant text-xs uppercase tracking-widest mt-1">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-white text-background font-headline font-bold text-sm px-7 py-3.5 rounded-full hover:bg-secondary transition-colors"
            >
              Pedir cita
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 border border-white/10 text-on-surface-variant font-headline text-sm px-7 py-3.5 rounded-full hover:border-white/30 hover:text-white transition-all"
            >
              Ver todos los servicios
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <ChevronDown
            size={20}
            className="text-on-surface-variant animate-bounce"
          />
        </div>
      </section>

      {/* ── 2. OVERVIEW ─────────────────────────────────────────────── */}
      <section className="py-32 bg-surface-lowest">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Left */}
            <div>
              <motion.p
                {...fadeUp}
                transition={{ duration: 0.6 }}
                className="text-xs uppercase tracking-[0.3em] text-secondary font-headline font-bold mb-6"
              >
                Sobre este tratamiento
              </motion.p>

              <motion.p
                {...fadeUp}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-on-surface-variant leading-relaxed text-lg font-light mb-12"
              >
                {service.overview}
              </motion.p>

              <motion.div
                {...fadeUp}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <p className="text-white font-headline font-bold text-sm uppercase tracking-widest mb-6">
                  Indicado para:
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.conditions.map((condition, i) => (
                    <span
                      key={i}
                      className="border border-white/10 px-4 py-2 rounded-full text-xs text-on-surface-variant hover:border-secondary/40 hover:text-white transition-all cursor-default"
                    >
                      {condition}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right: image + floating stat card */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden border border-white/10 aspect-[4/3]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* Floating stat card */}
              <div className="glass-card absolute -bottom-6 -left-6 rounded-2xl p-6 max-w-[200px]">
                <p className="text-secondary text-3xl font-headline font-bold leading-none">
                  {service.stats[1].value}
                </p>
                <p className="text-on-surface-variant text-xs uppercase tracking-widest mt-2">
                  {service.stats[1].label}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 3. BENEFITS ─────────────────────────────────────────────── */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Header */}
          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="mb-20">
            <p className="text-xs uppercase tracking-[0.3em] text-secondary font-headline font-bold mb-4">
              Beneficios
            </p>
            <h2 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tighter text-white">
              Por qué elegir
              <br />
              este tratamiento
            </h2>
          </motion.div>

          {/* Benefits grid — border grid technique */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {service.benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="bg-background p-10 group"
              >
                <p className="text-secondary/30 font-headline text-6xl font-bold leading-none mb-6 select-none">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-white font-headline text-xl font-bold mb-3 group-hover:text-secondary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-on-surface-variant font-light leading-relaxed text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. PROCESS ──────────────────────────────────────────────── */}
      <section className="py-32 bg-surface-lowest">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Header */}
            <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
              <p className="text-xs uppercase tracking-[0.3em] text-secondary font-headline font-bold mb-4">
                Proceso
              </p>
              <h2 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tighter text-white leading-tight">
                Así es
                <br />
                tu visita
              </h2>
              <p className="text-on-surface-variant font-light mt-6 leading-relaxed max-w-sm">
                Cada paso está diseñado para que te sientas acompañado, informado y seguro durante todo el proceso.
              </p>
            </motion.div>

            {/* Steps */}
            <div className="relative">
              {/* Vertical dashed line */}
              <div className="absolute left-6 top-0 bottom-0 w-px border-l border-dashed border-white/10 -translate-x-1/2" />

              <div className="space-y-10">
                {service.process.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="flex gap-8 relative"
                  >
                    {/* Step circle */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-secondary/30 flex items-center justify-center bg-surface-lowest z-10">
                      <span className="text-secondary font-mono text-xs font-bold">
                        {step.step}
                      </span>
                    </div>

                    {/* Step content */}
                    <div className="pt-2 pb-4">
                      <h3 className="text-white font-headline font-bold text-xl mb-2">
                        {step.title}
                      </h3>
                      <p className="text-on-surface-variant font-light leading-relaxed text-sm">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. FAQ ──────────────────────────────────────────────────── */}
      <section className="py-32 bg-background">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-secondary font-headline font-bold mb-4">
              FAQ
            </p>
            <h2 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tighter text-white">
              Preguntas frecuentes
            </h2>
          </motion.div>

          <div className="space-y-0 divide-y divide-white/5">
            {service.faq.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-7 text-left gap-6 group"
                  aria-expanded={openFaq === i}
                >
                  <span className="font-headline font-bold text-white group-hover:text-secondary transition-colors text-lg leading-snug">
                    {item.question}
                  </span>
                  <span className="flex-shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-on-surface-variant group-hover:border-secondary/40 group-hover:text-secondary transition-all">
                    {openFaq === i ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-on-surface-variant font-light leading-relaxed pb-7 text-base">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. CTA ──────────────────────────────────────────────────── */}
      <section className="py-32 bg-surface-lowest">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Main CTA card */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7 }}
            className="glass-card rounded-3xl p-12 md:p-20 text-center mb-20"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-secondary font-headline font-bold mb-6">
              Empieza hoy
            </p>
            <h2 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tighter text-white mb-6 leading-tight">
              Reserva tu sesión
            </h2>
            <p className="text-on-surface-variant font-light text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Nuestro equipo te acompañará desde el diagnóstico hasta la recuperación completa. Da el primer paso hoy.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 bg-white text-background font-headline font-bold text-sm px-8 py-4 rounded-full hover:bg-secondary transition-colors"
              >
                Pedir cita
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/tarifas"
                className="inline-flex items-center gap-2 border border-white/10 text-on-surface-variant font-headline text-sm px-8 py-4 rounded-full hover:border-white/30 hover:text-white transition-all"
              >
                Ver tarifas
              </Link>
            </div>
          </motion.div>

          {/* Related services */}
          {relatedServiceData.length > 0 && (
            <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.15 }}>
              <p className="text-xs uppercase tracking-[0.3em] text-secondary font-headline font-bold mb-8 text-center">
                Servicios relacionados
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {relatedServiceData.map((related, i) => (
                  <motion.div
                    key={related.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <Link
                      href={`/servicios/${related.slug}`}
                      className="group glass-card rounded-2xl p-6 flex items-center justify-between hover:border-white/10 hover:bg-surface/60 transition-all block"
                    >
                      <div>
                        <p className="text-secondary/40 font-mono text-xs mb-2">
                          {related.number}
                        </p>
                        <h3 className="text-white font-headline font-bold text-base group-hover:text-secondary transition-colors">
                          {related.title}
                        </h3>
                        <p className="text-on-surface-variant text-xs mt-1">
                          {related.category}
                        </p>
                      </div>
                      <ArrowRight
                        size={16}
                        className="text-on-surface-variant group-hover:text-secondary group-hover:translate-x-1 transition-all flex-shrink-0 ml-4"
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
}
