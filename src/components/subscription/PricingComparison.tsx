import React from 'react';
import { Check, X } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const plans = [
  {
    name: 'Free',
    price: '0',
    features: [
      { name: 'Basic subject access', included: true },
      { name: 'Limited video explanations', included: true },
      { name: 'Basic practice exercises', included: true },
      { name: 'Progress tracking', included: false },
      { name: 'Detailed solutions', included: false },
      { name: 'Advanced topics', included: false },
      { name: 'Personalized learning path', included: false },
      { name: 'Download materials', included: false },
    ],
  },
  {
    name: 'Plus',
    price: '9.99',
    features: [
      { name: 'Basic subject access', included: true },
      { name: 'Limited video explanations', included: true },
      { name: 'Basic practice exercises', included: true },
      { name: 'Progress tracking', included: true },
      { name: 'Detailed solutions', included: true },
      { name: 'Advanced topics', included: true },
      { name: 'Personalized learning path', included: true },
      { name: 'Download materials', included: true },
    ],
  },
];

export function PricingComparison() {
  const { isAuthenticated, hasPlus, upgradeToPlan } = useAuth();
  const navigate = useNavigate();

  const handlePlanSelection = (planName: string) => {
    if (!isAuthenticated) {
      navigate('/auth');
      return;
    }
    
    if (planName === 'Plus' && !hasPlus) {
      upgradeToPlan();
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={`bg-white rounded-2xl shadow-xl p-8 border-2 ${
            plan.name === 'Plus' ? 'border-pink-300 relative overflow-hidden' : 'border-gray-100'
          }`}
        >
          {plan.name === 'Plus' && (
            <div className="absolute top-5 right-5">
              <span className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Popular
              </span>
            </div>
          )}

          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-green-800 mb-2">{plan.name}</h3>
            <div className="text-4xl font-bold text-pink-600 mb-4">
              ${plan.price}
              <span className="text-lg text-green-600">/month</span>
            </div>
          </div>

          <ul className="space-y-4 mb-8">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                {feature.included ? (
                  <Check className="w-5 h-5 text-pink-500" />
                ) : (
                  <X className="w-5 h-5 text-gray-300" />
                )}
                <span className={feature.included ? 'text-green-700' : 'text-gray-400'}>
                  {feature.name}
                </span>
              </li>
            ))}
          </ul>

          <button
            onClick={() => handlePlanSelection(plan.name)}
            className={`w-full py-3 rounded-lg font-semibold transition-all shadow-md ${
              plan.name === 'Plus'
                ? 'bg-gradient-to-r from-pink-500 to-yellow-500 text-white hover:from-yellow-500 hover:to-pink-500'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {plan.name === 'Plus' ? 'Get Plus Now' : 'Start Free'}
          </button>
        </div>
      ))}
    </div>
  );
}