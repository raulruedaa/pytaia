import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative bg-gradient-to-r from-green-100 to-pink-100 p-2 rounded-xl shadow-lg">
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-pink-600 w-6 h-6" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search tropical vibes..."
        className="w-full pl-14 pr-4 py-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-green-800 placeholder-pink-400"
      />
    </div>
  );
}
