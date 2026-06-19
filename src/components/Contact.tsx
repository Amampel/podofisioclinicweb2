"use client";
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, MessageCircle, Check } from 'lucide-react';

export default function Contact() {

  return (
    <section className="py-32 bg-surface-lowest">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >
          <span className="font-label text-xs uppercase tracking-[0.4em] text-on-surface-variant block mb-4">Atención Personalizada</span>
          <h2 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-white mb-8 leading-tight">Conecta con la <span className="text-secondary">Excelencia.</span></h2>
          <p className="max-w-3xl mx-auto text-on-surface-variant text-lg font-light leading-relaxed">
            Estamos ubicados en el corazón de Terrassa, listos para ofrecerte el mejor cuidado para tus pies y extremidad inferior. Reserva tu cita o consúltanos cualquier duda.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="p-10 rounded-2xl glass-card border border-white/5 space-y-10"
            >
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-all">
                  <MapPin className="text-secondary w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-headline font-bold text-white mb-2 text-xl">Ubicación</h3>
                  <p className="text-on-surface-variant text-base leading-relaxed font-light">Plaça de Mossèn Jacint Verdaguer, 1<br />08221 Terrassa, Barcelona</p>
                </div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-all">
                  <Phone className="text-secondary w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-headline font-bold text-white mb-2 text-xl">Teléfono</h3>
                  <p className="text-on-surface-variant text-base font-light">+34 624 57 87 54</p>
                  <p className="text-secondary text-xs font-bold mt-1 uppercase tracking-widest">Atención WhatsApp disponible</p>
                </div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-all">
                  <Mail className="text-secondary w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-headline font-bold text-white mb-2 text-xl">Email</h3>
                  <p className="text-on-surface-variant text-base font-light">podofisioclinic@gmail.com</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-10 rounded-2xl glass-card border border-white/5"
            >
              <h3 className="font-headline font-bold text-white mb-8 text-xl flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" /> Horario de Clínica
              </h3>
              <div className="space-y-4">
                {[
                  { day: 'Lunes - Jueves', hours: '09:00 - 20:00' },
                  { day: 'Viernes', hours: '09:00 - 18:00' },
                  { day: 'Sábado', hours: 'Cerrado' },
                  { day: 'Domingo', hours: 'Cerrado' }
                ].map((item, idx) => (
                  <div key={`hours-${idx}-${item.day}`} className="flex justify-between items-center text-sm">
                    <span className="text-on-surface-variant font-light">{item.day}</span>
                    <span className="text-white font-bold">{item.hours}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="relative h-[350px] w-full rounded-2xl overflow-hidden glass-card border border-white/5">
                <iframe
                  title="Ubicación Podofisio Clinic — Plaça de Mossèn Jacint Verdaguer, 1, Terrassa"
                  src="https://www.google.com/maps?q=Pla%C3%A7a+de+Mossen+Jacint+Verdaguer+1+08221+Terrassa&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Pla%C3%A7a+de+Mossen+Jacint+Verdaguer+1+Terrassa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white/5 backdrop-blur-md border border-white/10 text-white px-6 py-4 rounded-xl text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-secondary hover:text-background hover:border-secondary transition-all duration-500"
              >
                Cómo llegar <MapPin className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="p-12 rounded-2xl glass-card border border-white/5 relative flex flex-col justify-between h-full min-h-[500px]">
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-[#25D366]/40 to-transparent" />
              
              <div>
                <span className="font-label text-xs uppercase tracking-[0.3em] text-[#25D366] block mb-4 font-bold">Reserva al Instante</span>
                <h3 className="font-headline text-3xl md:text-4xl font-extrabold text-white mb-6">Solicitud de Cita</h3>
                <p className="text-on-surface-variant font-light text-base leading-relaxed mb-8">
                  Para ofrecerte una atención más ágil y personalizada, gestionamos todas nuestras citas y consultas de forma directa a través de WhatsApp. Escríbenos y nuestro equipo te atenderá de inmediato.
                </p>
                
                <div className="space-y-4 mb-10">
                  {[
                    'Reserva tu cita para podología o fisioterapia en segundos',
                    'Consulta disponibilidad y horarios en tiempo real',
                    'Resuelve cualquier duda sobre nuestros tratamientos',
                    'Envío directo de informes, pruebas médicas o ecografías'
                  ].map((benefit, idx) => (
                    <div key={`benefit-${idx}`} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#25D366]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="text-[#25D366] w-3 h-3" />
                      </div>
                      <span className="text-on-surface-variant text-sm font-light">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <a
                  href="https://wa.me/34624578754?text=%C2%A1Hola!%20%F0%9F%91%8B%20He%20visto%20vuestra%20web%20y%20me%20gustar%C3%ADa%20solicitar%20informaci%C3%B3n%20sobre%20vuestros%20servicios%20de%20podolog%C3%ADa%20y%20fisioterapia.%20%C2%BFPodr%C3%ADais%20ayudarme%3F%20Gracias."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-5 rounded-xl font-headline font-extrabold uppercase tracking-[0.2em] text-xs transition-all active:scale-[0.98] flex items-center justify-center gap-3 shadow-lg shadow-[#25D366]/20 group"
                >
                  Contactar por WhatsApp
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>

                <p className="text-[10px] text-on-surface-variant text-center font-light leading-relaxed">
                  ¿Prefieres llamarnos? También puedes contactarnos por teléfono al{' '}
                  <a href="tel:+34624578754" className="text-white hover:text-[#25D366] font-bold transition-colors">
                    +34 624 57 87 54
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
