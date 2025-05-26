
import Link from 'next/link';
import { Briefcase } from 'lucide-react'; 

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 text-2xl font-bold text-primary transition-colors hover:text-primary/90"
      aria-label="Webs para turismo Home"
    >
      <Briefcase className="h-7 w-7" /> 
      <span>Webs para turismo</span>
    </Link>
  );
};

export default Logo;
