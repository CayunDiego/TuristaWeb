import type { Template } from '@/lib/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Tag, Palette } from 'lucide-react';
import { formatPrice } from '@/lib/formatters';
import { Badge } from '@/components/ui/badge';

interface TemplateCardProps {
  template: Template;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ template }) => {
  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="p-0">
        <div className="aspect-[3/2] relative w-full">
          <Image
            src={template.imageUrl}
            alt={template.name}
            layout="fill"
            objectFit="cover"
            data-ai-hint={template.dataAiHint}
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-xl mb-2">{template.name}</CardTitle>
        <CardDescription className="mb-4 text-muted-foreground line-clamp-2">{template.description}</CardDescription>
        <div className="flex flex-wrap gap-2 mb-2">
          <Badge variant="secondary" className="flex items-center gap-1">
            <Tag className="h-3 w-3" /> {template.category}
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
             <Palette className="h-3 w-3" /> {template.designStyle}
          </Badge>
        </div>
      </CardContent>
      <CardFooter className="p-6 flex justify-between items-center">
        <p className="text-lg font-semibold text-primary">{formatPrice(template.price)}</p>
        <Button asChild variant="default" size="sm">
          <Link href={`/templates/${template.id}`}>
            View Details <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TemplateCard;
