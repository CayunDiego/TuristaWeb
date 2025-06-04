
import Image from 'next/image';

const MainImageSection: React.FC = () => {
  return (
    <section className="w-full relative">
      <div className="lg:h-[508px] w-full aspect-video bg-muted flex items-center justify-center text-muted-foreground overflow-hidden relative md:h-[508px] sm:h-[300px]">
        <Image
          src="/images/paisaje-1.jpg"
          alt="Paisaje montañoso con lagos y cielo vibrante, utilizado como imagen principal de la web."
          layout="fill"
          objectFit="cover"
          data-ai-hint="mountains lakes"
          priority
        />
      </div>
    </section>
  );
};
export default MainImageSection;
