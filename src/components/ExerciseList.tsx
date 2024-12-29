import React from 'react';
import { Exercise } from '../types';
import { ArrowRight } from 'lucide-react';

interface ExerciseListProps {
  exercises: Exercise[];
}

export function ExerciseList({ exercises }: ExerciseListProps) {
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

  return (
    <div className="space-y-2">
      {exercises.map((exercise) => (
        <div
          key={exercise.id}
          className="flex items-center justify-between p-3 rounded-md hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center space-x-4">
            <h4 className="font-medium text-gray-900">{exercise.title}</h4>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(exercise.difficulty)}`}>
              {exercise.difficulty}
            </span>
          </div>
          <ArrowRight className="w-4 h-4 text-gray-400" />
        </div>
      ))}
    </div>
  );
}