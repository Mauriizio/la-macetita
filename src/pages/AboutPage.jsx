
import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Recycle, Heart } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="space-y-12">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center py-12 bg-gradient-to-r from-mint-green/30 to-sage-green/30 rounded-lg"
      >
        <h1 className="text-5xl font-display font-bold text-dark-green mb-4">Sobre <span className="gradient-text">LaMacetita.cl</span></h1>
        <p className="text-xl text-dark-green/80 max-w-2xl mx-auto">
          Cultivando un futuro más verde, una planta y una maceta reciclada a la vez.
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="grid md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <img  
            alt="Dueña de LaMacetita.cl trabajando en su huerto con dedicación" 
            class="rounded-lg shadow-xl w-full h-auto object-cover max-h-[600px]"
           src="https://images.unsplash.com/photo-1675894839708-408c3dd3c9c7" />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-display font-semibold text-dark-green">Nuestra Historia: Pasión por la Naturaleza</h2>
          <p className="text-lg text-dark-green/70">
            LaMacetita.cl nació del amor profundo de su dueña por el mundo vegetal y su firme convicción en la importancia de cuidar nuestro planeta. Lo que comenzó como un pequeño huerto personal, lleno de experimentos y aprendizaje, floreció en un espacio para compartir conocimientos, plantas únicas y una filosofía de vida sostenible.
          </p>
          <p className="text-lg text-dark-green/70">
            Cada planta que ofrecemos, cada consejo que compartimos, lleva consigo una historia de dedicación y respeto por los ciclos de la naturaleza. Queremos inspirarte a conectar con la tierra, a descubrir la alegría de ver crecer la vida y a embellecer tu entorno de manera consciente.
          </p>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="py-12 bg-white rounded-lg shadow-lg"
      >
        <h2 className="text-3xl font-display font-semibold text-dark-green text-center mb-10">Nuestros Valores <span className="gradient-text">Ecológicos</span></h2>
        <div className="grid md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
          <div className="flex flex-col items-center p-6">
            <Leaf className="h-12 w-12 text-mint-green mb-4" />
            <h3 className="text-xl font-semibold text-dark-green mb-2">Amor por las Plantas</h3>
            <p className="text-dark-green/70">
              Seleccionamos y cuidamos cada planta con esmero, ofreciendo tanto especies comunes como exóticas y raras para enriquecer tu colección.
            </p>
          </div>
          <div className="flex flex-col items-center p-6">
            <Recycle className="h-12 w-12 text-sage-green mb-4" />
            <h3 className="text-xl font-semibold text-dark-green mb-2">Filosofía de Reciclaje</h3>
            <p className="text-dark-green/70">
              Creemos en dar una segunda vida a los materiales. Promovemos la creación de macetas y elementos de jardín con objetos reciclados, fomentando la creatividad y reduciendo residuos.
            </p>
          </div>
          <div className="flex flex-col items-center p-6">
            <Heart className="h-12 w-12 text-light-brown mb-4" />
            <h3 className="text-xl font-semibold text-dark-green mb-2">Cuidado del Medio Ambiente</h3>
            <p className="text-dark-green/70">
              Fomentamos prácticas de jardinería sostenible, el uso de abono orgánico y el respeto por la biodiversidad. Pequeñas acciones pueden generar un gran impacto positivo.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="text-center py-10"
      >
        <h2 className="text-3xl font-display font-semibold text-dark-green mb-6">Únete a nuestra <span className="gradient-text">misión verde</span></h2>
        <p className="text-lg text-dark-green/70 max-w-xl mx-auto">
          Te invitamos a ser parte de la comunidad LaMacetita.cl. Juntos podemos hacer del mundo un lugar más verde, más bello y más consciente.
        </p>
      </motion.section>
    </div>
  );
};

export default AboutPage;
  