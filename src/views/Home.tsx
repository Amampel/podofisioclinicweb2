"use client";
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ShieldCheck, Microscope, Activity, Footprints, Zap, Scissors, Bone, Dumbbell, ArrowLeftRight, Plus, Minus } from 'lucide-react';
import Link from "next/link";
import { useState } from 'react';
import Hero from '../components/Hero';
import SEO from '../components/SEO';

const stats = [
  { label: 'Años de Experiencia', value: '15+' },
  { label: 'Pacientes Satisfechos', value: '10k+' },
  { label: 'Tecnologías Propias', value: '8' },
  { label: 'Especialistas', value: '6' },
];

const conditions = [
  {
    icon: Footprints,
    title: 'Fascitis Plantar',
    description: 'Dolor en la planta del pie al levantarte por la mañana. Una de las patologías más frecuentes en Terrassa.',
  },
  {
    icon: Zap,
    title: 'Tendinopatía de Aquiles',
    description: 'Inflamación y dolor crónico en el tendón de Aquiles por sobrecarga deportiva o biomecánica alterada.',
  },
  {
    icon: Scissors,
    title: 'Uñas Encarnadas',
    description: 'Resolución definitiva mediante cirugía ungueal ambulatoria con mínima recuperación y sin recaídas.',
  },
  {
    icon: Bone,
    title: 'Espolón Calcáneo',
    description: 'Crecimiento óseo en el talón que provoca dolor intenso al apoyar. Tratamiento conservador o quirúrgico.',
  },
  {
    icon: Dumbbell,
    title: 'Lesiones Deportivas',
    description: 'Esguinces, sobrecargas y roturas fibrilares en extremidad inferior tratadas con fisioterapia invasiva.',
  },
  {
    icon: ArrowLeftRight,
    title: 'Hallux Valgus',
    description: 'Tratamiento conservador y quirúrgico de los juanetes para recuperar la función y eliminar el dolor.',
  },
  {
    icon: Activity,
    title: 'Metatarsalgia',
    description: 'Dolor en la zona delantera del pie al caminar o hacer deporte, corregible con plantillas personalizadas.',
  },
  {
    icon: Microscope,
    title: 'Condromalacia Rotuliana',
    description: 'Desgaste del cartílago patelar que causa dolor en la rodilla, tratable con fisioterapia y biomecánica.',
  },
];

