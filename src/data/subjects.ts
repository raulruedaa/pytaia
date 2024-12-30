import { Subject } from '../types';
import { Beaker, Brain, Calculator, Atom } from 'lucide-react';

export const subjects: Subject[] = [
  {
    id: 'fisica',
    name: 'Física',
    icon: Atom,
    description: 'Desvende leis da mecânica, termodinâmica, eletromagnetismo e ótica com simulações e problemas detalhados. Aplique os conceitos no mundo real.',
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
        id: 'cinematica',
        name: 'Cinemática ',
        exercises: [
          {
            id: 'F10201',
            title: 'Capítulo 1 - Cinemática escalar conceitos fundamentais',
            tags: ['Apostila 1'],
            steps: [
              {
                id: '1',
                content: 'Calculate the heat transfer in a system with initial temperature 20°C and final temperature 80°C.',
                explanation: 'Using Q = mcΔT to solve for heat transfer'
              }
            ]
          },
          {
            id: 'F10202',
            title: 'Capítulo 2 - Movimento uniforme',
            tags: ['Apostila 1'],
            steps: [
              {
                id: '1',
                content: 'Calculate the heat transfer in a system with initial temperature 20°C and final temperature 80°C.',
                explanation: 'Using Q = mcΔT to solve for heat transfer'
              }
            ]
          }
        ]
      },
      {
        id: 'dinamica-energetica-e-tranformacoes-de-energia',
        name: 'Dinâmica energética e transformações de energia ',
        exercises: [
          {
            id: 'F10301',
            title: 'Capítulo 1 - Trabalho e energia: trabalho de uma força',
            tags: ['Apostila 1'],
            steps: [
              {
                id: '1',
                content: 'Calculate the heat transfer in a system with initial temperature 20°C and final temperature 80°C.',
                explanation: 'Using Q = mcΔT to solve for heat transfer'
              }
            ]
          },
          {
            id: 'F10302',
            title: 'Capítulo 2 - Trabalho e energia: teorema da energia cinética',
            tags: ['Apostila 1'],
            steps: [
              {
                id: '1',
                content: 'Calculate the heat transfer in a system with initial temperature 20°C and final temperature 80°C.',
                explanation: 'Using Q = mcΔT to solve for heat transfer'
              }
            ]
          }
        ]
      },
      {
        id: 'termofisica',
        name: 'Termofísica ',
        exercises: [
          {
            id: 'F10401',
            title: 'Capítulo 1 - Temperatura, calor e seus mecanismos de transferência',
            tags: ['Apostila 1'],
            steps: [
              {
                id: '1',
                content: 'Calculate the heat transfer in a system with initial temperature 20°C and final temperature 80°C.',
                explanation: 'Using Q = mcΔT to solve for heat transfer'
              }
            ]
          },
          {
            id: 'F10402',
            title: 'Capítulo 2 - Dilatação ou contração térmica dos sólidos e líquidos',
            tags: ['Apostila 1'],
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
    id: 'quimica',
    name: 'Química',
    icon: Beaker,
    description: 'Entenda matéria e reações com exercícios resolvidos, tabela periódica e estequiometria. Conecte a química ao seu dia a dia.',
    topics: [
      {
        id: 'atomistica',
        name: 'Atomística',
        exercises: [
          {
            id: 'Q10101',
            title: 'Capítulo 1 - Evolução dos modelos atômicos',
            tags: ['Apostila 1'],
            steps: [
              {
                id: '1',
                content: 'Calculate the molar mass of H2SO4',
                explanation: 'Add up the atomic masses of all elements'
              }
            ]
          },
          {
            id: 'Q10102',
            title: 'Capítulo 2 - Organização da tabela periódica dos elemnetos',
            tags: ['Apostila 1'],
            steps: [
              {
                id: '1',
                content: 'Determine the limiting reagent in a reaction between 3.0g of H2 and 32.0g of O2',
                explanation: 'Compare the molar ratios of reactants'
              }
            ]
          }
        ]
      },
      {
        id: 'quimica-geral',
        name: 'Química geral',
        exercises: [
          {
            id: 'Q10201',
            title: 'Capítulo 1 - Composição da matéria: estados físicos',
            tags: ['Apostila 1'],
            steps: [
              {
                id: '1',
                content: 'Calculate the molar mass of H2SO4',
                explanation: 'Add up the atomic masses of all elements'
              }
            ]
          },
          {
            id: 'Q10202',
            title: 'Capítulo 2 - Separação de misturas',
            tags: ['Apostila 1'],
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
    id: 'biologia',
    name: 'Biologia',
    icon: Brain,
    description: 'Descubra a vida: células, genética e ecologia. Domine evolução e fisiologia de forma prática e dinâmica.',
    topics: [
      {
        id: 'ecologia',
        name: 'Ecologia',
        exercises: [
          {
            id: 'B10101',
            title: 'Capítulo 1 - Introdução à ecologia',
            tags: ['Apostila 1'],
            steps: [
              {
                id: '1',
                content: 'Complete a Punnett square for a monohybrid cross',
                explanation: 'Understanding dominant and recessive alleles'
              }
            ]
          },
          {
            id: 'B10102',
            title: 'Capítulo 2 - Dinâmica de populações',
            tags: ['Apostila 1'],
            steps: [
              {
                id: '1',
                content: 'Analyze the steps of protein synthesis from DNA to protein',
                explanation: 'Following transcription and translation processes'
              }
            ]
          }
        ]
      },
      {
        id: 'biologia-celular',
        name: 'Biologia Celular',
        exercises: [
          {
            id: 'B10201',
            title: 'Capítulo 1 - Origem da vida e as primeiras células',
            tags: ['Apostila 1'],
            steps: [
              {
                id: '1',
                content: 'Complete a Punnett square for a monohybrid cross',
                explanation: 'Understanding dominant and recessive alleles'
              }
            ]
          },
          {
            id: 'B10202',
            title: 'Capítulo 2 - Composição química celular: compostos inorgânicos',
            tags: ['Apostila 1'],
            steps: [
              {
                id: '1',
                content: 'Analyze the steps of protein synthesis from DNA to protein',
                explanation: 'Following transcription and translation processes'
              }
            ]
          }
        ]
      },
      {
        id: 'zoologia',
        name: 'Zoologia',
        exercises: [
          {
            id: 'B10301',
            title: 'Capítulo 1 - Classificação biológica, nomenclatura científica e noções de sistemática filogenética',
            tags: ['Apostila 1'],
            steps: [
              {
                id: '1',
                content: 'Complete a Punnett square for a monohybrid cross',
                explanation: 'Understanding dominant and recessive alleles'
              }
            ]
          },
          {
            id: 'B10302',
            title: 'Capítulo 2 - Protozoários e protozooses',
            tags: ['Apostila 1'],
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
    id: 'matematica',
    name: 'Matemática',
    icon: Calculator,
    description: 'Aprenda álgebra, geometria e cálculo com tutoriais, exercícios e desafios lógicos. Fortaleça o raciocínio e ganhe autonomia.',
    topics: [
      {
        id: 'modelagem-numerica-de-problemas',
        name: 'Modelagem numérica de problemas',
        exercises: [
          {
            id: 'M10101',
            title: 'Capítulo 1 - Potências e radicais',
            tags: ['Apostila 1'],
            steps: [
              {
                id: '1',
                content: 'Find the derivative of f(x) = x² + 3x + 2',
                explanation: 'Using power rule and constant rule'
              }
            ]
          },
          {
            id: 'M10102',
            title: 'Razão e proporção',
            tags: ['Apostila 1'],
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
        id: 'modelagem-geometrica-de-problemas',
        name: 'Modelagem geométrica de problemas',
        exercises: [
          {
            id: 'M10201',
            title: 'Introdução à geometria plana',
            tags: ['Apostila 1'],
            steps: [
              {
                id: '1',
                content: 'Multiply two 2x2 matrices',
                explanation: 'Using the row-column multiplication method'
              }
            ]
          },
          {
            id: 'M10202',
            title: 'Ângulos em triângulos',
            tags: ['Apostila 1'],
            steps: [
              {
                id: '1',
                content: 'Multiply two 2x2 matrices',
                explanation: 'Using the row-column multiplication method'
              }
            ]
          }
        ]
      },
{
  id: 'modelagem-algebrica-de-problemas',
  name: 'Modelagem algébrica de problemas',
  exercises: [
    {
      id: 'M10301',
      title: 'Capítulo 1 - Técnicas algébricas',
      tags: ['Apostila 1'],
      steps: [
        {
          id: '1',
          content: 'Find the derivative of f(x) = x² + 3x + 2',
          explanation: 'Using power rule and constant rule'
        }
      ]
    },
    {
      id: 'M10302',
      title: 'Igualdades',
      tags: ['Apostila 1'],
      steps: [
        {
          id: '1',
          content: 'Evaluate the integral of x²cos(x)',
          explanation: 'Using integration by parts'
        }
      ]
    }
  ]
}
]
}
]