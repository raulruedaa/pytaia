import React from 'react';
import { Subject } from '../types';

interface SubjectCardProps {
  subject: Subject;
  onClick: (subject: Subject) => void;
}

export function SubjectCard({ subject, onClick }: SubjectCardProps) {
  const Icon = subject.icon;
  
  return (
    <button
      onClick={() => onClick(subject)}
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center group"
    >
      <div className="p-4 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
        <Icon className="w-8 h-8 text-blue-600" />
      </div>
      <h3 className="mt-4 text-xl font-semibold text-gray-800">{subject.name}</h3>
      <p className="mt-2 text-gray-600 text-sm">{subject.description}</p>
    </button>
  );
}