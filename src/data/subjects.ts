import { Subject } from '../types';
import { Beaker, Brain, Calculator, Atom } from 'lucide-react';

export const subjects: Subject[] = [
  {
    id: 'physics',
    name: 'Physics',
    icon: Atom,
    description: 'Master fundamental physics concepts through step-by-step problem solving',
    topics: [
      {
        id: 'mechanics',
        name: 'Mechanics',
        exercises: [
          {
            id: 'projectile-motion',
            title: 'Projectile Motion',
            difficulty: 'intermediate',
            steps: [
              {
                id: '1',
                content: 'A ball is thrown with initial velocity of 20 m/s at an angle of 45°. Calculate its maximum height.',
                explanation: 'We will use the equation h = (v₀y)²/2g where v₀y = v₀sin(θ)'
              }
            ]
          },
          {
            id: 'newtons-laws',
            title: 'Newton\'s Laws of Motion',
            difficulty: 'beginner',
            steps: [
              {
                id: '1',
                content: 'A 2kg block is pushed with a force of 10N. Calculate its acceleration.',
                explanation: 'Using F = ma, we can solve for acceleration'
              }
            ]
          }
        ]
      },
      {
        id: 'thermodynamics',
        name: 'Thermodynamics',
        exercises: [
          {
            id: 'heat-transfer',
            title: 'Heat Transfer',
            difficulty: 'intermediate',
            steps: [
              {
                id: '1',
                content: 'Calculate the heat transfer in a system',
                explanation: 'Using Q = mcΔT'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    icon: Beaker,
    description: 'Learn chemistry through interactive problem-solving and detailed explanations',
    topics: [
      {
        id: 'stoichiometry',
        name: 'Stoichiometry',
        exercises: [
          {
            id: 'molar-mass',
            title: 'Calculating Molar Mass',
            difficulty: 'beginner',
            steps: [
              {
                id: '1',
                content: 'Calculate the molar mass of H2SO4',
                explanation: 'Add up the atomic masses of all elements'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'biology',
    name: 'Biology',
    icon: Brain,
    description: 'Explore biological concepts with clear, visual explanations',
    topics: [
      {
        id: 'genetics',
        name: 'Genetics',
        exercises: [
          {
            id: 'punnett-squares',
            title: 'Punnett Squares',
            difficulty: 'beginner',
            steps: [
              {
                id: '1',
                content: 'Complete a Punnett square for a monohybrid cross',
                explanation: 'Understanding dominant and recessive alleles'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'mathematics',
    name: 'Mathematics',
    icon: Calculator,
    description: 'Build strong mathematical foundations with guided problem solutions',
    topics: [
      {
        id: 'calculus',
        name: 'Calculus',
        exercises: [
          {
            id: 'derivatives',
            title: 'Basic Derivatives',
            difficulty: 'intermediate',
            steps: [
              {
                id: '1',
                content: 'Find the derivative of f(x) = x² + 3x + 2',
                explanation: 'Using power rule and constant rule'
              }
            ]
          }
        ]
      }
    ]
  }
];