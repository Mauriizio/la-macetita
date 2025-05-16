
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { MailCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const NewsletterPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    const popupShown = localStorage.getItem('newsletterPopupShown');
    if (!popupShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        localStorage.setItem('newsletterPopupShown', 'true');
      }, 5000); // Show popup after 5 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      console.log('Newsletter subscription:', email);
      toast({
        title: "¡Suscripción Exitosa!",
        description: `Gracias por unirte a nuestro boletín, ${email}.`,
        className: "bg-mint-green text-white",
      });
      setEmail('');
      setIsOpen(false);
    }
  };

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px] bg-cream-white p-8 rounded-lg shadow-2xl border-sage-green">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <DialogHeader className="text-center mb-6">
            <MailCheck className="h-16 w-16 text-mint-green mx-auto mb-4" />
            <DialogTitle className="text-3xl font-display text-dark-green">¡Únete a Nuestra Comunidad Verde!</DialogTitle>
            <DialogDescription className="text-dark-green/80 text-base mt-2">
              Suscríbete a nuestro boletín y recibe tips exclusivos de jardinería, noticias sobre plantas raras y ofertas especiales.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="tu.correo@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border-sage-green focus:ring-mint-green focus:border-mint-green text-lg p-3"
            />
            <Button type="submit" className="w-full bg-dark-green hover:bg-dark-green/90 text-white text-lg py-3">
              Suscribirme Ahora
            </Button>
          </form>
          <Button variant="ghost" onClick={() => setIsOpen(false)} className="w-full mt-3 text-sm text-dark-green/70 hover:text-dark-green">
            No, gracias
          </Button>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default NewsletterPopup;
  