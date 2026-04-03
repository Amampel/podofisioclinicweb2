"use client";
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { blogPosts as posts } from '../lib/blog-data';

export default function Blog() {
  return (
    <section className="py-32 bg-surface-lowest">
      <div className="max-w-7xl mx-auto px-8">
        <motion.header 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >
          <span className="font-label text-xs uppercase tracking-[0.4em] text-on-surface-variant block mb-4">Divulgación Clínica</span>
          <h2 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter text-white mb-8 leading-tight">Conocimiento para tu <span className="text-secondary">Bienestar</span>.</h2>
          <p className="max-w-3xl mx-auto text-on-surface-variant text-lg font-light leading-relaxed">
            Explora nuestra biblioteca de recursos clínicos donde compartimos las últimas investigaciones, consejos de prevención y avances tecnológicos en podología y fisioterapia.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, index) => (
            <motion.article
              key={`blog-${index}-${post.title}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl overflow-hidden group border border-white/5 hover:border-secondary/20 transition-all duration-500 flex flex-col h-full cursor-pointer"
            >
            <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
              <div className="aspect-[16/10] overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 opacity-40 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-secondary">{post.category}</span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] text-on-surface-variant font-label uppercase tracking-widest">{post.date}</span>
                  <span className="text-[10px] text-on-surface-variant font-label uppercase tracking-widest">{post.readTime}</span>
                </div>
                <h3 className="text-2xl font-headline font-bold text-white mb-6 leading-tight group-hover:text-secondary transition-colors line-clamp-2">{post.title}</h3>
                <p className="text-sm text-on-surface-variant font-light leading-relaxed mb-8 line-clamp-3">{post.excerpt}</p>
                <div className="mt-auto">
                  <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-white group-hover:text-secondary transition-all">
                    Leer artículo completo <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-40 p-12 md:p-20 rounded-3xl glass-card border border-white/5 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10 -translate-y-1/2 translate-x-1/2" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="font-headline text-3xl md:text-5xl font-bold text-white mb-6 tracking-tighter">Únete a nuestra <span className="text-secondary">Comunidad Clínica</span>.</h3>
              <p className="text-on-surface-variant text-lg font-light leading-relaxed">
                Recibe mensualmente consejos de salud, ejercicios de prevención y las últimas novedades tecnológicas directamente en tu bandeja de entrada.
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="tu@email.com" 
                className="flex-grow bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-secondary transition-all"
              />
              <button className="bg-secondary text-background px-8 py-4 rounded-xl font-headline font-bold text-xs uppercase tracking-widest hover:bg-white transition-all">
                Suscribirme
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
