
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lightbulb, Recycle, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const initialArticles = [
  {
    id: 1,
    title: 'Cómo Cuidar tus Suculentas: Guía para Principiantes',
    category: 'Cuidado de Plantas',
    icon: <Lightbulb className="h-8 w-8 text-mint-green" />,
    excerpt: 'Aprende los secretos para mantener tus suculentas felices y saludables, desde el riego adecuado hasta la exposición solar ideal.',
    image: 'suculentas_cuidados.jpg',
    slug: 'como-cuidar-suculentas',
    content: `
      <p>Las suculentas son plantas maravillosas y relativamente fáciles de cuidar si conoces sus necesidades básicas. Aquí te dejamos algunos consejos clave:</p>
      <h3 class="text-xl font-semibold mt-4 mb-2 text-dark-green">Riego:</h3>
      <ul class="list-disc list-inside space-y-1 text-dark-green/80">
        <li>Menos es más. Deja que el sustrato se seque completamente entre riegos.</li>
        <li>En invierno, reduce la frecuencia de riego significativamente.</li>
        <li>Evita mojar las hojas directamente; riega la base de la planta.</li>
      </ul>
      <h3 class="text-xl font-semibold mt-4 mb-2 text-dark-green">Luz:</h3>
      <p class="text-dark-green/80">La mayoría de las suculentas aman la luz brillante. Colócalas cerca de una ventana soleada. Algunas variedades pueden quemarse con sol directo muy intenso, así que obsérvalas.</p>
      <h3 class="text-xl font-semibold mt-4 mb-2 text-dark-green">Sustrato:</h3>
      <p class="text-dark-green/80">Utiliza un sustrato específico para cactus y suculentas que drene muy bien. Esto es crucial para evitar la pudrición de raíces.</p>
    `
  },
  {
    id: 2,
    title: 'DIY: Crea Macetas Originales con Materiales Reciclados',
    category: 'Macetas Recicladas',
    icon: <Recycle className="h-8 w-8 text-sage-green" />,
    excerpt: 'Transforma objetos cotidianos en macetas únicas y llenas de personalidad para tus plantas. ¡Dale rienda suelta a tu creatividad!',
    image: 'macetas_recicladas_diy.jpg',
    slug: 'diy-macetas-recicladas',
    content: `
      <p>Crear tus propias macetas con materiales reciclados no solo es divertido y económico, sino también una excelente forma de contribuir al medio ambiente. Aquí algunas ideas:</p>
      <h3 class="text-xl font-semibold mt-4 mb-2 text-dark-green">Latas de Conserva:</h3>
      <ul class="list-disc list-inside space-y-1 text-dark-green/80">
        <li>Limpia bien la lata y asegúrate de que no tenga bordes afilados.</li>
        <li>Píntalas, decóralas con tela, cuerda o mosaicos.</li>
        <li>¡No olvides hacer agujeros de drenaje en el fondo!</li>
      </ul>
      <h3 class="text-xl font-semibold mt-4 mb-2 text-dark-green">Botellas de Plástico:</h3>
      <p class="text-dark-green/80">Corta la parte inferior de botellas grandes para crear macetas colgantes o de escritorio. Puedes pintarlas o dejarlas transparentes.</p>
      <h3 class="text-xl font-semibold mt-4 mb-2 text-dark-green">Neumáticos Viejos:</h3>
      <p class="text-dark-green/80">Si tienes espacio, los neumáticos pueden convertirse en grandes maceteros para plantas de exterior. Píntalos de colores vibrantes.</p>
    `
  },
  {
    id: 3,
    title: 'Protegiendo el Medio Ambiente desde tu Jardín',
    category: 'Medio Ambiente',
    icon: <BookOpen className="h-8 w-8 text-light-brown" />,
    excerpt: 'Pequeñas acciones en tu jardín pueden tener un gran impacto positivo en el ecosistema. Descubre cómo contribuir.',
    image: 'jardin_ecologico.jpg',
    slug: 'proteger-medio-ambiente-jardin',
    content: `
      <p>Tu jardín puede ser un refugio para la biodiversidad y un ejemplo de sostenibilidad. Considera estas prácticas:</p>
      <h3 class="text-xl font-semibold mt-4 mb-2 text-dark-green">Compostaje:</h3>
      <p class="text-dark-green/80">Reduce tus residuos orgánicos y crea un abono rico para tus plantas compostando restos de cocina y jardín.</p>
      <h3 class="text-xl font-semibold mt-4 mb-2 text-dark-green">Ahorro de Agua:</h3>
      <ul class="list-disc list-inside space-y-1 text-dark-green/80">
        <li>Elige plantas nativas o adaptadas a tu clima, que requieran menos riego.</li>
        <li>Utiliza técnicas de riego eficiente como el goteo.</li>
        <li>Recolecta agua de lluvia.</li>
      </ul>
      <h3 class="text-xl font-semibold mt-4 mb-2 text-dark-green">Fomenta la Biodiversidad:</h3>
      <p class="text-dark-green/80">Planta flores que atraigan polinizadores como abejas y mariposas. Evita el uso de pesticidas químicos.</p>
    `
  },
];

