
import Image from 'next/image';
import type { Button } from '@/components/ui/button'; // type import as Button is not used directly

interface WhatYoullGetSectionProps {
  demoUrl: string; // Kept in props for consistency, though button is removed
  greenButtonStyle: string; // Kept in props for consistency, though button is removed
}

const WhatYoullGetSection: React.FC<WhatYoullGetSectionProps> = ({ demoUrl, greenButtonStyle }) => {
  const items = [
    { svg: "/svgs/cool.svg", alt: "Icono de pulgar arriba moderno", text: "Que se vea genial.", dataAiHint: "illustration icon" },
    { svg: "/svgs/devices.svg", alt: "Icono de múltiples dispositivos", text: "Que funciona en todos los dispositivos.", dataAiHint: "illustration icon" },
    { svg: "/svgs/google.svg", alt: "Icono de logo de Google", text: "Que te encuentran en Google.", dataAiHint: "illustration icon" },
    {
      svg: "/svgs/maps.svg",
      alt: "Icono de pin de mapa estilizado",
      text: <>Y que haga que tus huéspedes digan <strong>“¡quiero ir!”</strong>.</>,
      dataAiHint: "illustration icon"
    },
  ];

  return (
    <section
      className="w-full py-12 md:py-20"
      style={{
        background: 'linear-gradient(180deg, rgba(35, 148, 255, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), hsl(var(--section-dark-bg))',
        color: 'hsl(var(--section-dark-fg))'
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-x-4 mb-10">
          <Image
            src="/images/rocket.gif"
            alt="Cohete animado"
            width={60}
            height={60}
            unoptimized={true} // Necesario para GIFs animados
            data-ai-hint="rocket animation"
            style={{ transform: 'rotate(34.63deg)' }}
          />
          <h2 className="text-4xl font-normal leading-none tracking-normal">¿Qué obtendrás haciendo tu web conmigo?</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center p-6">
              <Image src={item.svg} alt={item.alt} width={40} height={40} className="h-10 w-10 mb-3" data-ai-hint={item.dataAiHint}/>
              <p className="font-normal">{item.text}</p>
            </div>
          ))}
        </div>
        {/* Botón "Ver Demo" eliminado */}
      </div>
    </section>
  );
};
export default WhatYoullGetSection;
