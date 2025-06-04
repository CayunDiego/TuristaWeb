
import { Button } from "@/components/ui/button";
import { Leaf, MessageSquare } from "lucide-react";
import Image from 'next/image';

const Footer = () => {
  const whatsappLink = "https://wa.me/5491123919463?text=Hola%2C%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios%20de%20dise%C3%B1o%20web%20para%20turismo.";
  
  return (
    <>
      {/* Enfoque cercano y natural Section */}
      <section className="w-full py-16 md:py-28 relative" style={{ color: 'hsl(var(--section-dark-fg))' }}>
        <div className="absolute inset-0 -z-20">
            <Image
                src="/images/paisaje-3.jpg"
                alt="Paisaje de fondo para la sección de enfoque, posiblemente un glaciar o naturaleza serena."
                layout="fill"
                objectFit="cover"
                quality={80}
                data-ai-hint="glacier nature"
            />
        </div>
        <div className="absolute inset-0 -z-10" style={{ backgroundColor: '#0000008C' }}></div> {/* Overlay oscuro */}
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">🌿 Enfoque cercano y natural</h2>
          <p className="font-sans font-semibold text-2xl leading-[1.6] tracking-normal mb-8 max-w-lg mx-auto">
            Convierte visitas en reservas.<br /> Diseñamos la web que tu alojamiento necesita para destacar y vender más.
          </p>
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-md rounded-lg font-bold text-base leading-none tracking-normal px-10 py-4"
            asChild
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Hablar por WhatsApp
            </a>
          </Button>
        </div>
      </section>

      {/* Actual Footer */}
      <footer className="border-t border-border/20 py-8 text-center text-muted-foreground bg-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p>&copy; 2025 Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
