import React from 'react';
import { Header } from '../components/Header';
import { BookOpen, Users, Trophy, Clock } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-yellow-50 to-pink-100">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-extrabold text-green-800 mb-8">About EduSolve</h1>
          
          <div className="prose prose-lg">
            <p className="text-green-700 mb-8">
              EduSolve is dedicated to making quality education accessible to everyone. 
              We provide step-by-step solutions to help students master complex subjects 
              through practical problem-solving.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-yellow-200 rounded-full">
                  <BookOpen className="w-8 h-8 text-green-800" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-900">Comprehensive Learning</h3>
                  <p className="text-green-700">Detailed explanations for better understanding</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 bg-yellow-200 rounded-full">
                  <Users className="w-8 h-8 text-green-800" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-900">Expert Teachers</h3>
                  <p className="text-green-700">Content created by experienced educators</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 bg-yellow-200 rounded-full">
                  <Trophy className="w-8 h-8 text-green-800" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-900">Practice Makes Perfect</h3>
                  <p className="text-green-700">Multiple exercises for each topic</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 bg-yellow-200 rounded-full">
                  <Clock className="w-8 h-8 text-green-800" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-900">Learn at Your Pace</h3>
                  <p className="text-green-700">Available 24/7, study when it suits you</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
