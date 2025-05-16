
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Maximize } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const galleryItems = [
  { id: 1, srcKey: 'gallery_huerto_urbano.jpg', alt: 'Huerto urbano en balcones con variedad de vegetales', title: 'Huerto Urbano Creativo', description: 'Transformando pequeños espacios en oasis verdes llenos de vida y alimentos frescos.' },
  { id: 2, srcKey: 'gallery_macetas_recicladas.jpg', alt: 'Macetas coloridas hechas con latas y botellas recicladas', title: 'Macetas DIY con Estilo', description: 'Ideas originales para dar una segunda vida a materiales y crear macetas únicas.' },
  { id: 3, srcKey: 'gallery_jardin_flores.jpg', alt: 'Jardín floreciente con diversidad de flores y colores', title: 'Explosión de Color Floral', description: 'Un rincón del jardín que celebra la belleza y diversidad de las flores de temporada.' },
  { id: 4, srcKey: 'gallery_plantas_exoticas.jpg', alt: 'Colección de plantas exóticas de interior con hojas llamativas', title: 'Tesoros Exóticos', description: 'Una muestra de nuestras plantas raras y exóticas, perfectas para coleccionistas.' },
  { id: 5, srcKey: 'gallery_proyecto_comunitario.jpg', alt: 'Personas trabajando juntas en un proyecto de jardinería comunitaria', title: 'Jardinería Comunitaria', description: 'Colaborando para embellecer espacios públicos y fomentar la conexión con la naturaleza.' },
  { id: 6, srcKey: 'gallery_terrario_suculentas.jpg', alt: 'Terrario de vidrio con mini suculentas y cactus', title: 'Mini Mundos Verdes', description: 'Creaciones de terrarios que encapsulan la belleza de las suculentas en pequeños ecosistemas.' },
  { id: 7, srcKey: 'gallery_abono_organico_uso.jpg', alt: 'Manos aplicando abono orgánico a una planta en maceta', title: 'Nutrición Natural', description: 'La importancia del abono orgánico para un crecimiento saludable y vigoroso de las plantas.' },
  { id: 8, srcKey: 'gallery_decoracion_jardin_reciclado.jpg', alt: 'Decoraciones de jardín hechas con objetos reciclados como neumáticos y palets', title: 'Arte Reciclado en el Jardín', description: 'Elementos decorativos y funcionales para el jardín, creados con ingenio y materiales reutilizados.' },
];

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="space-y-8">
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center py-10 bg-gradient-to-r from-mint-green/30 to-sage-green/30 rounded-lg"
      >
        <h1 className="text-5xl font-display font-bold text-dark-green mb-3">Nuestra <span className="gradient-text">Galería</span></h1>
        <p className="text-xl text-dark-green/80">Inspiración visual de proyectos, huertos y creaciones DIY.</p>
      </motion.section>

      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {galleryItems.map((item, index) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer aspect-square"
            onClick={() => setSelectedImage(item)}
          >
            <img  
              alt={item.alt} 
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
             src="https://images.unsplash.com/photo-1697256200022-f61abccad430" />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
              <Maximize className="h-8 w-8 text-white mb-2" />
              <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
              <p className="text-sm text-cream-white/80 hidden md:block">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {selectedImage && (
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-3xl p-0 border-none bg-transparent shadow-none">
            <img  
              alt={selectedImage.alt} 
              class="w-full h-auto object-contain rounded-lg max-h-[80vh]"
             src="https://images.unsplash.com/photo-1583268921016-514d0a038478" />
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 rounded-b-lg">
              <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
              <p className="text-sm">{selectedImage.description}</p>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default GalleryPage;
  