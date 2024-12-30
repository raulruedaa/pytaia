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
      className="bg-gradient-to-r from-green-100 to-pink-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center group"
    >
      <div className="">
        <Icon className="w-10 h-10 text-pink-600 group-hover:text-pink-800" />
      </div>
      <h3 className="mt-4 text-2xl font-bold text-pink-600 group-hover:text-pink-800">
        {subject.name}
      </h3>
      <p className="mt-2 text-pink-500 group-hover:text-pink-700">
        {subject.description}
      </p>
    </button>
  );
}
