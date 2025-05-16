
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Leaf, Recycle, ShoppingBag, Users, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const HomePage = () => {
  const features = [
    {
      icon: <Leaf className="h-10 w-10 text-mint-green" />,
      title: 'Plantas Únicas y Comunes',
      description: 'Descubre nuestra selección de plantas exóticas, raras y las favoritas de siempre para tu hogar y jardín.',
      link: '/tienda',
      linkText: 'Ver Plantas'
    },
    {
      icon: <Recycle className="h-10 w-10 text-sage-green" />,
      title: 'Abono Orgánico y Sostenibilidad',
      description: 'Nutre tus plantas con nuestro abono 100% orgánico y aprende sobre prácticas de jardinería sostenible.',
      link: '/tienda',
      linkText: 'Comprar Abono'
    },
    {
      icon: <ShoppingBag className="h-10 w-10 text-light-brown" />,
      title: 'Consejos de Expertos y DIY',
      description: 'Te enseñamos a cuidar tus plantas y a crear macetas únicas con materiales reciclados. ¡Inspírate!',
      link: '/consejos-diy',
      linkText: 'Leer Consejos'
    },
  ];

  const testimonials = [
    {
      quote: "¡Las plantas llegaron en perfecto estado! Y el abono orgánico ha hecho maravillas en mi huerto.",
      name: "Ana R.",
      avatarText: "AR"
    },
    {
      quote: "Me encantaron los talleres de macetas recicladas. Aprendí muchísimo y ahora mi balcón luce increíble.",
      name: "Carlos G.",
      avatarText: "CG"
    },
    {
      quote: "LaMacetita.cl es mi lugar favorito para encontrar plantas raras. ¡Siempre tienen algo nuevo y emocionante!",
      name: "Sofía L.",
      avatarText: "SL"
    }
  ];

  return (
    <div className="space-y-16">
      <motion.section 
        className="relative text-center py-20 md:py-32 bg-gradient-to-br from-mint-green/70 via-sage-green/70 to-cream-white rounded-xl overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 z-0">
          <img  
            alt="Fondo de hojas verdes y flores delicadas" 
            class="w-full h-full object-cover opacity-30"
           src="https://images.unsplash.com/photo-1670398113180-3abab34c39ea" />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <motion.h1 
            className="text-5xl md:text-7xl font-display font-bold text-dark-green mb-6"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Bienvenido a <span className="gradient-text">LaMacetita.cl</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-dark-green/80 mb-10 max-w-3xl mx-auto"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Tu espacio para cultivar vida, belleza y sostenibilidad. Encuentra plantas únicas, abono orgánico y la inspiración que necesitas para tu huerto y jardín.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Button asChild size="lg" className="bg-dark-green hover:bg-dark-green/90 text-white text-lg px-10 py-6 rounded-lg shadow-lg transition-transform hover:scale-105">
              <Link to="/tienda">Explorar Tienda</Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-semibold text-center text-dark-green mb-12">Descubre lo que <span className="gradient-text">LaMacetita.cl</span> tiene para ti</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
              >
                <Card className="h-full flex flex-col bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden transform hover:-translate-y-1">
                  <CardHeader className="items-center text-center bg-gradient-to-br from-mint-green/20 to-sage-green/20 p-6">
                    <div className="p-4 bg-white rounded-full shadow-md mb-4">{feature.icon}</div>
                    <CardTitle className="text-2xl font-semibold text-dark-green">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow p-6 text-center">
                    <CardDescription className="text-dark-green/80 mb-6">{feature.description}</CardDescription>
                    <Button asChild variant="outline" className="border-mint-green text-mint-green hover:bg-mint-green hover:text-white transition-colors">
                      <Link to={feature.link}>{feature.linkText}</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-sage-green/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <img  
                alt="Dueña de LaMacetita.cl sonriendo y sosteniendo una planta" 
                class="rounded-lg shadow-2xl w-full h-auto object-cover max-h-[500px]"
               src="https://images.unsplash.com/photo-1542968774-34a80a885af8" />
            </motion.div>
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h2 className="text-4xl font-display font-semibold text-dark-green mb-6">Nuestra Filosofía: <span className="gradient-text">Verde y Consciente</span></h2>
              <p className="text-lg text-dark-green/80 mb-4">
                En LaMacetita.cl, creemos en el poder de la naturaleza para transformar espacios y vidas. Nuestra pasión es cultivar no solo plantas, sino también una comunidad consciente del medio ambiente.
              </p>
              <p className="text-lg text-dark-green/80 mb-6">
                Fomentamos el reciclaje creativo, el uso de abonos orgánicos y el cuidado respetuoso de cada ser vivo. Queremos ayudarte a crear tu propio oasis verde, sin importar el tamaño de tu espacio.
              </p>
              <Button asChild className="bg-mint-green hover:bg-mint-green/90 text-white">
                <Link to="/sobre-nosotros">Conoce Nuestra Historia</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-semibold text-center text-dark-green mb-12">Lo que dicen <span className="gradient-text">nuestros clientes</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15 * index, duration: 0.5 }}
              >
                <Card className="bg-white shadow-lg rounded-lg overflow-hidden h-full flex flex-col">
                  <CardContent className="p-6 flex-grow flex flex-col items-center text-center">
                    <MessageCircle className="h-8 w-8 text-mint-green mb-4" />
                    <p className="text-dark-green/80 italic mb-4 flex-grow">"{testimonial.quote}"</p>
                    <div className="flex items-center mt-auto">
                       <div className="w-10 h-10 rounded-full bg-sage-green text-white flex items-center justify-center font-semibold mr-3">
                         {testimonial.avatarText}
                       </div>
                      <p className="font-semibold text-dark-green">{testimonial.name}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-mint-green/20">
        <div className="container mx-auto px-4 text-center">
          <Users className="h-12 w-12 text-dark-green mx-auto mb-4" />
          <h2 className="text-4xl font-display font-semibold text-dark-green mb-6">Únete a nuestra <span className="gradient-text">Comunidad Verde</span></h2>
          <p className="text-xl text-dark-green/80 mb-8 max-w-2xl mx-auto">
            Síguenos en redes sociales, suscríbete a nuestro boletín para recibir tips ecológicos y comparte tu amor por las plantas.
          </p>
          <div className="flex justify-center space-x-6">
            <Button asChild className="bg-dark-green hover:bg-dark-green/90 text-white">
              <Link to="/contacto">Suscríbete</Link>
            </Button>
            <Button asChild variant="outline" className="border-dark-green text-dark-green hover:bg-dark-green hover:text-white">
              <a href="#" target="_blank" rel="noopener noreferrer">Ver Instagram</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
  