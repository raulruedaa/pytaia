import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { VideoEmbed } from '../components/VideoEmbed';
import { subjects } from '../data/subjects';
import { ChevronRight } from 'lucide-react';

export function ExercisePage() {
  const { subjectId, topicId, exerciseId } = useParams();
  
  const subject = subjects.find(s => s.id === subjectId);
  const topic = subject?.topics.find(t => t.id === topicId);
  const exercise = topic?.exercises.find(e => e.id === exerciseId);

  if (!exercise || !subject || !topic) {
    return <div>Exercise not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-yellow-50 to-pink-100">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-green-700 mb-4">
            <Link to="/subjects" className="hover:text-pink-600">Subjects</Link>
            <ChevronRight className="w-4 h-4 text-green-800" />
            <Link to={`/subjects/${subjectId}`} className="hover:text-pink-600">{subject.name}</Link>
            <ChevronRight className="w-4 h-4 text-green-800" />
            <span className="text-pink-600">{topic.name}</span>
          </div>

          <h1 className="text-4xl font-extrabold text-green-800 mb-6">{exercise.title}</h1>
          
          <div className="flex gap-2 mb-6">
            {exercise.tags.map(tag => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-sm font-semibold bg-yellow-200 text-yellow-800"
              >
                {tag}
              </span>
            ))}
          </div>

          {exercise.videoId && (
            <div className="mb-8">
              <VideoEmbed 
                videoId={exercise.videoId} 
                title={exercise.title} 
              />
            </div>
          )}

          <div className="space-y-8">
            {exercise.steps.map((step, index) => (
              <div key={step.id} className="bg-white rounded-lg shadow-md p-6 border border-green-300">
                <h3 className="font-bold text-pink-600 mb-4">
                  Step {index + 1}: Problem
                </h3>
                <p className="text-green-800 mb-6">{step.content}</p>
                
                <div className="bg-yellow-100 rounded-lg p-4">
                  <h4 className="font-medium text-green-800 mb-2">Explanation</h4>
                  <p className="text-pink-600">{step.explanation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
