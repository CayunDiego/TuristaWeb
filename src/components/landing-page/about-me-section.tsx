
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Leaf } from 'lucide-react';
import { AvatarKath } from '../custom/AvatarKath'
import { AvatarKathOriginal } from '../custom/AvatarKathOriginal'

const AboutMeSection: React.FC = () => {
  return (
    <section id="about" className="w-full py-12 md:py-20 bg-background">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        <AvatarKath />
        {/* <AvatarKathOriginal /> */}
        <div className="text-center md:text-left max-w-xl">
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center md:justify-start">
            <Leaf className="mr-2 h-7 w-7 text-primary" />
            Sobre mí
          </h2>
          <p className="font-kumbh-sans font-bold text-lg leading-none tracking-normal text-foreground mb-3">
            Hola, soy Katherine Rangel, diseñadora web con +5 años de experiencia.
          </p>
          <p className="text-lg font-normal leading-relaxed tracking-normal text-muted-foreground">
            Antes creaba y gestionaba sitios para empresas de tecnología y otro rubros.
            Hoy me especializo, con un equipo creativo, en el <strong>sector turístico</strong> ayudando a <strong>Hoteles, cabañas, glampings y casas de campo</strong> a tener una <strong>presencia digital</strong> estratégica, visual y funcional.
          </p>
        </div>
      </div>
    </section>
  );
};
export default AboutMeSection;
