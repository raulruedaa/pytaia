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
    <div className="space-y-4">
      {exercises.map((exercise) => (
        <button
          key={exercise.id}
          onClick={() => handleExerciseClick(exercise.id)}
          className="w-full flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-green-100 to-pink-100 hover:from-pink-100 hover:to-green-100 transition-all shadow-md"
        >
          <div className="flex items-center gap-6">
            <h4 className="font-semibold text-green-800 text-lg">{exercise.title}</h4>
            <div className="flex gap-3">
              {exercise.tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-sm font-medium bg-pink-200 text-pink-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-green-600" />
        </button>
      ))}
    </div>
  );
}
