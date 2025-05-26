"use client";

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { generateWebsiteCopy, type GenerateWebsiteCopyInput } from '@/ai/flows/generate-website-copy';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Sparkles, Copy } from 'lucide-react';

const generateCopySchema = z.object({
  businessName: z.string().min(1, "Business name is required"),
  businessType: z.enum(["hotel", "travel agency", "tour operator", "restaurant", "attraction"]),
  targetAudience: z.string().min(1, "Target audience is required"),
  uniqueSellingPoints: z.string().min(1, "Unique selling points are required"),
  websiteSection: z.enum(["Homepage", "About Us", "Services", "Contact"]),
  tone: z.enum(["Professional", "Friendly", "Adventurous", "Luxurious", "Casual"]),
});

type GenerateCopyFormValues = z.infer<typeof generateCopySchema>;

interface AiContentGeneratorProps {
  templateName: string;
}

const AiContentGenerator: React.FC<AiContentGeneratorProps> = ({ templateName }) => {
  const [generatedCopy, setGeneratedCopy] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<GenerateCopyFormValues>({
    resolver: zodResolver(generateCopySchema),
    defaultValues: {
      businessName: '',
      businessType: 'hotel',
      targetAudience: '',
      uniqueSellingPoints: '',
      websiteSection: 'Homepage',
      tone: 'Friendly',
    },
  });

  const onSubmit: SubmitHandler<GenerateCopyFormValues> = async (data) => {
    setIsLoading(true);
    setGeneratedCopy(null);
    try {
      const input: GenerateWebsiteCopyInput = {
        ...data,
        // Map businessType to string as expected by the AI flow
        businessType: data.businessType.charAt(0).toUpperCase() + data.businessType.slice(1),
      };
      const result = await generateWebsiteCopy(input);
      setGeneratedCopy(result.websiteCopy);
      toast({
        title: "Content Generated!",
        description: "Your website copy has been successfully generated.",
      });
    } catch (error) {
      console.error("Failed to generate website copy:", error);
      toast({
        title: "Error Generating Content",
        description: "An error occurred while generating your website copy. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyText = () => {
    if (generatedCopy) {
      navigator.clipboard.writeText(generatedCopy);
      toast({
        title: "Copied to clipboard!",
      });
    }
  };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-primary" />
          AI Content Generator
        </CardTitle>
        <CardDescription>
          Fill in your business details to generate website copy for your '{templateName}' template.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="businessName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Business Name</FormLabel>
                    <FormControl>
                      <Input placeholder="E.g., The Grand Mountain Hotel" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="businessType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Business Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select business type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="hotel">Hotel</SelectItem>
                        <SelectItem value="travel agency">Travel Agency</SelectItem>
                        <SelectItem value="tour operator">Tour Operator</SelectItem>
                        <SelectItem value="restaurant">Restaurant</SelectItem>
                        <SelectItem value="attraction">Attraction</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="targetAudience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Target Audience</FormLabel>
                  <FormControl>
                    <Input placeholder="E.g., Families, adventure seekers, luxury travelers" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="uniqueSellingPoints"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Unique Selling Points (comma-separated)</FormLabel>
                  <FormControl>
                    <Textarea placeholder="E.g., Ocean views, eco-friendly, gourmet dining" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="websiteSection"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Website Section</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select website section" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Homepage">Homepage</SelectItem>
                        <SelectItem value="About Us">About Us</SelectItem>
                        <SelectItem value="Services">Services</SelectItem>
                        <SelectItem value="Contact">Contact</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="tone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tone of Voice</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select tone" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Professional">Professional</SelectItem>
                        <SelectItem value="Friendly">Friendly</SelectItem>
                        <SelectItem value="Adventurous">Adventurous</SelectItem>
                        <SelectItem value="Luxurious">Luxurious</SelectItem>
                        <SelectItem value="Casual">Casual</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" disabled={isLoading} className="w-full md:w-auto">
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Sparkles className="mr-2 h-4 w-4" />
              )}
              Generate Copy
            </Button>
          </form>
        </Form>

        {generatedCopy && (
          <div className="mt-8 p-6 border border-border rounded-md bg-muted/50 relative">
            <h3 className="text-lg font-semibold mb-2 text-foreground">Generated Copy:</h3>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
              onClick={handleCopyText}
              aria-label="Copy generated text"
            >
              <Copy className="h-5 w-5" />
            </Button>
            <p className="text-foreground whitespace-pre-wrap">{generatedCopy}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AiContentGenerator;
