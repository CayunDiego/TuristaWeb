
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ChevronRight, ChevronDown } from 'lucide-react';

interface ServicesSectionProps {
  masElegidoBadgeStyle: string;
  greenButtonStyle: string;
  whatsappLink: string;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({
  masElegidoBadgeStyle,
  greenButtonStyle,
  whatsappLink,
}) => {
  const faqItems = [
    {
      question: "¿Cuánto cuesta tener mi web?",
      answer: "El Pack Esencial cuesta USD 320 y el Pack Pro USD 395. La diferencia está en funciones extras y secciones adicionales para mostrar más detalles. Se inicia con 50%, se entrega con el otro 50%."
    },
    {
      question: "¿Está incluido el hosting y dominio? (La dirección de tu web en internet)",
      answer: "No, el hosting y dominio tienen un costo anual va desde de USD 60 a 120 dólares, y se pagan directamente a la empresa que los provee. Te acompañamos en este proceso para que entiendas tu nuevo local virtual de tu negocio."
    },
    {
      question: "¿La página es mía para siempre?",
      answer: "Sí, la página es tuya para siempre. Solo si querés hacer cambios o mejoras después, podés contratarme por horas y en una sola se pueden cambiar textos y algunas imágenes, por ejemplo."
    },
    {
      question: "¿Qué pasa si quiero que la web sea rápida y segura?",
      answer: "Trabajo junto a otros profesionales para que tu web esté rápida, funcional y cumpla con los mejores estándares."
    },
    {
      question: "¿Me van a ayudar a que mi negocio turístico crezca?",
      answer: "Mi compromiso es acompañarte para que tu presencia digital sea efectiva y que tu web te genere más consultas y reservas."
    }
  ];

  return (
    <section id="services" className="w-full py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tu propia web puede iniciarse hoy. Elegí lo que buscas!
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mx-auto">
          <Card className="text-left bg-card shadow-lg flex flex-col border border-[hsl(var(--section-teal-bg))]">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">Pack Esencial</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow space-y-4 text-foreground">
              <div>
                <p className="font-semibold text-foreground mb-2">Ideal si querés:</p>
                <ul className="list-disc list-inside space-y-1 pl-2 text-foreground">
                  <li>Estar online con una página clara, linda y fácil de usar</li>
                  <li>Mostrar tu alojamiento de forma profesional</li>
                  <li>Que te encuentren en Google</li>
                  <li>Recibir mensajes directos por WhatsApp</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-2">Incluye:</p>
                <ul className="list-disc list-inside space-y-1 pl-2 text-foreground">
                  <li>Diseño personalizado adaptado a tu negocio</li>
                  <li>Secciones: Inicio, Alojamiento, Servicios, Testimonios y Mapa</li>
                  <li>Botón de contacto directo por WhatsApp</li>
                  <li>Integración con redes sociales</li>
                  <li>Link opcional a plataformas de reservas como Booking</li>
                  <li>Optimización básica para buscadores</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="text-left bg-card relative shadow-lg border border-[hsl(var(--section-teal-bg))] flex flex-col">
            <div className={masElegidoBadgeStyle}>Más elegido</div>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">Pack Pro</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow space-y-4 text-foreground">
              <div>
                <p className="font-semibold text-foreground mb-2">Ideal si querés:</p>
                <ul className="list-disc list-inside space-y-1 pl-2 text-foreground">
                  <li>Mostrar más detalles y generar más consultas</li>
                  <li>Ofrecer más fotos y secciones extras (actividades, cómo llegar)</li>
                  <li>Facilitar el contacto por WhatsApp y formulario</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-2">Incluye todo lo del Pack Esencial, más:</p>
                <ul className="list-disc list-inside space-y-1 pl-2 text-foreground">
                  <li>Hasta 2 secciones extras personalizadas</li>
                  <li>Formulario de contacto adicional</li>
                  <li>SEO mejorado para destacar en buscadores</li>
                  <li>Diseño pensado para convertir visitas en reservas</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="mt-12 text-center">
          <Button size="lg" className={`${greenButtonStyle} px-8 py-3`} asChild>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              ¡Ya sé cuál Pack quiero!
            </a>
          </Button>
        </div>

        <div className="mt-12 flex justify-center">
          <Accordion type="single" collapsible className="w-full max-w-3xl">
            <AccordionItem
              value="item-1"
              className="border border-[#93D4FF] rounded-[24px] overflow-hidden"
            >
              <AccordionTrigger
                className="group bg-[#93D4FF] text-foreground font-semibold px-4 py-10 w-full no-underline hover:no-underline flex justify-center items-center data-[state=closed]:rounded-[24px] data-[state=open]:rounded-t-[23px] [&>svg.lucide-chevron-down]:hidden"
              >
                <div className="inline-block relative pb-1">
                  <div className="flex items-center text-foreground">
                    <ChevronRight className="h-6 w-6 mr-3 shrink-0 group-data-[state=closed]:block group-data-[state=open]:hidden" strokeWidth={6} />
                    <ChevronDown className="h-6 w-6 mr-3 shrink-0 group-data-[state=open]:block group-data-[state=closed]:hidden" strokeWidth={6} />
                    <span className="text-lg">Ver precios y dudas frecuentes de clientes</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-foreground"></div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="bg-background text-foreground pt-6 pb-8 px-6 md:px-10 shadow-inner data-[state=open]:rounded-b-[23px]">
                <div className="space-y-6">
                  {faqItems.map((item, index) => (
                    <div key={index}>
                      <h4 className="font-bold text-lg md:text-xl mb-1 text-foreground">{item.question}</h4>
                      <p className="text-sm md:text-base text-foreground/80 ml-1">{item.answer}</p>
                    </div>
                  ))}
                  <div className="mt-8 text-center">
                    <Button size="lg" className={`${greenButtonStyle} px-6 py-3`} asChild>
                      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                        Agenda una llamada corta
                      </a>
                    </Button>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};
export default ServicesSection;
