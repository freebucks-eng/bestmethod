"use client";

import { Input } from "@/components/ui/input";
import { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onSearch(newQuery);
  };

  return (
    <div className="w-full max-w-xl mx-auto my-6 px-4">
      <Input
        type="text"
        placeholder="Search for Apps and Games..."
        className="bg-white/10 text-white border-none rounded-full h-12 text-center focus-visible:ring-offset-0 focus-visible:ring-1"
        value={query}
        onChange={handleSearch}
      />
    </div>
  );
}