const faqs = [
  {
    question: '¿Cuándo debo ir al podólogo?',
    answer: 'Debes visitar al podólogo si tienes dolor en los pies, uñas encarnadas, durezas o callosidades, cambios en la forma del pie o si practicas deporte regularmente. También es recomendable una revisión anual preventiva, especialmente si tienes diabetes o problemas circulatorios.',
  },
  {
    question: '¿Para qué sirven las plantillas ortopédicas personalizadas?',
    answer: 'Las plantillas ortopédicas personalizadas corrigen la pisada, distribuyen mejor las cargas y alivian el dolor en pies, rodillas, caderas y espalda. En Podofisio Clinic las fabricamos mediante escáner 3D e impresión aditiva para una adaptación perfecta a tu pie y actividad.',
  },
  {
    question: '¿Qué es la fascitis plantar y cómo se trata?',
    answer: 'La fascitis plantar es la inflamación de la fascia plantar, el tejido que une el talón con los dedos. Provoca un dolor intenso en el talón especialmente al dar los primeros pasos por la mañana. En Podofisio Clinic la tratamos con EPI/EPTE guiada por ecografía, radiofrecuencia Indiba, plantillas personalizadas y corrección biomecánica.',
  },
  {
    question: '¿Cuándo debo acudir al fisioterapeuta?',
    answer: 'Es recomendable visitar al fisioterapeuta ante cualquier dolor muscular o articular que persista más de 72 horas, tras una lesión deportiva, para recuperarte de una cirugía o de forma preventiva si tienes sobrecarga por trabajo físico o sedentarismo. Cuanto antes acudas, más rápida es la recuperación.',
  },
  {
    question: '¿Qué es el estudio biomecánico de la pisada?',
    answer: 'El estudio biomecánico es un análisis computerizado de cómo pisas y caminas usando plataformas de presiones y sensores inerciales. Detectamos desequilibrios que causan dolor en pies, rodillas, caderas o espalda y obtenemos los datos para fabricar tus plantillas 3D personalizadas.',
  },
  {
    question: '¿Dónde está Podofisio Clinic en Terrassa?',
    answer: 'Estamos en el Carrer de la Salut, 42, 08221 Terrassa (Barcelona). Atendemos de lunes a jueves de 9h a 20h y los viernes de 9h a 18h. También atendemos pacientes de Rubí, Sant Cugat del Vallès, Sabadell y el Vallès Occidental.',
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="animate-in fade-in duration-700">
      <SEO
        title="Podofisio Clinic Terrassa | Especialistas en Extremidad Inferior"
        description="Clínica en Terrassa especializada en fisioterapia invasiva y podología para la extremidad inferior. Biomecánica digital y recuperación avanzada."
      />
      <Hero />

      {/* Philosophy Section */}
      <section className="py-32 bg-surface-lowest border-y border-white/5">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="font-label text-xs uppercase tracking-[0.4em] text-secondary block mb-4">Nuestra Filosofía</span>
              <h2 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-white mb-8 leading-tight">
                Ciencia, <span className="text-secondary">Tecnología</span> y Humanidad.
              </h2>
              <p className="text-on-surface-variant text-lg font-light leading-relaxed mb-10">
                En Podofisio Clinic entendemos que cada paso cuenta. No solo tratamos el pie, sino la biomecánica completa de tu cuerpo. Nuestro enfoque multidisciplinar combina la podología deportiva con la fisioterapia avanzada para garantizar una recuperación real y duradera.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="text-secondary w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Garantía Clínica</h4>
                    <p className="text-on-surface-variant text-sm font-light">Protocolos basados en la última evidencia científica.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Microscope className="text-secondary w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Alta Tecnología</h4>
                    <p className="text-on-surface-variant text-sm font-light">Equipamiento de diagnóstico por imagen de última generación.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop"
                  alt="Clinical Excellence"
                  className="w-full h-full object-cover grayscale opacity-60 hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 glass-card p-10 rounded-2xl border border-secondary/20 hidden md:block">
                <p className="text-secondary font-headline text-6xl font-extrabold tracking-tighter mb-2">98%</p>
                <p className="text-white text-sm font-light uppercase tracking-widest">Éxito en tratamientos crónicos</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Patologías Section */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="font-label text-xs uppercase tracking-[0.4em] text-secondary block mb-4">Patologías que Tratamos</span>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <h2 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-white leading-tight">
                ¿Sufres alguno de <br className="hidden md:block" /><span className="text-secondary">estos problemas?</span>
              </h2>
              <p className="text-on-surface-variant font-light leading-relaxed max-w-sm md:text-right">
                Tratamos las patologías más comunes del pie, tobillo y extremidad inferior con tecnología de vanguardia en Terrassa.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {conditions.map((condition, index) => (
              <motion.div
                key={`condition-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.07, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Link
                  href="/servicios"
                  className="glass-card rounded-2xl p-6 border border-white/5 group hover:border-secondary/30 transition-all duration-300 flex flex-col gap-4 h-full block"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-secondary/10 group-hover:border-secondary/30 transition-all duration-300 flex-shrink-0">
                    <condition.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-white text-base mb-2 group-hover:text-secondary transition-colors duration-300">{condition.title}</h3>
                    <p className="text-on-surface-variant text-xs font-light leading-relaxed">{condition.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background border-t border-white/5">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={`stat-${index}-${stat.label}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-secondary font-headline text-5xl font-extrabold mb-2">{stat.value}</p>
                <p className="text-on-surface-variant text-xs uppercase tracking-widest font-bold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Services CTA */}
      <section className="py-32 bg-surface-lowest">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-8 text-center"
        >
          <h2 className="font-headline text-4xl md:text-6xl font-bold text-white mb-12 tracking-tight">
            ¿Listo para volver a <span className="text-secondary">moverte sin dolor?</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/servicios"
              className="bg-white text-background px-12 py-5 rounded-xl font-headline font-extrabold uppercase tracking-widest text-xs hover:bg-secondary transition-all flex items-center justify-center gap-3"
            >
              Explorar Servicios <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contacto"
              className="border border-white/10 text-white px-12 py-5 rounded-xl font-headline font-extrabold uppercase tracking-widest text-xs hover:bg-white/5 transition-all"
            >
              Reservar Cita
            </Link>
          </div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-background border-t border-white/5">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <span className="font-label text-xs uppercase tracking-[0.4em] text-secondary block mb-4">FAQ</span>
            <h2 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-white leading-tight">
              Preguntas <span className="text-secondary">frecuentes.</span>
            </h2>
          </motion.div>

          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <motion.div
                key={`faq-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
                className="border-b border-white/10"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex justify-between items-center py-7 text-left gap-6 group"
                >
                  <span className="font-headline font-bold text-white text-lg md:text-xl group-hover:text-secondary transition-colors duration-300">
                    {faq.question}
                  </span>
                  <span className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-secondary/50 group-hover:bg-secondary/10 transition-all duration-300">
                    {openFaq === index
                      ? <Minus className="w-4 h-4 text-secondary" />
                      : <Plus className="w-4 h-4 text-on-surface-variant group-hover:text-secondary transition-colors duration-300" />
                    }
                  </span>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="text-on-surface-variant font-light leading-relaxed pb-8 text-base max-w-3xl">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Link
              href="/contacto"
              className="inline-flex items-center gap-3 bg-white text-background px-10 py-4 rounded-xl font-headline font-extrabold uppercase tracking-widest text-xs hover:bg-secondary transition-all"
            >
              ¿Más dudas? Contáctanos <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
