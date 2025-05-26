import { mockTemplates } from '@/lib/mock-data';
import type { Template } from '@/lib/types';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import AiContentGenerator from '@/components/ai/ai-content-generator';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Palette, ShoppingCart, Tag } from 'lucide-react';
import { formatPrice } from '@/lib/formatters';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

interface TemplateDetailPageProps {
  params: { id: string };
}

// This function would typically fetch data from a DB or API
async function getTemplateById(id: string): Promise<Template | undefined> {
  return mockTemplates.find((template) => template.id === id);
}

export default async function TemplateDetailPage({ params }: TemplateDetailPageProps) {
  const template = await getTemplateById(params.id);

  if (!template) {
    return (
      <div className="text-center py-10">
        <h1 className="text-2xl font-semibold">Template not found</h1>
        <p className="text-muted-foreground mt-2">
          The template you are looking for does not exist.
        </p>
        <Button asChild className="mt-4">
          <Link href="/">Back to Gallery</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {/* Template Preview Section */}
      <section>
        <Card className="overflow-hidden shadow-xl">
          <CardHeader className="p-0">
             <div className="aspect-[16/9] relative w-full bg-muted">
              <Image
                src={template.previewUrl}
                alt={`${template.name} preview`}
                layout="fill"
                objectFit="cover"
                data-ai-hint={`${template.dataAiHint} website`}
                priority
              />
            </div>
          </CardHeader>
          <CardContent className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
              <CardTitle className="text-3xl md:text-4xl font-bold mb-2 md:mb-0">{template.name}</CardTitle>
              <p className="text-3xl font-bold text-primary">{formatPrice(template.price)}</p>
            </div>
            <CardDescription className="text-lg text-muted-foreground mb-6">{template.longDescription}</CardDescription>
            <div className="flex flex-wrap gap-3 mb-6">
              <Badge variant="secondary" className="text-sm px-3 py-1 flex items-center gap-1.5">
                <Tag className="h-4 w-4" /> {template.category}
              </Badge>
              <Badge variant="outline" className="text-sm px-3 py-1 flex items-center gap-1.5">
                <Palette className="h-4 w-4" /> {template.designStyle}
              </Badge>
            </div>

            <h3 className="text-xl font-semibold mb-3 text-foreground">Key Features:</h3>
            <ul className="list-none space-y-2 mb-6">
              {template.features.map((feature, index) => (
                <li key={index} className="flex items-center text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="p-6 md:p-8 bg-muted/30">
             <Button asChild size="lg" className="w-full md:w-auto">
              <Link href={`/checkout/${template.id}`}>
                <ShoppingCart className="mr-2 h-5 w-5" /> Purchase This Template
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </section>

      <Separator />

      {/* AI Content Generator Section */}
      <section>
        <AiContentGenerator templateName={template.name} />
      </section>
    </div>
  );
}

// Generate static paths for each template if using SSG
export async function generateStaticParams() {
  return mockTemplates.map((template) => ({
    id: template.id,
  }));
}
