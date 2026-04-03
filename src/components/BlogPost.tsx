"use client";
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Clock, Calendar, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import type { BlogPost } from '../lib/blog-data';
import { blogPosts } from '../lib/blog-data';

const toAnchor = (text: string) =>
  text.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, '')
    .trim().replace(/\s+/g, '-');

function renderInlineLinks(text: string) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    const match = part.match(/\[([^\]]+)\]\(([^)]+)\)/);
    if (match) {
      const [, label, href] = match;
      if (href.startsWith('/')) {
        return (
          <Link
            key={i}
            href={href}
            className="text-secondary underline underline-offset-2 decoration-secondary/30 hover:decoration-secondary transition-all"
          >
            {label}
          </Link>
        );
      }
      return (
        <a
          key={i}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary underline underline-offset-2 decoration-secondary/30 hover:decoration-secondary transition-all"
        >
          {label}
        </a>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export default function BlogPostComponent({ post }: { post: BlogPost }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState<string>('');
  const contentRef = useRef<HTMLDivElement>(null);

  // Reading progress bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // TOC active section via IntersectionObserver
  const h2Blocks = post.content.filter(b => b.type === 'h2');

  useEffect(() => {
    if (h2Blocks.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    );
    h2Blocks.forEach((block) => {
      if (block.type === 'h2') {
        const el = document.getElementById(toAnchor(block.content));
        if (el) observer.observe(el);
      }
    });
    return () => observer.disconnect();
  }, [post.slug]);

  // Related posts
  const related = blogPosts
    .filter(p => p.slug !== post.slug)
    .sort((a, b) => (a.category === post.category ? -1 : 0) - (b.category === post.category ? -1 : 0))
    .slice(0, 3);

  // Extract lead text from first paragraph
  const firstParagraph = post.content.find(b => b.type === 'p');
  const leadText = firstParagraph && firstParagraph.type === 'p'
    ? firstParagraph.content.slice(0, 120) + '…'
    : '';

  // Pre-compute H2 list for numbering during render
  const h2List = post.content.filter(b => b.type === 'h2');

  // Render content blocks with h2 index tracker
  let h2Counter = 0;

  return (
    <article>
      {/* Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 z-[100] h-[2px] bg-secondary transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* ─── HERO ─── */}
      <div className="relative overflow-hidden bg-surface-lowest min-h-[65vh] md:min-h-[75vh] flex flex-col justify-end">
        {/* Full-bleed image */}
        <div className="absolute inset-0 z-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover opacity-20 grayscale scale-110"
            referrerPolicy="no-referrer"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          {/* Subtle dot grid */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'radial-gradient(circle, #c6c6cb 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        {/* Hero content */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-8 pb-20 pt-40">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Back link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-on-surface-variant hover:text-white transition-colors text-xs font-bold uppercase tracking-widest mb-10 group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform duration-200" />
              Blog
            </Link>

            {/* Category badge */}
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 bg-background/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 text-[10px] font-bold uppercase tracking-widest text-secondary">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-white leading-[0.95] mb-8 max-w-3xl">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-5 text-on-surface-variant text-xs font-label uppercase tracking-widest mb-8">
              <span className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-secondary" />
                {post.date}
              </span>
              <span className="w-px h-4 bg-white/10" />
              <span className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-secondary" />
                {post.readTime} de lectura
              </span>
              <span className="w-px h-4 bg-white/10" />
              <span>{post.author}</span>
            </div>

            {/* Lead excerpt */}
            {leadText && (
              <p className="text-on-surface-variant/70 font-light text-base md:text-lg leading-relaxed max-w-2xl border-l border-secondary/20 pl-5">
                {leadText}
              </p>
            )}
          </motion.div>
        </div>
      </div>

      {/* ─── MAIN CONTENT ─── */}
      <div className="bg-background">
        <div className="max-w-6xl mx-auto px-8 py-16">

          {/* Two-column grid: content + TOC */}
          <div className="lg:grid lg:grid-cols-[1fr_260px] lg:gap-16 xl:gap-24">

            {/* LEFT: Article content */}
            <motion.div
              ref={contentRef}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-0 min-w-0"
            >
              {post.content.map((block, index) => {
                if (block.type === 'h2') {
                  const currentIndex = h2Counter;
                  h2Counter++;
                  return (
                    <div
                      key={index}
                      id={toAnchor(block.content)}
                      className="scroll-mt-28 pt-14 first:pt-0"
                    >
                      <div className="flex items-baseline gap-4 mb-6">
                        <span className="font-mono text-[10px] text-secondary/40 tracking-widest flex-shrink-0">
                          {String(currentIndex + 1).padStart(2, '0')} /
                        </span>
                        <h2 className="font-headline text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight">
                          {block.content}
                        </h2>
                      </div>
                    </div>
                  );
                }

                if (block.type === 'h3') {
                  return (
                    <h3
                      key={index}
                      className="font-headline text-lg md:text-xl font-bold text-white tracking-tight mt-8 mb-4 pl-6 border-l border-secondary/30"
                    >
                      {block.content}
                    </h3>
                  );
                }

                if (block.type === 'p') {
                  return (
                    <p
                      key={index}
                      className="text-on-surface-variant font-light leading-relaxed text-base md:text-lg mb-6"
                    >
                      {renderInlineLinks(block.content)}
                    </p>
                  );
                }

                if (block.type === 'ul') {
                  return (
                    <ul key={index} className="space-y-3 mb-6 mt-2">
                      {block.items.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-on-surface-variant font-light leading-relaxed text-base"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0 mt-2.5" />
                          <span>{renderInlineLinks(item)}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }

                if (block.type === 'callout') {
                  return (
                    <div key={index} className="my-10 relative">
                      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-secondary to-transparent" />
                      <div className="pl-8">
                        <span className="font-mono text-[9px] text-secondary uppercase tracking-[0.3em] block mb-3">
                          — Nota clínica
                        </span>
                        <p className="font-headline text-lg md:text-xl text-white font-light leading-relaxed italic">
                          {renderInlineLinks(block.content)}
                        </p>
                      </div>
                    </div>
                  );
                }

                return null;
              })}
            </motion.div>

            {/* RIGHT: Sticky Table of Contents */}
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <div className="mb-6">
                  <span className="font-mono text-[9px] text-secondary uppercase tracking-[0.3em]">
                    CONTENIDO
                  </span>
                </div>
                <nav className="space-y-1">
                  {h2List.map((block, idx) => {
                    if (block.type !== 'h2') return null;
                    const anchor = toAnchor(block.content);
                    const isActive = activeSection === anchor;
                    return (
                      <a
                        key={idx}
                        href={`#${anchor}`}
                        className={`flex items-start gap-3 py-1.5 text-xs leading-snug transition-all duration-200 group ${
                          isActive
                            ? 'text-white'
                            : 'text-on-surface-variant/60 hover:text-white/60'
                        }`}
                      >
                        <span
                          className={`w-1 h-1 rounded-full flex-shrink-0 mt-1.5 transition-all duration-200 ${
                            isActive ? 'bg-secondary scale-125' : 'bg-white/20 group-hover:bg-white/40'
                          }`}
                        />
                        <span>{block.content}</span>
                      </a>
                    );
                  })}
                </nav>

                {/* Decorative line */}
                <div className="mt-10 h-px bg-gradient-to-r from-secondary/20 to-transparent" />

                {/* Quick CTA in sidebar */}
                <div className="mt-8 p-5 rounded-2xl border border-white/5 bg-surface/20 backdrop-blur-sm">
                  <p className="text-xs text-on-surface-variant/60 leading-relaxed mb-4 font-light">
                    ¿Tienes estos síntomas? Nuestros especialistas te ayudan.
                  </p>
                  <Link
                    href="/contacto"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:text-secondary transition-colors group"
                  >
                    Pedir cita
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>

          {/* ─── RELATED POSTS ─── */}
          <div className="mt-24">
            <div className="flex items-center gap-4 mb-8">
              <span className="font-mono text-[9px] text-secondary uppercase tracking-[0.3em]">
                TAMBIÉN TE PUEDE INTERESAR
              </span>
              <div className="flex-1 h-px bg-white/5" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {related.map((relPost) => (
                <Link
                  key={relPost.slug}
                  href={`/blog/${relPost.slug}`}
                  className="glass-card rounded-2xl p-6 border border-white/5 hover:border-secondary/20 transition-all group block"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-secondary/70">
                      {relPost.category}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-on-surface-variant/30 group-hover:text-secondary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
                  </div>
                  <h3 className="font-headline text-sm font-bold text-white leading-snug group-hover:text-secondary transition-colors">
                    {relPost.title}
                  </h3>
                  <p className="text-on-surface-variant/50 text-xs mt-2 leading-relaxed line-clamp-2">
                    {relPost.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* ─── GRADIENT SEPARATOR ─── */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

          {/* ─── CTA ─── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-white/5 p-12 md:p-16 text-center"
            style={{
              background:
                'radial-gradient(ellipse at 70% 50%, rgba(198,198,203,0.06) 0%, transparent 60%), #1f1f1f40',
            }}
          >
            {/* Ambient glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none -z-10 translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/3 rounded-full blur-[80px] pointer-events-none -z-10 -translate-x-1/3 translate-y-1/3" />

            <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-secondary block mb-6">
              Podofisio Clinic · Terrassa
            </span>
            <h2 className="font-headline text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tighter leading-[0.95]">
              ¿Tienes estos síntomas?
            </h2>
            <p className="text-on-surface-variant font-light leading-relaxed max-w-lg mx-auto mb-10 text-base md:text-lg">
              Nuestros especialistas en podología y fisioterapia en Terrassa pueden ayudarte. Diagnóstico ecográfico y tratamiento personalizado desde la primera visita.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacto"
                className="bg-white text-background px-10 py-4 rounded-xl font-headline font-extrabold uppercase tracking-widest text-xs hover:bg-secondary transition-all inline-flex items-center justify-center gap-3 group"
              >
                Pedir cita
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link
                href="/servicios"
                className="border border-white/10 text-white px-10 py-4 rounded-xl font-headline font-extrabold uppercase tracking-widest text-xs hover:bg-white/5 transition-all inline-flex items-center justify-center"
              >
                Ver tratamientos
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </article>
  );
}
