import React from 'react';
import { Exercise, Topic } from '../types';
import { ArrowRight } from 'lucide-react';

interface SearchResultsProps {
  topics: Topic[];
  searchQuery: string;
  selectedDifficulty: string;
}

export function SearchResults({ topics, searchQuery, selectedDifficulty }: SearchResultsProps) {
  const highlightText = (text: string) => {
    if (!searchQuery) return text;
    
    const parts = text.split(new RegExp(`(${searchQuery})`, 'gi'));
    return parts.map((part, i) => 
      part.toLowerCase() === searchQuery.toLowerCase() ? (
        <span key={i} className="bg-yellow-200">{part}</span>
      ) : (
        part
      )
    );
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const matchesSearch = (exercise: Exercise, topic: Topic) => {
    const query = searchQuery.toLowerCase();
    return (
      (exercise.title.toLowerCase().includes(query) ||
      topic.name.toLowerCase().includes(query)) &&
      (selectedDifficulty === 'all' || exercise.difficulty === selectedDifficulty)
    );
  };

  if (!searchQuery) return null;

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 space-y-4">
      <h3 className="font-medium text-gray-700 mb-2">Search Results</h3>
      {topics.map((topic) => {
        const matchingExercises = topic.exercises.filter(ex => matchesSearch(ex, topic));
        
        if (matchingExercises.length === 0) return null;

        return (
          <div key={topic.id} className="space-y-2">
            <div className="text-sm font-medium text-gray-500">
              {highlightText(topic.name)}
            </div>
            {matchingExercises.map((exercise) => (
              <div
                key={exercise.id}
                className="ml-4 flex items-center justify-between p-3 rounded-md hover:bg-gray-50 transition-colors border border-gray-100"
              >
                <div className="flex items-center space-x-4">
                  <h4 className="font-medium text-gray-900">
                    {highlightText(exercise.title)}
                  </h4>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(exercise.difficulty)}`}>
                    {exercise.difficulty}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}