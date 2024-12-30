import React, { useState, useMemo } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { Topic } from '../types';
import { ExerciseList } from './ExerciseList';
import { SearchBar } from './SearchBar';
import { TagFilter } from './TagFilter';
import { SearchResults } from './SearchResults';
import { getAllUniqueTags, filterExercisesByTags, filterTopicsByContent } from '../utils/tagUtils';

interface TopicListProps {
  topics: Topic[];
}

export function TopicList({ topics }: TopicListProps) {
  const [expandedTopics, setExpandedTopics] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allExercises = useMemo(() => 
    topics.flatMap(topic => topic.exercises),
    [topics]
  );

  const availableTags = useMemo(() => 
    getAllUniqueTags(allExercises),
    [allExercises]
  );

  const filteredTopics = useMemo(() => 
    filterTopicsByContent(topics, selectedTags),
    [topics, selectedTags]
  );

  const toggleTopic = (topicId: string) => {
    setExpandedTopics(prev =>
      prev.includes(topicId)
        ? prev.filter(id => id !== topicId)
        : [...prev, topicId]
    );
  };

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        <TagFilter
          availableTags={availableTags}
          selectedTags={selectedTags}
          onTagToggle={handleTagToggle}
        />
      </div>

      {searchQuery ? (
        <SearchResults 
          topics={filteredTopics} 
          searchQuery={searchQuery}
          selectedTags={selectedTags}
        />
      ) : (
        <div className="space-y-4">
          {filteredTopics.map((topic) => {
            const filteredExercises = filterExercisesByTags(topic.exercises, selectedTags);
            
            if (filteredExercises.length === 0) return null;

            return (
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
                      exercises={filteredExercises}
                      topicId={topic.id}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}