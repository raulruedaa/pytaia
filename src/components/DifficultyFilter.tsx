import React from 'react';

interface DifficultyFilterProps {
  selectedDifficulty: string;
  onChange: (difficulty: string) => void;
}

export function DifficultyFilter({ selectedDifficulty, onChange }: DifficultyFilterProps) {
  const difficulties = ['all', 'beginner', 'intermediate', 'advanced'];

  return (
    <div className="flex gap-2">
      {difficulties.map((difficulty) => (
        <button
          key={difficulty}
          onClick={() => onChange(difficulty)}
          className={`px-4 py-2 rounded-lg text-sm font-medium capitalize ${
            selectedDifficulty === difficulty
              ? 'bg-blue-100 text-blue-800'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {difficulty}
        </button>
      ))}
    </div>
  );
}