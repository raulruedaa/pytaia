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
              <div key={topic.id} className="bg-gradient-to-br from-green-100 via-yellow-50 to-pink-100 rounded-lg shadow-lg">
                <button
                  onClick={() => toggleTopic(topic.id)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-pink-100 hover:shadow-md transition-all"
                >
                  <span className="text-lg font-bold text-green-800">{topic.name}</span>
                  {expandedTopics.includes(topic.id) ? (
                    <ChevronDown className="w-6 h-6 text-pink-600" />
                  ) : (
                    <ChevronRight className="w-6 h-6 text-green-600" />
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
