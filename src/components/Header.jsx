
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Sprout, ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cart } = useCart();
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const navItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Sobre Nosotros', path: '/sobre-nosotros' },
    { name: 'Tienda', path: '/tienda' },
    { name: 'Consejos & DIY', path: '/consejos-diy' },
    { name: 'Galería', path: '/galeria' },
    { name: 'Contacto', path: '/contacto' },
  ];

  const NavItem = ({ path, name }) => (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
          isActive ? 'bg-mint-green text-white' : 'text-dark-green hover:bg-sage-green/50 hover:text-white'
        }`
      }
      onClick={() => setIsMobileMenuOpen(false)}
    >
      {name}
    </NavLink>
  );

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2 text-dark-green hover:text-mint-green transition-colors">
            <Sprout size={36} className="text-mint-green" />
            <span className="text-2xl font-display font-bold">LaMacetita.cl</span>
          </Link>

          <nav className="hidden md:flex space-x-2">
            {navItems.map((item) => (
              <NavItem key={item.name} {...item} />
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Link to="/tienda?cart=open" className="relative text-dark-green hover:text-mint-green transition-colors">
              <ShoppingCart size={24} />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X size={24} className="text-dark-green" /> : <Menu size={24} className="text-dark-green" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white shadow-lg absolute w-full"
        >
          <nav className="flex flex-col space-y-1 px-2 pt-2 pb-3">
            {navItems.map((item) => (
              <NavItem key={item.name} {...item} />
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
  