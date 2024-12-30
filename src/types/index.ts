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
  videoId?: string; // Optional YouTube video ID
  steps: Step[];
}

export interface Step {
  id: string;
  content: string;
}