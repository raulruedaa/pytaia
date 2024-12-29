import React from 'react';
import { Header } from '../components/Header';
import { SubjectCard } from '../components/SubjectCard';
import { subjects } from '../data/subjects';
import { useNavigate } from 'react-router-dom';
import { Subject } from '../types';

export function SubjectsPage() {
  const navigate = useNavigate();

  const handleSubjectClick = (subject: Subject) => {
    navigate(`/subjects/${subject.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">All Subjects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {subjects.map((subject) => (
            <SubjectCard
              key={subject.id}
              subject={subject}
              onClick={handleSubjectClick}
            />
          ))}
        </div>
      </main>
    </div>
  );
}