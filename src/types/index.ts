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
  tags: string[];
  steps: Step[];
}

export interface Step {
  id: string;
  content: string;
  explanation: string;
}