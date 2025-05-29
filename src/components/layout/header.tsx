
import Link from 'next/link';
import { Menu as MenuIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Logo from '@/components/shared/logo'; // Import the Logo component

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo /> {/* Use the Logo component here */}
        
        {/* Mobile Menu */}
        {/* <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium mt-8 text-foreground">
                <Link href="#about" className="hover:text-primary">Sobre Mí</Link>
                <Link href="#services" className="hover:text-primary">Servicios</Link>
                <Link href="#contact" className="hover:text-primary">Contacto</Link>
                <Link href="#faq" className="hover:text-primary">FAQ</Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div> */}

        {/* Desktop Navigation (Kept simple as per image, could be expanded) */}
        {/* <nav className="hidden md:flex gap-6 items-center">
          <Button variant="ghost" className="text-foreground hover:text-primary">
            Menu
            <MenuIcon className="ml-2 h-5 w-5" />
          </Button>
        </nav> */}
      </div>
    </header>
  );
};

export default Header;
