import { mockTemplates } from '@/lib/mock-data';
import type { Template } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { formatPrice } from '@/lib/formatters';

interface CheckoutPageProps {
  params: { id: string };
}

async function getTemplateById(id: string): Promise<Template | undefined> {
  return mockTemplates.find((template) => template.id === id);
}

export default async function CheckoutPage({ params }: CheckoutPageProps) {
  const template = await getTemplateById(params.id);

  if (!template) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <ShoppingBag className="h-16 w-16 text-destructive mb-4" />
        <h1 className="text-3xl font-bold mb-2">Template Not Found</h1>
        <p className="text-muted-foreground mb-6">
          The template you're trying to purchase is unavailable.
        </p>
        <Button asChild>
          <Link href="/">Explore Other Templates</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-12">
      <Card className="w-full max-w-lg shadow-xl">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 p-3 bg-green-100 rounded-full w-fit">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          <CardTitle className="text-3xl font-bold">Checkout (Mock)</CardTitle>
          <CardDescription className="text-lg">
            You're about to "purchase" the '{template.name}' template.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-4 p-4 border rounded-lg">
            <div className="relative w-20 h-16 rounded-md overflow-hidden bg-muted">
                 <Image
                    src={template.imageUrl}
                    alt={template.name}
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint={template.dataAiHint}
                  />
            </div>
            <div>
              <h3 className="font-semibold">{template.name}</h3>
              <p className="text-sm text-muted-foreground">{template.category} - {template.designStyle}</p>
              <p className="text-lg font-bold text-primary mt-1">{formatPrice(template.price)}</p>
            </div>
          </div>
          <p className="text-sm text-center text-muted-foreground">
            This is a mock checkout page. In a real application, this is where you would enter payment details.
          </p>
          <Button className="w-full" size="lg" disabled>
            Proceed to Payment (Disabled)
          </Button>
          <Button variant="outline" className="w-full" asChild>
            <Link href="/">Continue Shopping</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export async function generateStaticParams() {
  return mockTemplates.map((template) => ({
    id: template.id,
  }));
}
