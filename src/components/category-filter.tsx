"use client";

import { Badge } from "@/components/ui/badge";
import { apps } from "@/data/apps";
import { useState, useEffect } from "react";

interface CategoryFilterProps {
  onCategorySelect: (category: string | null) => void;
  selectedCategory: string | null;
}

export function CategoryFilter({ onCategorySelect, selectedCategory }: CategoryFilterProps) {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    // Extract unique categories from apps
    const uniqueCategories = [...new Set(apps.map(app => app.category).filter(Boolean) as string[])].sort();
    setCategories(uniqueCategories);
  }, []);

  return (
    <div className="flex flex-wrap gap-2 justify-center my-4 max-w-2xl mx-auto px-4">
      <Badge
        variant={selectedCategory === null ? "default" : "outline"}
        className={`cursor-pointer text-sm py-1 px-3 ${selectedCategory === null ? 'bg-[#44b893]' : 'bg-[#1e2227] border-none text-gray-400 hover:bg-[#282d32]'}`}
        onClick={() => onCategorySelect(null)}
      >
        All
      </Badge>

      {categories.map((category) => (
        <Badge
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          className={`cursor-pointer text-sm py-1 px-3 ${selectedCategory === category ? 'bg-[#44b893]' : 'bg-[#1e2227] border-none text-gray-400 hover:bg-[#282d32]'}`}
          onClick={() => onCategorySelect(category)}
        >
          {category}
        </Badge>
      ))}
    </div>
  );
}
