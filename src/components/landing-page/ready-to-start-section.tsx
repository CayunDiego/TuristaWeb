
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface ReadyToStartSectionProps {
  whatsappLink: string;
  greenButtonStyle: string;
  darkButtonStyle: string;
  demoUrl: string;
}

const ReadyToStartSection: React.FC<ReadyToStartSectionProps> = ({ whatsappLink, greenButtonStyle, darkButtonStyle, demoUrl }) => {
  return (
    <section id="contact" className="w-full py-16 md:py-28 relative" style={{ color: 'hsl(var(--section-dark-blue-fg))' }}>
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/paisaje-2.jpg"
          alt="Paisaje de fondo para la sección de contacto, posiblemente una costa o faro."
          layout="fill"
          objectFit="cover"
          quality={80}
          data-ai-hint="coast lighthouse"
        />
      </div>
      <div className="absolute inset-0 -z-10" style={{ backgroundColor: '#00000091' }}></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl font-bold mb-6">¡Estamos listos para iniciar!</h2>
        
        <div className="max-w-lg mx-auto mb-8">
          <p className="font-sans font-bold text-lg leading-[1.6] tracking-normal">
            ¿Querés una web que trabaje por vos?
          </p>
          <p className="font-sans font-normal text-lg leading-[1.6] tracking-normal mt-1">
            Mandame un mensaje y vemos juntos qué plan te conviene:
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
          <Button size="lg" className={`${greenButtonStyle} px-8 py-3`} asChild>
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
              Quiero ver una demostración
            </a>
          </Button>
          <Button size="lg" className={`${darkButtonStyle} px-8 py-3`} asChild>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Hablar por WhatsApp
            </a>
          </Button>
        </div>
        
        <p 
          className="font-sans font-bold text-lg leading-[1.6] tracking-normal" 
          style={{ color: 'hsla(var(--section-dark-blue-fg), 0.8)' }}
        >
          Argentina - Servicios para alojamientos en toda Latinoamérica y España
        </p>
      </div>
    </section>
  );
};
export default ReadyToStartSection;
