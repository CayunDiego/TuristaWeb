
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface HeroSectionProps {
  demoUrl: string;
  greenButtonStyle: string;
  darkButtonStyle: string; // Added new prop
}

const HeroSection: React.FC<HeroSectionProps> = ({ demoUrl, greenButtonStyle, darkButtonStyle }) => {
  return (
    <section className="w-full text-center relative flex flex-col justify-center items-center min-h-[60vh] md:min-h-[75vh] overflow-hidden">
      <Image
        src="/svgs/img1.svg"
        alt="Forma decorativa verde inferior izquierda"
        width={200}
        height={100}
        className="absolute -bottom-[2.4rem] left-[1rem] sm:-bottom-[3.8rem] sm:left-[1.5rem] md:-bottom-[3.8rem] md:left-[5rem] z-0 w-36 h-18 sm:w-48 sm:h-24 md:w-64 md:h-32"
        data-ai-hint="abstract shape"
      />
      <Image
        src="/svgs/img2.svg"
        alt="Forma decorativa de nube celeste superior derecha"
        width={160}
        height={80}
        className="absolute top-[0] right-[3rem] md:top-[5rem] md:right-[5rem] z-0 w-24 h-16 sm:w-32 sm:h-20 md:w-40 md:h-24"
        data-ai-hint="abstract cloud"
      />
      <Image
        src="/svgs/img3.svg"
        alt="Forma decorativa celeste grande inferior derecha"
        width={280}
        height={200}
        className="absolute -bottom-[4rem] -right-[3rem] sm:-bottom-[6rem] sm:-right-[3.5rem] md:-bottom-[6.5rem] md:-right-[5.6rem] z-0 w-40 h-28 sm:w-56 sm:h-40 md:w-72 md:h-52"
        data-ai-hint="abstract shape"
      />
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div>
          <p className="font-kumbh-sans font-bold text-lg leading-none tracking-normal text-foreground mb-4">
            Tu web es tu recepción 24/7. Hagámosla realidad
          </p>
          <h1 className="font-kumbh-sans text-4xl md:text-6xl font-bold mb-8 max-w-3xl mx-auto">
            Tu sitio web propio para alojamientos que quieren <span className="text-secondary">más reservas</span> y <span className="text-secondary">sin comisiones</span>
          </h1>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button size="lg" className={`${greenButtonStyle} px-8 py-3`} asChild>
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                Quiero ver una demostración
              </a>
            </Button>
            <Button size="lg" className={`${darkButtonStyle} px-8 py-3`} asChild>
              <Link href="#services">
                Ver planes
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
