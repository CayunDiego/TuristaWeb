export type TemplateCategory = 'Hotel' | 'Travel Agency' | 'Tour Operator' | 'Restaurant' | 'Attraction';
export type TemplateDesignStyle = 'Modern' | 'Luxury' | 'Minimalist' | 'Adventurous' | 'Classic';

export interface Template {
  id: string;
  name: string;
  category: TemplateCategory;
  price: number;
  designStyle: TemplateDesignStyle;
  imageUrl: string;
  previewUrl: string;
  description: string;
  longDescription: string;
  features: string[];
  dataAiHint: string;
}

export interface FilterCriteria {
  category: TemplateCategory | 'All';
  designStyle: TemplateDesignStyle | 'All';
  // Add price range or other criteria if needed
}
