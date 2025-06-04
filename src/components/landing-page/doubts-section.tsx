
import Image from 'next/image';
import DownloadButton from '@/components/shared/DownloadButton';

const DoubtsSection: React.FC = () => {
  const greenButtonStyle = "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md rounded-lg font-bold text-base leading-none tracking-normal";
  const canvaLink = "https://www.canva.com/design/DAGpPIgRemE/OUzGpc9NGkC-BFMsK-N1JQ/view?utm_content=DAGpPIgRemE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h963dc439d2";

  return (
    <section id="faq" className="w-full py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 md:gap-x-12 lg:gap-x-20 items-start">
          
          {/* Columna Izquierda */}
          <div className="flex flex-col items-center order-1">
            <h2 className="font-kumbh-sans font-bold text-4xl leading-none text-foreground mb-4 md:mb-0 w-full text-center md:text-left md:self-start">
              Te saco las dudas del proceso y te doy un regalito:
            </h2>
            <div className="relative mx-auto md:mb-0">
              <Image 
                src="/svgs/giftbox.svg" 
                alt="Caja de Regalo con destellos" 
                width={100} 
                height={100} 
                data-ai-hint="gift box illustration"
              />
            </div>
            {/* RECUADRO AZUL (PADRE DE LA FLECHA DESKTOP) */}
            <div className="bg-[#2899AB] text-white p-5 shadow-lg text-center font-semibold text-lg w-full max-w-md mx-auto mt-4 md:mt-0 relative">
              10 ideas de contenido que podés usar en tu web o redes para atraer más huéspedes
              {/* FLECHA DESKTOP */}
              <div className="hidden w-full md:block absolute lg:top-[-50px] md:top-[-90px] left-full md:ml-[-90px] lg:ml-[-40px] md:-rotate-12 lg:rotate-0">
                <Image 
                  src="/svgs/arrowcurl.svg" 
                  alt="Flecha decorativa apuntando a la derecha" 
                  width={149} 
                  height={85} 
                  data-ai-hint="arrow graphic"
                />
              </div>
            </div>
            {/* FLECHA MOBILE */}
            <div className="block md:hidden self-center mb-8" style={{ 'rotate': '120deg' }}>
              <Image 
                src="/svgs/arrowcurl.svg" 
                alt="Flecha decorativa apuntando hacia abajo" 
                width={80} 
                height={60} 
                data-ai-hint="arrow graphic"
              />
            </div>
          </div>

          {/* Columna Derecha Contenido */}
          <div className="flex flex-col items-center md:items-center md:justify-center order-last md:order-2 h-full">
            <div className="flex flex-col items-center md:items-center space-y-6 text-center md:text-center relative w-full">
              <p className="text-lg text-foreground leading-relaxed max-w-md z-10">
                Te cuento todo acá en este documento <span className="font-bold">online</span>, que incluye información ampliada de nuestros servicios y ¡las <span className="font-bold">10 ideas de contenido</span> para tus redes!
              </p>
              <div className="w-full flex justify-center md:justify-center z-1">
                <DownloadButton 
                  url={canvaLink}
                  buttonClassName={`${greenButtonStyle} px-6 py-3 text-base`} 
                  label="Link a documento" 
                  showIcon={false} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default DoubtsSection;
