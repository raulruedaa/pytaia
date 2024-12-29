import React from 'react';
import { Header } from '../components/Header';
import { BookOpen, Users, Trophy, Clock } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About EduSolve</h1>
          
          <div className="prose prose-lg">
            <p className="text-gray-600 mb-8">
              EduSolve is dedicated to making quality education accessible to everyone. 
              We provide step-by-step solutions to help students master complex subjects 
              through practical problem-solving.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Comprehensive Learning</h3>
                  <p className="text-gray-600">Detailed explanations for better understanding</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Expert Teachers</h3>
                  <p className="text-gray-600">Content created by experienced educators</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <Trophy className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Practice Makes Perfect</h3>
                  <p className="text-gray-600">Multiple exercises for each topic</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Learn at Your Pace</h3>
                  <p className="text-gray-600">Available 24/7, study when it suits you</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}