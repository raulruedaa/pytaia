import React from 'react';
import { X } from 'lucide-react';

interface TagFilterProps {
  availableTags: string[];
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
}

export function TagFilter({ availableTags, selectedTags, onTagToggle }: TagFilterProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {availableTags.map((tag) => (
        <button
          key={tag}
          onClick={() => onTagToggle(tag)}
          className={`px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 transition-colors shadow-md
            ${selectedTags.includes(tag)
              ? 'bg-gradient-to-r from-pink-200 to-green-200 text-green-800 hover:from-green-200 hover:to-pink-200'
              : 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
            }`}
        >
          {tag}
          {selectedTags.includes(tag) && (
            <X className="w-4 h-4 text-red-600" />
          )}
        </button>
      ))}
    </div>
  );
}
