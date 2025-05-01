"use client";

import { useState, useEffect } from "react";
import { AppCard } from "./app-card";
import { SearchBar } from "./search-bar";
import { CategoryFilter } from "./category-filter";
import { apps } from "@/data/apps";

export function AppGrid() {
  const [filteredApps, setFilteredApps] = useState(apps);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Apply filters whenever search query or selected category changes
  useEffect(() => {
    let results = apps;

    // Filter by category if one is selected
    if (selectedCategory) {
      results = results.filter(app => app.category === selectedCategory);
    }

    // Then filter by search query if there is one
    if (searchQuery.trim()) {
      const lowercaseQuery = searchQuery.toLowerCase();
      results = results.filter((app) =>
        app.name.toLowerCase().includes(lowercaseQuery)
      );
    }

    setFilteredApps(results);
  }, [searchQuery, selectedCategory]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category);
  };

  return (
    <div className="w-full px-4 py-6 flex flex-col items-center">
      <div className="w-full max-w-5xl">
        <p className="text-center text-white/80 mb-6 max-w-3xl mx-auto">
          Unlock premium features, boost your progress, and elevate your experience effortlessly.
          AppSneak is your go-to tool for endless possibilities.
        </p>

        <SearchBar onSearch={handleSearch} />

        <CategoryFilter
          onCategorySelect={handleCategorySelect}
          selectedCategory={selectedCategory}
        />

        <div className="app-grid mt-8">
          {filteredApps.length > 0 ? (
            filteredApps.map((app) => <AppCard key={app.id} app={app} />)
          ) : (
            <div className="col-span-full text-center py-8 text-white/60">
              No apps found matching your criteria. Try adjusting your filters.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
