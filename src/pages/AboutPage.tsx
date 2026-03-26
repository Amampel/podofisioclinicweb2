import About from '../components/About';
import SEO from '../components/SEO';

export default function AboutPage() {
  return (
    <div className="animate-in slide-in-from-bottom-4 duration-700">
      <SEO 
        title="Sobre Nosotros | PODOFISIO CLINIC Terrassa"
        description="Conoce al equipo de expertos de PODOFISIO CLINIC. Especialistas en fisioterapia y podología con más de 15 años de experiencia en Terrassa."
      />
      <About />
    </div>
  );
}
