
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Filter, X, PlusCircle, MinusCircle, Trash2 } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/components/ui/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useLocation } from 'react-router-dom';

const initialProducts = [
  { id: 'p1', name: 'Abono Orgánico Premium (5kg)', category: 'abonos', price: 12000, image: 'abono_organico.jpg', description: 'Nutrición completa para tus plantas, 100% natural.', stock: 50, tags: ['orgánico', 'premium'] },
  { id: 'p2', name: 'Monstera Deliciosa (Costilla de Adán)', category: 'exoticas', price: 25000, image: 'monstera_deliciosa.jpg', description: 'Planta de interior exótica con hojas perforadas únicas.', stock: 15, tags: ['interior', 'decorativa'] },
  { id: 'p3', name: 'Suculenta Echeveria "Lola"', category: 'raras', price: 8000, image: 'echeveria_lola.jpg', description: 'Hermosa suculenta con rosetas de color pastel.', stock: 30, tags: ['suculenta', 'colección'] },
  { id: 'p4', name: 'Lavanda (Lavandula angustifolia)', category: 'comunes', price: 6000, image: 'lavanda.jpg', description: 'Planta aromática ideal para jardines y balcones.', stock: 40, tags: ['aromática', 'exterior'] },
  { id: 'p5', name: 'Ficus Lyrata (Pandurata)', category: 'exoticas', price: 35000, image: 'ficus_lyrata.jpg', description: 'Impresionante planta de interior con grandes hojas.', stock: 10, tags: ['interior', 'grande'] },
  { id: 'p6', name: 'Cactus San Pedro (Trichocereus pachanoi)', category: 'raras', price: 18000, image: 'san_pedro.jpg', description: 'Cactus columnar de crecimiento rápido, apreciado por coleccionistas.', stock: 20, tags: ['cactus', 'colección'] },
  { id: 'p7', name: 'Menta Piperita', category: 'comunes', price: 4500, image: 'menta.jpg', description: 'Hierba aromática versátil para infusiones y cocina.', stock: 60, tags: ['aromática', 'culinaria'] },
  { id: 'p8', name: 'Humus de Lombriz (2kg)', category: 'abonos', price: 7000, image: 'humus_lombriz.jpg', description: 'Excelente mejorador de suelo, rico en nutrientes.', stock: 25, tags: ['orgánico', 'mejorador'] },
];

const categories = [
  { id: 'todos', name: 'Todos los Productos' },
  { id: 'abonos', name: 'Abonos Orgánicos' },
  { id: 'exoticas', name: 'Plantas Exóticas' },
  { id: 'raras', name: 'Plantas Raras' },
  { id: 'comunes', name: 'Plantas Comunes' },
];

