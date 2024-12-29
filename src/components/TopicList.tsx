import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { Topic } from '../types';
import { ExerciseList } from './ExerciseList';
import { SearchBar } from './SearchBar';
import { DifficultyFilter } from './DifficultyFilter';
import { SearchResults } from './SearchResults';

interface TopicListProps {
  topics: Topic[];
  onTopicClick: (topicId: string) => void;
}

export function TopicList({ topics, onTopicClick }: TopicListProps) {
  const [expandedTopics, setExpandedTopics] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const toggleTopic = (topicId: string) => {
    setExpandedTopics(prev =>
      prev.includes(topicId)
        ? prev.filter(id => id !== topicId)
        : [...prev, topicId]
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>
        <DifficultyFilter 
          selectedDifficulty={selectedDifficulty} 
          onChange={setSelectedDifficulty} 
        />
      </div>

      {searchQuery ? (
        <SearchResults 
          topics={topics} 
          searchQuery={searchQuery}
          selectedDifficulty={selectedDifficulty}
        />
      ) : (
        <div className="space-y-4">
          {topics.map((topic) => (
            <div key={topic.id} className="bg-white rounded-lg shadow-sm">
              <button
                onClick={() => toggleTopic(topic.id)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50"
              >
                <span className="text-lg font-medium text-gray-900">{topic.name}</span>
                {expandedTopics.includes(topic.id) ? (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-gray-500" />
                )}
              </button>
              
              {expandedTopics.includes(topic.id) && (
                <div className="px-6 pb-4">
                  <ExerciseList 
                    exercises={topic.exercises.filter(ex => 
                      selectedDifficulty === 'all' || ex.difficulty === selectedDifficulty
                    )} 
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}