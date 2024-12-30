import React from 'react';
import { Header } from '../components/Header';
import { SubjectCard } from '../components/SubjectCard';
import { subjects } from '../data/subjects';
import { useNavigate } from 'react-router-dom';
import { Subject } from '../types';

export function HomePage() {
  const navigate = useNavigate();

  const handleSubjectClick = (subject: Subject) => {
    navigate(`/subjects/${subject.id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-yellow-50 to-pink-100">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-green-800 sm:text-5xl">
            Learn Through Solved Examples
          </h2>
          <p className="mt-4 text-lg text-green-700">
            Master concepts with our step-by-step solutions in various subjects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {subjects.map((subject) => (
            <SubjectCard
              key={subject.id}
              subject={subject}
              onClick={handleSubjectClick}
            />
          ))}
        </div>

        <section className="mt-24">
          <div className="bg-white rounded-2xl shadow-lg p-10 border border-yellow-200">
            <h3 className="text-3xl font-bold text-pink-600 mb-8">
              Why Choose EduSolve?
            </h3>
            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <h4 className="text-xl font-semibold text-green-800 mb-4">
                  Step-by-Step Solutions
                </h4>
                <p className="text-green-700">
                  Detailed explanations that break down complex problems into manageable steps
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-green-800 mb-4">
                  Multiple Subjects
                </h4>
                <p className="text-green-700">
                  Comprehensive coverage of Physics, Chemistry, Biology, and Mathematics
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-green-800 mb-4">
                  Learn at Your Pace
                </h4>
                <p className="text-green-700">
                  Access content anytime, anywhere, and progress at your own speed
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
