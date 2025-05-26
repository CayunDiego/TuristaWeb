"use client";

import type { FilterCriteria, TemplateCategory, TemplateDesignStyle } from '@/lib/types';
import { templateCategories, templateDesignStyles } from '@/lib/mock-data';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { RotateCcw } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface TemplateFilterProps {
  filters: FilterCriteria;
  onFilterChange: (filters: FilterCriteria) => void;
}

const TemplateFilter: React.FC<TemplateFilterProps> = ({ filters, onFilterChange }) => {
  const handleCategoryChange = (value: string) => {
    onFilterChange({ ...filters, category: value as TemplateCategory | 'All' });
  };

  const handleStyleChange = (value: string) => {
    onFilterChange({ ...filters, designStyle: value as TemplateDesignStyle | 'All' });
  };

  const handleResetFilters = () => {
    onFilterChange({ category: 'All', designStyle: 'All' });
  };

  return (
    <Card className="shadow-md sticky top-20">
      <CardHeader>
        <CardTitle className="text-xl">Filter Templates</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="category-filter">Category</Label>
          <Select value={filters.category} onValueChange={handleCategoryChange}>
            <SelectTrigger id="category-filter" className="w-full">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Categories</SelectItem>
              {templateCategories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="style-filter">Design Style</Label>
          <Select value={filters.designStyle} onValueChange={handleStyleChange}>
            <SelectTrigger id="style-filter" className="w-full">
              <SelectValue placeholder="Select Design Style" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Styles</SelectItem>
              {templateDesignStyles.map((style) => (
                <SelectItem key={style} value={style}>
                  {style}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <Button onClick={handleResetFilters} variant="outline" className="w-full">
          <RotateCcw className="mr-2 h-4 w-4" /> Reset Filters
        </Button>
      </CardContent>
    </Card>
  );
};

export default TemplateFilter;
