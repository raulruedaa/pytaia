export interface Subject {
  id: string;
  name: string;
  icon: string;
  description: string;
  topics: Topic[];
}

export interface Topic {
  id: string;
  name: string;
  exercises: Exercise[];
}

export interface Exercise {
  id: string;
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  steps: Step[];
}

export interface Step {
  id: string;
  content: string;
  explanation: string;
}