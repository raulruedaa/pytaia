import React from 'react';
import { Header } from '../components/Header';
import { PricingComparison } from '../components/subscription/PricingComparison';

export function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-yellow-50 to-pink-100">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-green-800 mb-4">Choose Your Plan</h1>
          <p className="text-lg text-green-600">Unlock your full learning potential with Pytaia Plus</p>
        </div>
        <PricingComparison />
      </main>
    </div>
  );
}