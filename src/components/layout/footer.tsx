
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Footer = () => {
  const darkButtonStyle = "bg-gray-800 text-white hover:bg-gray-700 shadow-md";
  return (
    <>
      <section className="w-full bg-secondary">
        <div className="bg-gray-300 flex items-center justify-center flex-col p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
            Banner convicente y creativo
          </h3>
          <div className="px-4">
            <Button size="lg" className={`${darkButtonStyle} px-8 py-4 text-lg mt-8 whitespace-normal sm:pt-4 sm:pb-4 h-auto	`}>
              <Phone className="mr-2 h-5 w-5" />
              ¡Agenda hoy tu llamada gratuita!
            </Button>
          </div>
        </div>
      </section>
      <footer className="border-t border-border/40 py-8 text-center text-muted-foreground bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p>&copy; 2025 Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
