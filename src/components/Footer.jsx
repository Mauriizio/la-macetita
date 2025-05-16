
import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout, Instagram, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sage-green text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Sprout size={32} />
              <span className="text-xl font-display font-bold">LaMacetita.cl</span>
            </Link>
            <p className="text-sm">
              Amor por las plantas, pasión por el reciclaje.
              Encuentra abono orgánico, plantas únicas y consejos para tu huerto y jardín.
            </p>
          </div>

          <div>
            <p className="font-semibold text-lg mb-4">Enlaces Rápidos</p>
            <ul className="space-y-2 text-sm">
              <li><Link to="/sobre-nosotros" className="hover:underline">Sobre Nosotros</Link></li>
              <li><Link to="/tienda" className="hover:underline">Tienda</Link></li>
              <li><Link to="/consejos-diy" className="hover:underline">Consejos & DIY</Link></li>
              <li><Link to="/contacto" className="hover:underline">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-lg mb-4">Síguenos</p>
            <div className="flex space-x-4 mb-4">
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram de LaMacetita.cl" className="hover:text-cream-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook de LaMacetita.cl" className="hover:text-cream-white transition-colors">
                <Facebook size={24} />
              </a>
              <a href="mailto:contacto@lamacetita.cl" aria-label="Email de LaMacetita.cl" className="hover:text-cream-white transition-colors">
                <Mail size={24} />
              </a>
            </div>
            <p className="text-sm">Suscríbete a nuestro boletín para tips ecológicos.</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-cream-white/50 text-center text-sm">
          <p>&copy; {currentYear} LaMacetita.cl. Todos los derechos reservados.</p>
          <p>Diseñado con <span role="img" aria-label="corazón verde">💚</span> por Maurizio Caballero</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
  