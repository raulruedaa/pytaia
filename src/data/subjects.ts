import { Subject } from '../types';
import { Beaker, Brain, Calculator, Atom } from 'lucide-react';

export const subjects: Subject[] = [
  {
    id: 'fisica',
    name: 'Física',
    icon: Atom,
    description: 'Aprenda sobre conceitos físicos através dos exercícios resolvidos',
    topics: [
      {
        id: 'Dinamica-newtoniana',
        name: 'Dinâmica Newtoniana',
        exercises: [
          {
            id: 'F10101',
            title: 'Capítulo 1 - Grandezas físicas e operações com vetores',
            tags: ['Apostila 1'],
            videoId: 'https://www.youtube.com/embed/1ETOJloLK3Y?si=q2YXQ7GOWdGNYHpG',
            steps: [
              {
                id: '1',
                content: 'A ball is thrown with initial velocity of 20 m/s at an angle of 45°. Calculate its maximum height.',
                explanation: 'We will use the equation h = (v₀y)²/2g where v₀y = v₀sin(θ)'
              }
            ]
          },
          {
            id: 'F10102',
            title: "Capítulo 2 - Velocidade vetorial",
            tags: ['Apostila 1'],
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
        id: 'F10103',
        name: 'Composição de movimento',
        exercises: [
          {
            id: 'heat-transfer',
            title: 'Heat Transfer Problems',
            tags: ['thermal', 'energy', 'calculus'],
            steps: [
              {
                id: '1',
                content: 'Calculate the heat transfer in a system with initial temperature 20°C and final temperature 80°C.',
                explanation: 'Using Q = mcΔT to solve for heat transfer'
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
            title: 'Molar Mass Calculations',
            tags: ['fundamentals', 'calculations', 'periodic-table'],
            steps: [
              {
                id: '1',
                content: 'Calculate the molar mass of H2SO4',
                explanation: ''
              }
            ]
          },
          {
            id: 'limiting-reagent',
            title: 'Limiting Reagent Analysis',
            tags: ['reactions', 'calculations', 'advanced'],
            steps: [
              {
                id: '1',
                content: 'Determine the limiting reagent in a reaction between 3.0g of H2 and 32.0g of O2',
                explanation: 'Compare the molar ratios of reactants'
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
            title: 'Punnett Square Analysis',
            tags: ['heredity', 'fundamentals', 'probability'],
            steps: [
              {
                id: '1',
                content: 'Complete a Punnett square for a monohybrid cross',
                explanation: 'Understanding dominant and recessive alleles'
              }
            ]
          },
          {
            id: 'gene-expression',
            title: 'Gene Expression Pathways',
            tags: ['molecular', 'advanced', 'proteins'],
            steps: [
              {
                id: '1',
                content: 'Analyze the steps of protein synthesis from DNA to protein',
                explanation: 'Following transcription and translation processes'
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
            title: 'Derivative Techniques',
            tags: ['calculus', 'fundamentals', 'functions'],
            steps: [
              {
                id: '1',
                content: 'Find the derivative of f(x) = x² + 3x + 2',
                explanation: 'Using power rule and constant rule'
              }
            ]
          },
          {
            id: 'integration',
            title: 'Integration Methods',
            tags: ['calculus', 'advanced', 'functions'],
            steps: [
              {
                id: '1',
                content: 'Evaluate the integral of x²cos(x)',
                explanation: 'Using integration by parts'
              }
            ]
          }
        ]
      },
      {
        id: 'linear-algebra',
        name: 'Linear Algebra',
        exercises: [
          {
            id: 'matrix-operations',
            title: 'Matrix Operations',
            tags: ['matrices', 'fundamentals', 'vectors'],
            steps: [
              {
                id: '1',
                content: 'Multiply two 2x2 matrices',
                explanation: 'Using the row-column multiplication method'
              }
            ]
          }
        ]
      }
    ]
  }
];