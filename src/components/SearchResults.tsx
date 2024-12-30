import React from 'react';
import { Exercise, Topic } from '../types';
import { ArrowRight } from 'lucide-react';
import { filterExercisesByTags } from '../utils/tagUtils';

interface SearchResultsProps {
  topics: Topic[];
  searchQuery: string;
  selectedTags: string[];
}

export function SearchResults({ topics, searchQuery, selectedTags }: SearchResultsProps) {
  const highlightText = (text: string) => {
    if (!searchQuery) return text;
    
    const parts = text.split(new RegExp(`(${searchQuery})`, 'gi'));
    return parts.map((part, i) => 
      part.toLowerCase() === searchQuery.toLowerCase() ? (
        <span key={i} className="bg-yellow-300 text-gray-800 font-semibold">{part}</span>
      ) : (
        part
      )
    );
  };

  const matchesSearch = (exercise: Exercise, topic: Topic) => {
    const query = searchQuery.toLowerCase();
    return (
      exercise.title.toLowerCase().includes(query) ||
      topic.name.toLowerCase().includes(query)
    );
  };

  if (!searchQuery) return null;

  return (
    <div className="bg-gradient-to-br from-green-100 via-yellow-50 to-pink-100 rounded-lg shadow-md p-6 space-y-4">
      <h3 className="font-bold text-green-700 mb-4">Search Results</h3>
      {topics.map((topic) => {
        const filteredExercises = filterExercisesByTags(topic.exercises, selectedTags);
        const matchingExercises = filteredExercises.filter(ex => matchesSearch(ex, topic));
        
        if (matchingExercises.length === 0) return null;

        return (
          <div key={topic.id} className="space-y-3">
            <div className="text-lg font-semibold text-pink-600">
              {highlightText(topic.name)}
            </div>
            {matchingExercises.map((exercise) => (
              <div
                key={exercise.id}
                className="ml-4 flex items-center justify-between p-4 rounded-lg hover:bg-yellow-100 transition-all border border-green-200"
              >
                <div className="flex items-center gap-4">
                  <h4 className="font-semibold text-green-800">
                    {highlightText(exercise.title)}
                  </h4>
                  <div className="flex gap-2">
                    {exercise.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-pink-200 text-pink-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-pink-600" />
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
