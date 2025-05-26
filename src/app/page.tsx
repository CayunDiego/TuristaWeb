
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';
import Link from 'next/link';
import {
  Phone,
  Sparkles,
  Eye,
  Smartphone,
  Search,
  ThumbsUp,
  Leaf,
  Gem,
  Star,
  Flame,
  Download,
  Mail,
  MapPin,
  MessageSquare,
} from 'lucide-react';

// Custom dark button style
const darkButtonStyle = "bg-gray-800 text-white hover:bg-gray-700 shadow-md";
const outlineButtonStyle = "border-gray-800 border-2 text-gray-800 bg-white hover:bg-gray-100 shadow-md";


export default function LandingPage() {
  return (
    <div className="flex flex-col items-center text-foreground">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-20 text-center bg-white">
        <div className="container mx-auto px-4">
          <p className="text-lg md:text-xl text-muted-foreground mb-4">
            Tu web es tu recepción 24/7, ¿cómo la estás haciendo brillar?
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl mx-auto">
            Tu sitio web propio para alojamientos que quieren <span className="text-primary">más reservas</span> y sin comisiones
          </h1>
          <Button size="lg" className={`${darkButtonStyle} px-8 py-6 text-lg`}>
            <Phone className="mr-2 h-5 w-5" />
            Agenda tu asesoría gratis
          </Button>
        </div>
      </section>

      {/* Image/Carousel Placeholder */}
      <section className="w-full py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-gray-300 h-64 md:h-96 flex items-center justify-center rounded-lg shadow-lg">
            <p className="text-xl text-gray-600">Foto video o carrousel de paisajes</p>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="w-full py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <Avatar className="w-32 h-32 md:w-40 md:h-40 shadow-lg">
            <AvatarImage src="https://placehold.co/200x200.png" alt="Katherine Rangel" data-ai-hint="profile woman" />
            <AvatarFallback>Mi foto</AvatarFallback>
          </Avatar>
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center md:justify-start">
              <Sparkles className="mr-2 h-7 w-7 text-primary" />
              Sobre mí
            </h2>
            <p className="text-lg mb-2 font-semibold">
              Hola, soy Katherine Rangel, diseñadora web con +5 años de experiencia.
            </p>
            <p className="text-muted-foreground max-w-xl">
              Antes creaba sitios para empresas de Real State. Hoy me especializo, con un equipo creativo, en el sector turístico ayudando a Hoteles, cabañas, glampings y casas de campo a tener una presencia digital estratégica, visual y funcional.
            </p>
          </div>
        </div>
      </section>

      {/* What you'll get Section */}
      <section className="w-full py-12 md:py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10">¿Qué obtendrás haciendo tu web conmigo?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {[
              { icon: Eye, text: "Que se ve genial." },
              { icon: Smartphone, text: "Que funciona en todos los dispositivos." },
              { icon: Search, text: "Que te encuentran en Google." },
              { icon: ThumbsUp, text: "Y que haga que tus huéspedes digan “¡quiero ir!”." },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center p-6 bg-card rounded-lg shadow-md">
                <item.icon className="h-10 w-10 text-primary mb-3" />
                <p className="font-medium">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="outline" className={`${outlineButtonStyle} px-8 py-3`}>Quiero una asesoría</Button>
            <Button size="lg" className={`${darkButtonStyle} px-8 py-3`}>Quiero mi web</Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
            <Leaf className="mr-2 h-7 w-7 text-primary" />
            Servicios
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Te ofrezco 3 planes simples para que elijas según lo que tu alojamiento necesita hoy para más reservas y sin comisiones.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-lg text-left bg-secondary/50">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Gem className="mr-2 h-6 w-6 text-blue-500" />
                  Plan Básico
                </CardTitle>
                <CardDescription className="font-semibold text-lg text-foreground">Presencia que se nota</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Una web de una página con todo lo esencial para que te encuentren y reserven fácil.</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg text-left bg-secondary/50">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Star className="mr-2 h-6 w-6 text-yellow-500" />
                  Plan Intermedio
                </CardTitle>
                <CardDescription className="font-semibold text-lg text-foreground">Reservas sin vueltas</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Ideal para mostrar cada espacio y recibir reservas directas sin depender de portales.</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg text-left bg-secondary/50">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Flame className="mr-2 h-6 w-6 text-red-500" />
                  Plan Premium
                </CardTitle>
                <CardDescription className="font-semibold text-lg text-foreground">Tu lugar, tu marca</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Diseño, estrategia, textos, posicionamiento y más para destacar online como merecés.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Payment/Support & CTA Section */}
      <section className="w-full py-12 md:py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg mb-2">Todos los planes se pagan 50% al inicio y 50% al entregar.</p>
          <p className="text-lg text-muted-foreground mb-2">Soporte opcional posterior disponible.</p>
          <p className="text-lg font-semibold mb-8">** Webs en Español e Inglés (opcional)</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="outline" className={`${outlineButtonStyle} px-8 py-3`}>Quiero una asesoría</Button>
            <Button size="lg" className={`${darkButtonStyle} px-8 py-3`}>Ya sé qué plan quiero</Button>
          </div>
        </div>
      </section>

      {/* Doubts Section */}
      <section id="faq" className="w-full py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Dudas sobre el proceso?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Te cuento todo acá en este documento PDF, que incluye información ampliada de nuestros servicios.
          </p>
          <Button size="lg" className={`${darkButtonStyle} px-8 py-3`}>
            <Download className="mr-2 h-5 w-5" />
            Descargar plan de acción en PDF
          </Button>
        </div>
      </section>

      {/* Ready to Start/Contact Section */}
      <section id="contact" className="w-full py-12 md:py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¡Estamos listos para iniciar!</h2>
          <p className="text-xl text-muted-foreground mb-2">¿Querés una web que trabaje por vos?</p>
          <p className="text-lg mb-8">Mandame un mensaje y vemos juntos qué plan te conviene:</p>
          <div className="space-y-6 max-w-md mx-auto text-left md:text-center">
            <Link href="#" className="flex items-center justify-center text-lg p-3 border rounded-lg hover:bg-green-500 hover:text-white transition-colors duration-200 shadow-sm">
              <MessageSquare className="mr-3 h-6 w-6" /> {/* Using MessageSquare for WhatsApp */}
              Link a WhatsApp
            </Link>
            <Link href="mailto:rangel.portafolio@gmail.com" className="flex items-center justify-center text-lg p-3 border rounded-lg hover:bg-blue-500 hover:text-white transition-colors duration-200 shadow-sm">
              <Mail className="mr-3 h-6 w-6" />
              rangel.portafolio@gmail.com
            </Link>
            <div className="flex items-center justify-center text-lg p-3 border rounded-lg bg-white shadow-sm">
              <MapPin className="mr-3 h-6 w-6 text-primary" />
              <span>Argentina - Servicios para alojamientos en toda Latinoamérica y España</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
