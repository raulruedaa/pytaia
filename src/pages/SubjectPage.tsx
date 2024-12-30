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
    console.log('Topic clicked:', topicId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-yellow-50 to-pink-100">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link 
            to="/subjects"
            className="text-green-800 hover:text-pink-600 flex items-center gap-1 mb-4"
          >
            ← Back to Subjects
          </Link>
          
          <div className="flex items-center gap-4">
            <div className="">
              <Icon className="w-10 h-10 text-pink-600" />
            </div>
            <h1 className="text-4xl font-extrabold text-pink-600">{subject.name}</h1>
          </div>
          
          <p className="mt-4 text-green-700 max-w-3xl">
            {subject.description}
          </p>
        </div>

        {subject.topics.length > 0 ? (
          <TopicList topics={subject.topics} onTopicClick={handleTopicClick} />
        ) : (
          <div className="text-center py-12">
            <p className="text-pink-600">
              Content for this subject is coming soon!
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
