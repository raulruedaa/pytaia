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
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-yellow-50 to-pink-100">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-extrabold text-green-800 mb-10 text-center">All Subjects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
