import React from 'react';
import { X } from 'lucide-react';

interface TagFilterProps {
  availableTags: string[];
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
}

export function TagFilter({ availableTags, selectedTags, onTagToggle }: TagFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {availableTags.map((tag) => (
        <button
          key={tag}
          onClick={() => onTagToggle(tag)}
          className={`px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-1.5 transition-colors
            ${selectedTags.includes(tag)
              ? 'bg-blue-100 text-blue-800 hover:bg-blue-200'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
        >
          {tag}
          {selectedTags.includes(tag) && (
            <X className="w-3 h-3" />
          )}
        </button>
      ))}
    </div>
  );
}