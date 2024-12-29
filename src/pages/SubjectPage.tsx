import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { TopicList } from '../components/TopicList';
import { subjects } from '../data/subjects';

export function SubjectPage() {
  const { subjectId } = useParams();
  const subject = subjects.find((s) => s.id === subjectId);

  if (!subject) {
    return <div>Subject not found</div>;
  }

  const Icon = subject.icon;

  const handleTopicClick = (topicId: string) => {
    // Handle topic click - can be implemented later for navigation
    console.log('Topic clicked:', topicId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link 
            to="/subjects"
            className="text-blue-600 hover:text-blue-800 flex items-center gap-1 mb-4"
          >
            ← Back to Subjects
          </Link>
          
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-full bg-blue-50">
              <Icon className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">{subject.name}</h1>
          </div>
          
          <p className="mt-2 text-gray-600 max-w-3xl">
            {subject.description}
          </p>
        </div>

        {subject.topics.length > 0 ? (
          <TopicList topics={subject.topics} onTopicClick={handleTopicClick} />
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600">
              Content for this subject is coming soon!
            </p>
          </div>
        )}
      </main>
    </div>
  );
}