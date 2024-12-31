import React from 'react';
import { Check } from 'lucide-react';

export function PricingCard() {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-pink-200 max-w-sm">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-green-800 mb-2">Plus Plan</h3>
        <div className="text-4xl font-bold text-pink-600 mb-4">
          $9.99<span className="text-lg text-green-600">/month</span>
        </div>
      </div>

      <ul className="space-y-4 mb-8">
        {[
          'Access to all subjects',
          'Detailed video explanations',
          'Step-by-step solutions',
          'Practice exercises',
          'Progress tracking'
        ].map((feature, index) => (
          <li key={index} className="flex items-center gap-3 text-green-700">
            <Check className="w-5 h-5 text-pink-500" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button className="w-full py-3 bg-gradient-to-r from-pink-500 to-yellow-500 text-white rounded-lg font-semibold hover:from-yellow-500 hover:to-pink-500 transition-all shadow-md">
        Get Plus Now
      </button>
    </div>
  );
}