const ArticleCard = ({ article, onClick }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    onClick={() => onClick(article)}
    className="cursor-pointer"
  >
    <Card className="h-full flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white rounded-lg">
      <div className="relative h-56 w-full">
        <img  
          alt={article.title} 
          class="w-full h-full object-cover"
         src="https://images.unsplash.com/photo-1684347417348-d261d03c60ef" />
        <div className="absolute top-4 left-4 bg-white p-2 rounded-full shadow-md">
          {article.icon}
        </div>
      </div>
      <CardHeader className="pt-4">
        <CardTitle className="text-xl font-semibold text-dark-green">{article.title}</CardTitle>
        <CardDescription className="text-sm text-mint-green font-medium">{article.category}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-dark-green/70 mb-4">{article.excerpt}</p>
        <Button variant="link" className="text-dark-green p-0 h-auto hover:text-mint-green">
          Leer más...
        </Button>
      </CardContent>
    </Card>
  </motion.div>
);

const ArticleDetail = ({ article, onBack }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="bg-white p-6 md:p-10 rounded-lg shadow-xl"
  >
    <Button onClick={onBack} variant="outline" className="mb-6 border-mint-green text-mint-green hover:bg-mint-green hover:text-white">
      &larr; Volver a los artículos
    </Button>
    <div className="relative h-72 w-full rounded-lg overflow-hidden mb-6">
      <img  
        alt={article.title} 
        class="w-full h-full object-cover"
       src="https://images.unsplash.com/photo-1548778052-311f4bc2b502" />
    </div>
    <h1 className="text-4xl font-display font-bold text-dark-green mb-3">{article.title}</h1>
    <p className="text-lg text-mint-green font-semibold mb-6">{article.category}</p>
    <div className="prose prose-lg max-w-none text-dark-green/80" dangerouslySetInnerHTML={{ __html: article.content }} />
  </motion.div>
);

const TipsPage = () => {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [filter, setFilter] = useState('Todos');

  useEffect(() => {
    setArticles(initialArticles);
  }, []);

  const handleSelectArticle = (article) => {
    setSelectedArticle(article);
    window.scrollTo(0, 0);
  };

  const handleBackToList = () => {
    setSelectedArticle(null);
  };

  const categories = ['Todos', ...new Set(articles.map(a => a.category))];

  const filteredArticles = filter === 'Todos' 
    ? articles 
    : articles.filter(article => article.category === filter);

  return (
    <div className="space-y-8">
      {!selectedArticle ? (
        <>
          <motion.section
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center py-10 bg-gradient-to-r from-mint-green/30 to-sage-green/30 rounded-lg"
          >
            <h1 className="text-5xl font-display font-bold text-dark-green mb-3">Consejos & <span className="gradient-text">DIY</span></h1>
            <p className="text-xl text-dark-green/80">Aprende, crea e inspírate con nuestras guías y tutoriales.</p>
          </motion.section>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map(category => (
              <Button
                key={category}
                variant={filter === category ? 'default' : 'outline'}
                onClick={() => setFilter(category)}
                className={`${filter === category ? 'bg-mint-green text-white' : 'border-sage-green text-dark-green hover:bg-sage-green/20'}`}
              >
                {category}
              </Button>
            ))}
          </div>

          {filteredArticles.length > 0 ? (
            <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map(article => (
                <ArticleCard key={article.id} article={article} onClick={handleSelectArticle} />
              ))}
            </motion.div>
          ) : (
            <p className="text-center text-xl text-dark-green/70 py-10">
              No hay artículos en esta categoría por el momento.
            </p>
          )}
        </>
      ) : (
        <ArticleDetail article={selectedArticle} onBack={handleBackToList} />
      )}
    </div>
  );
};

export default TipsPage;
  