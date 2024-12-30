import React from 'react';
import { Exercise } from '../types';
import { ArrowRight } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

interface ExerciseListProps {
  exercises: Exercise[];
  topicId: string;
}

export function ExerciseList({ exercises, topicId }: ExerciseListProps) {
  const navigate = useNavigate();
  const { subjectId } = useParams();

  const handleExerciseClick = (exerciseId: string) => {
    navigate(`/subjects/${subjectId}/${topicId}/${exerciseId}`);
  };

  return (
    <div className="space-y-2">
      {exercises.map((exercise) => (
        <button
          key={exercise.id}
          onClick={() => handleExerciseClick(exercise.id)}
          className="w-full flex items-center justify-between p-3 rounded-md hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-4">
            <h4 className="font-medium text-gray-900">{exercise.title}</h4>
            <div className="flex gap-2">
              {exercise.tags.map(tag => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-gray-400" />
        </button>
      ))}
    </div>
  );
}