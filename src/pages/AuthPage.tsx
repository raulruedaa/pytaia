import React from 'react';
import { Header } from '../components/Header';
import { AuthForm } from '../components/auth/AuthForm';

export function AuthPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-yellow-50 to-pink-100">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center justify-center min-h-[70vh]">
          <AuthForm />
        </div>
      </main>
    </div>
  );
}