const ShopPage = () => {
  const { cart, addToCart, updateQuantity, removeFromCart, clearCart } = useCart();
  const { toast } = useToast();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [showFilters, setShowFilters] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const storedProducts = localStorage.getItem('laMacetitaProducts');
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    } else {
      setProducts(initialProducts);
      localStorage.setItem('laMacetitaProducts', JSON.stringify(initialProducts));
    }
  }, []);

  useEffect(() => {
    if (location.search.includes('cart=open')) {
      setIsCartOpen(true);
    }
  }, [location]);

  useEffect(() => {
    let tempProducts = products;

    if (selectedCategory !== 'todos') {
      tempProducts = tempProducts.filter(p => p.category === selectedCategory);
    }

    if (searchTerm) {
      tempProducts = tempProducts.filter(p => 
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (p.tags && p.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())))
      );
    }
    
    tempProducts = tempProducts.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    setFilteredProducts(tempProducts);
  }, [products, selectedCategory, searchTerm, priceRange]);

  const handleAddToCart = (product) => {
    addToCart(product);
    toast({
      title: "¡Añadido al carrito!",
      description: `${product.name} ha sido añadido a tu carrito.`,
      className: "bg-mint-green text-white",
    });
  };

  const totalCartPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const ProductCard = ({ product }) => (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="h-full flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white rounded-lg">
        <div className="relative h-56 w-full">
          <img  
            alt={product.name} 
            class="w-full h-full object-cover"
           src="https://images.unsplash.com/photo-1635865165118-917ed9e20936" />
        </div>
        <CardHeader className="pt-4">
          <CardTitle className="text-xl font-semibold text-dark-green h-14">{product.name}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col justify-between">
          <div>
            <CardDescription className="text-dark-green/70 mb-2 h-12 overflow-hidden">{product.description}</CardDescription>
            <p className="text-2xl font-bold text-mint-green mb-4">${product.price.toLocaleString('es-CL')}</p>
          </div>
          <Button onClick={() => handleAddToCart(product)} className="w-full bg-dark-green hover:bg-dark-green/90 text-white">
            <ShoppingCart className="mr-2 h-4 w-4" /> Añadir al Carrito
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );

  const CartItem = ({ item }) => (
    <div className="flex items-center justify-between py-3 border-b border-sage-green/30">
      <div className="flex items-center space-x-3">
        <div className="w-16 h-16 rounded overflow-hidden">
           <img  alt={item.name} class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
        </div>
        <div>
          <p className="font-semibold text-dark-green">{item.name}</p>
          <p className="text-sm text-dark-green/70">${item.price.toLocaleString('es-CL')}</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon" onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>
          <MinusCircle className="h-5 w-5 text-dark-green" />
        </Button>
        <span>{item.quantity}</span>
        <Button variant="ghost" size="icon" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
          <PlusCircle className="h-5 w-5 text-dark-green" />
        </Button>
        <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.id)}>
          <Trash2 className="h-5 w-5 text-red-500" />
        </Button>
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center py-10 bg-gradient-to-r from-mint-green/30 to-sage-green/30 rounded-lg"
      >
        <h1 className="text-5xl font-display font-bold text-dark-green mb-3">Nuestra <span className="gradient-text">Tienda</span></h1>
        <p className="text-xl text-dark-green/80">Encuentra todo lo que necesitas para tu paraíso verde.</p>
      </motion.section>

      <div className="flex justify-end mb-4">
        <Button onClick={() => setIsCartOpen(true)} className="bg-mint-green hover:bg-mint-green/90 text-white">
          <ShoppingCart className="mr-2 h-5 w-5" /> Ver Carrito ({cart.reduce((sum, item) => sum + item.quantity, 0)})
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <aside className={`md:w-1/4 ${showFilters ? 'block' : 'hidden'} md:block bg-white p-6 rounded-lg shadow-lg`}>
          <div className="flex justify-between items-center md:hidden mb-4">
            <h3 className="text-xl font-semibold text-dark-green">Filtros</h3>
            <Button variant="ghost" size="icon" onClick={() => setShowFilters(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          <div className="space-y-6">
            <div>
              <Label htmlFor="search" className="text-lg font-semibold text-dark-green mb-2 block">Buscar</Label>
              <input
                type="text"
                id="search"
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-2 border border-sage-green rounded-md focus:ring-mint-green focus:border-mint-green"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-dark-green mb-3">Categorías</h3>
              <Tabs defaultValue="todos" onValueChange={setSelectedCategory} orientation="vertical" className="w-full">
                <TabsList className="flex flex-col items-start h-auto bg-transparent p-0">
                  {categories.map(cat => (
                    <TabsTrigger 
                      key={cat.id} 
                      value={cat.id}
                      className="w-full justify-start data-[state=active]:bg-mint-green/20 data-[state=active]:text-dark-green data-[state=active]:shadow-none hover:bg-sage-green/10 text-dark-green/80 py-2 px-3 rounded-md"
                    >
                      {cat.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
            <div>
              <Label htmlFor="priceRange" className="text-lg font-semibold text-dark-green mb-2 block">Rango de Precio</Label>
              <Slider
                id="priceRange"
                min={0}
                max={50000}
                step={1000}
                value={priceRange}
                onValueChange={setPriceRange}
                className="[&>span:first-child]:h-1 [&>span:first-child]:bg-mint-green"
              />
              <div className="flex justify-between text-sm text-dark-green/70 mt-2">
                <span>${priceRange[0].toLocaleString('es-CL')}</span>
                <span>${priceRange[1].toLocaleString('es-CL')}</span>
              </div>
            </div>
          </div>
        </aside>

        <main className="md:w-3/4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-display text-dark-green">
              {categories.find(c => c.id === selectedCategory)?.name || 'Todos los Productos'}
            </h2>
            <Button variant="outline" onClick={() => setShowFilters(true)} className="md:hidden border-mint-green text-mint-green hover:bg-mint-green hover:text-white">
              <Filter className="mr-2 h-4 w-4" /> Filtros
            </Button>
          </div>
          {filteredProducts.length > 0 ? (
            <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </motion.div>
          ) : (
            <p className="text-center text-xl text-dark-green/70 py-10">
              No se encontraron productos con los filtros seleccionados. ¡Intenta ajustar tu búsqueda!
            </p>
          )}
        </main>
      </div>

      {isCartOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setIsCartOpen(false)}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white p-6 rounded-lg shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-dark-green">Tu Carrito de Compras</h2>
              <Button variant="ghost" size="icon" onClick={() => setIsCartOpen(false)}>
                <X className="h-6 w-6 text-dark-green" />
              </Button>
            </div>
            {cart.length === 0 ? (
              <p className="text-center text-dark-green/70 py-8">Tu carrito está vacío. ¡Añade algunas plantas!</p>
            ) : (
              <>
                <div className="space-y-4 mb-6">
                  {cart.map(item => <CartItem key={item.id} item={item} />)}
                </div>
                <div className="border-t border-sage-green/30 pt-4 space-y-3">
                  <div className="flex justify-between font-semibold text-lg text-dark-green">
                    <span>Total:</span>
                    <span>${totalCartPrice.toLocaleString('es-CL')}</span>
                  </div>
                  <Button className="w-full bg-mint-green hover:bg-mint-green/90 text-white py-3 text-base" onClick={() => alert('Proceder al pago (funcionalidad en desarrollo)')}>
                    Proceder al Pago
                  </Button>
                  <Button variant="outline" className="w-full border-red-500 text-red-500 hover:bg-red-500 hover:text-white" onClick={() => { clearCart(); toast({ title: "Carrito vaciado", description: "Todos los productos han sido eliminados del carrito.", variant: "destructive" }); }}>
                    Vaciar Carrito
                  </Button>
                </div>
              </>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ShopPage;
  