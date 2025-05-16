
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log('Form data submitted:', formData);
    toast({
      title: "¡Mensaje Enviado!",
      description: "Gracias por contactarnos. Te responderemos pronto.",
      className: "bg-mint-green text-white",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <div className="space-y-12">
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center py-10 bg-gradient-to-r from-mint-green/30 to-sage-green/30 rounded-lg"
      >
        <h1 className="text-5xl font-display font-bold text-dark-green mb-3">Contáctanos y <span className="gradient-text">Suscríbete</span></h1>
        <p className="text-xl text-dark-green/80">¿Tienes preguntas o quieres unirte a nuestro boletín? ¡Estamos aquí para ayudarte!</p>
      </motion.section>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.section
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-white p-8 rounded-lg shadow-xl"
        >
          <h2 className="text-3xl font-display font-semibold text-dark-green mb-6">Envíanos un Mensaje</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-dark-green">Nombre Completo</Label>
              <Input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="mt-1 border-sage-green focus:ring-mint-green focus:border-mint-green" />
            </div>
            <div>
              <Label htmlFor="email" className="text-dark-green">Correo Electrónico</Label>
              <Input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="mt-1 border-sage-green focus:ring-mint-green focus:border-mint-green" />
            </div>
            <div>
              <Label htmlFor="subject" className="text-dark-green">Asunto</Label>
              <Input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange} required className="mt-1 border-sage-green focus:ring-mint-green focus:border-mint-green" />
            </div>
            <div>
              <Label htmlFor="message" className="text-dark-green">Tu Mensaje</Label>
              <Textarea name="message" id="message" rows={5} value={formData.message} onChange={handleChange} required className="mt-1 border-sage-green focus:ring-mint-green focus:border-mint-green" />
            </div>
            <Button type="submit" disabled={isSubmitting} className="w-full bg-mint-green hover:bg-mint-green/90 text-white py-3 text-lg">
              {isSubmitting ? 'Enviando...' : <>Enviar Mensaje <Send className="ml-2 h-5 w-5" /></>}
            </Button>
          </form>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="space-y-8"
        >
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h2 className="text-3xl font-display font-semibold text-dark-green mb-6">Información de Contacto</h2>
            <div className="space-y-4 text-dark-green/80">
              <div className="flex items-start space-x-3">
                <MapPin className="h-6 w-6 text-mint-green mt-1" />
                <div>
                  <p className="font-semibold text-dark-green">Dirección (Referencial)</p>
                  <p>Calle Las Verbenas 123, Ñuñoa, Santiago, Chile</p>
                  <p className="text-sm italic">(Visitas solo con cita previa)</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-6 w-6 text-mint-green mt-1" />
                <div>
                  <p className="font-semibold text-dark-green">Teléfono</p>
                  <p>+56 9 1234 5678</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-6 w-6 text-mint-green mt-1" />
                <div>
                  <p className="font-semibold text-dark-green">Correo Electrónico</p>
                  <p>contacto@lamacetita.cl</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h2 className="text-3xl font-display font-semibold text-dark-green mb-6">Suscríbete al Boletín</h2>
            <p className="text-dark-green/80 mb-4">Recibe tips ecológicos, novedades y ofertas especiales directamente en tu correo.</p>
            <form onSubmit={(e) => { e.preventDefault(); toast({title: "¡Suscripción Exitosa!", description: "Gracias por unirte a nuestro boletín.", className: "bg-mint-green text-white"}); e.target.reset(); }} className="flex gap-2">
              <Input type="email" placeholder="Tu correo electrónico" required className="border-sage-green focus:ring-mint-green focus:border-mint-green" />
              <Button type="submit" className="bg-dark-green hover:bg-dark-green/90 text-white">Suscribirme</Button>
            </form>
          </div>
        </motion.section>
      </div>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-12"
      >
        <h2 className="text-3xl font-display font-semibold text-dark-green text-center mb-6">Nuestra Ubicación (Referencial)</h2>
        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=-70.6000%2C-33.4600%2C-70.5800%2C-33.4500&layer=mapnik&marker=-33.4550%2C-70.5900"
            width="100%"
            height="450"
            style={{ border:0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa de ubicación de LaMacetita.cl"
          ></iframe>
        </div>
      </motion.section>
    </div>
  );
};

export default ContactPage;
  