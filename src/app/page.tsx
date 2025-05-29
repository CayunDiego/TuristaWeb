
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';
import {
  Leaf,
  Download,
} from 'lucide-react';

// Button styles based on the new theme
const greenButtonStyle = "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md rounded-lg font-bold text-base leading-none tracking-normal";
// For dark buttons
const darkButtonStyle = "bg-foreground text-primary hover:bg-foreground/90 shadow-md rounded-lg font-bold text-base leading-none tracking-normal";
// For the light blue "Más elegido" badge
const masElegidoBadgeStyle = "bg-[hsl(var(--section-teal-bg))] text-[hsl(var(--section-teal-fg))] px-3 py-1 text-sm font-semibold rounded-full absolute -top-3 right-6 transform translate-x-1/4 -translate-y-1/4 shadow-lg";


export default function LandingPage() {
  const whatsappLink = "https://wa.me/5491123919463?text=Hola%2C%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios%20de%20dise%C3%B1o%20web%20para%20turismo.";
  return (
    <div className="flex flex-col text-foreground">
      {/* Hero Section */}
      <section className="w-full text-center relative flex flex-col justify-center items-center min-h-[60vh] md:min-h-[75vh] overflow-hidden">
        
        {/* Decorative SVGs */}
        <Image
            src="/svgs/img1.svg"
            alt="Forma decorativa verde inferior izquierda"
            width={200} 
            height={100}
            className="absolute z-0 w-36 h-18 sm:w-48 sm:h-24 md:w-64 md:h-32"
            data-ai-hint="abstract shape"
            style={{ bottom: '-3.8rem', left: '5rem' }}
        />
        <Image
            src="/svgs/img2.svg"
            alt="Forma decorativa de nube celeste superior derecha"
            width={160}
            height={80}
            className="absolute z-0 w-24 h-16 sm:w-32 sm:h-20 md:w-40 md:h-24"
            data-ai-hint="abstract cloud"
            style={{ top: '5rem', right: '5rem' }}
        />
         <Image
            src="/svgs/img3.svg"
            alt="Forma decorativa celeste grande inferior derecha"
            width={280}
            height={200}
            className="absolute z-0 w-40 h-28 sm:w-56 sm:h-40 md:w-72 md:h-52"
            data-ai-hint="abstract shape"
            style={{ bottom: '-6.5rem', right: '-5.6rem' }}
        />

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div>
            <p className="font-kumbh-sans font-bold text-lg leading-none tracking-normal text-foreground mb-4">
              Tu web es tu recepción 24/7. Hagámosla realidad
            </p>
            <h1 className="font-kumbh-sans text-4xl md:text-6xl font-bold mb-8 max-w-3xl mx-auto">
              Tu sitio web propio para alojamientos que quieren <span className="text-secondary">más reservas</span> y <span className="text-secondary">sin comisiones</span>
            </h1>
            <Button size="lg" className={`${greenButtonStyle} px-8 py-3`}>
              Quiero ver una demo
            </Button>
          </div>
        </div>
      </section>

      {/* Main Image Section (Carousel Placeholder) - Full Width */}
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
      
      <div className="container mx-auto px-4">
        {/* About Me Section */}
        <section id="about" className="w-full py-12 md:py-20 bg-background">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            <Avatar className="w-32 h-32 md:w-40 md:h-40 shadow-lg">
              <AvatarImage src="/images/sobremi.png" alt="Katherine Rangel" data-ai-hint="woman profile" />
              <AvatarFallback>KR</AvatarFallback>
            </Avatar>
            <div className="text-center md:text-left max-w-xl">
              <h2 className="text-3xl font-bold mb-4 flex items-center justify-center md:justify-start">
                <Leaf className="mr-2 h-7 w-7 text-primary" />
                Sobre mí
              </h2>
              <p className="font-kumbh-sans font-bold text-lg leading-none tracking-normal text-foreground mb-3">
                Hola, soy Katherine Rangel, diseñadora web con +5 años de experiencia.
              </p>
              <p className="text-lg font-normal leading-relaxed tracking-normal text-muted-foreground">
                Antes creaba sitios para empresas de Real State. Hoy me especializo, con un equipo creativo, en el sector turístico ayudando a Hoteles, cabañas, glampings y casas de campo a tener una presencia digital estratégica, visual y funcional.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* What you'll get Section */}
      <section className="w-full py-12 md:py-20" style={{ backgroundColor: 'hsl(var(--section-dark-bg))', color: 'hsl(var(--section-dark-fg))' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-normal leading-none tracking-normal mb-10">¿Qué obtendrás haciendo tu web conmigo?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {[
              { svg: "/svgs/cool.svg", alt: "Icono de pulgar arriba moderno", text: "Que se ve genial.", dataAiHint: "illustration icon" },
              { svg: "/svgs/devices.svg", alt: "Icono de múltiples dispositivos", text: "Que funciona en todos los dispositivos.", dataAiHint: "illustration icon" },
              { svg: "/svgs/google.svg", alt: "Icono de logo de Google", text: "Que te encuentran en Google.", dataAiHint: "illustration icon" },
              { svg: "/svgs/maps.svg", alt: "Icono de pin de mapa estilizado", text: "Y que haga que tus huéspedes digan “¡quiero ir!”." , dataAiHint: "illustration icon"},
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center p-6">
                <Image src={item.svg} alt={item.alt} width={40} height={40} className="h-10 w-10 mb-3" data-ai-hint={item.dataAiHint}/>
                <p className="font-medium">{item.text}</p>
              </div>
            ))}
          </div>
          <Button size="lg" className={`${greenButtonStyle} px-8 py-3`}>Ver Demo</Button>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-20 bg-background">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Servicios</h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Te ofrezco 3 planes simples para que elijas según lo que tu alojamiento necesita hoy para más reservas y sin comisiones.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-left bg-card border-0 shadow-none">
                <CardHeader>
                  <CardTitle className="text-2xl">Plan Básico</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Una web de una página con todo lo esencial para que te encuentren y reserven fácil.</p>
                </CardContent>
              </Card>
              <Card className="text-left bg-card relative border-0 shadow-none">
                <div className={masElegidoBadgeStyle}>Más elegido</div>
                <CardHeader>
                  <CardTitle className="text-2xl">Plan Intermedio</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Ideal para mostrar cada espacio y recibir reservas directas sin depender de portales.</p>
                </CardContent>
              </Card>
              <Card className="text-left bg-card border-0 shadow-none">
                <CardHeader>
                  <CardTitle className="text-2xl">Plan Premium</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Diseño, estrategia, textos, posicionamiento y más, para destacar online como merecés.</p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className={`${greenButtonStyle} px-8 py-3`}>Quiero ver un avance</Button>
              <Button size="lg" className={`${darkButtonStyle} px-8 py-3`} asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  Hablar por Whatsapp
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>

      {/* Payment/Support Info Section */}
      <section className="w-full py-12 md:py-16" style={{ backgroundColor: 'hsl(var(--section-teal-bg))', color: 'hsl(var(--section-teal-fg))' }}>
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg mb-2">Todos los planes se pagan 50% al inicio y 50% al entregar.</p>
          <p className="text-lg mb-2">Soporte opcional posterior disponible.</p>
          <p className="text-lg font-semibold">** Webs en Español e Inglés (opcional)</p>
        </div>
      </section>

      {/* Ready to Start Section */}
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
          <p className="text-xl mb-8 max-w-lg mx-auto">¿Querés una web que trabaje por vos? Mandame un mensaje y vemos juntos qué plan te conviene:</p>
          <Button size="lg" className={`${greenButtonStyle} px-10 py-4 mb-6`} asChild>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Hablar por WhatsApp
            </a>
          </Button>
          <p className="text-sm" style={{ color: 'hsla(var(--section-dark-blue-fg), 0.8)' }}> {/* Slightly muted text for dark blue bg */}
            Argentina - Servicios para alojamientos en toda Latinoamérica y España
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Doubts Section */}
        <section id="faq" className="w-full py-12 md:py-20 bg-background">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">¿Dudas sobre el proceso?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Te cuento todo acá en este documento PDF, que incluye información ampliada de nuestros servicios.
            </p>
            <Button size="lg" className={`${darkButtonStyle} px-8 py-3`}>
              <Download className="mr-2 h-5 w-5" />
              Descargar PDF
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}

