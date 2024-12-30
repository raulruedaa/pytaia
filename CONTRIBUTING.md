# Contributing to EduSolve Content

This guide explains how to add new topics and exercises to EduSolve. All content is stored in `src/data/subjects.ts`.

## Structure Overview

```typescript
{
  id: 'physics',          // Unique identifier
  name: 'Physics',        // Display name
  icon: Atom,            // Icon from lucide-react
  description: '...',     // Brief description
  topics: [              // Array of topics
    {
      id: 'mechanics',    // Topic identifier
      name: 'Mechanics',  // Topic name
      exercises: [...]    // Array of exercises
    }
  ]
}
```

## Adding Content

### 1. Add a New Topic

To add a new topic to a subject, add an object to the `topics` array:

```typescript
{
  id: 'waves',              // Unique identifier for the topic
  name: 'Waves',           // Display name
  exercises: []            // Start with empty exercises array
}
```

### 2. Add Exercises

Add exercises to a topic's `exercises` array:

```typescript
{
  id: 'wave-interference',           // Unique identifier
  title: 'Wave Interference',        // Display title
  tags: ['waves', 'superposition'],  // Relevant tags for filtering
  videoId: 'dQw4w9WgXcQ',           // Optional YouTube video ID
  steps: [                          // Solution steps
    {
      id: '1',
      content: 'Two waves with amplitudes...',  // Problem statement
      explanation: 'Using the principle...'      // Solution explanation
    }
  ]
}
```

### Adding YouTube Videos

To add a video to an exercise:

1. Find the YouTube video you want to embed
2. Get the video ID from the URL:
   - For `https://www.youtube.com/watch?v=dQw4w9WgXcQ`, the ID is `dQw4w9WgXcQ`
   - For `https://youtu.be/dQw4w9WgXcQ`, the ID is also `dQw4w9WgXcQ`
3. Add the ID to the exercise object using the `videoId` property

## Best Practices

### Tags
- Use existing tags when possible for consistency
- Common tag categories:
  - Difficulty: 'fundamentals', 'advanced'
  - Topic areas: 'calculus', 'vectors', 'thermal'
  - Skills: 'problem-solving', 'analysis'
- Keep tags lowercase and use hyphens for multiple words

### Videos
- Choose high-quality educational content
- Ensure videos are relevant to the exercise
- Prefer shorter, focused videos (5-15 minutes)
- Check that videos are available in your region

### Content Quality
- Write clear, concise problem statements
- Provide detailed step-by-step explanations
- Include relevant formulas and concepts
- Use proper mathematical notation when needed

## Example

Here's a complete example of adding a new topic with an exercise:

```typescript
// In src/data/subjects.ts
{
  id: 'waves',
  name: 'Waves',
  exercises: [
    {
      id: 'standing-waves',
      title: 'Standing Waves on a String',
      tags: ['waves', 'fundamentals', 'harmonics'],
      videoId: 'dQw4w9WgXcQ',  // Example video ID
      steps: [
        {
          id: '1',
          content: 'Calculate the fundamental frequency of a string with length 2m and tension 40N.',
          explanation: 'Using f = (1/2L)√(T/μ) where L is length, T is tension, and μ is mass per unit length'
        }
      ]
    }
  ]
}
```

## Validation

Before submitting:
1. Ensure all IDs are unique
2. Verify all required fields are present
3. Check that tags are consistent with existing ones
4. Test that exercises appear in search results
5. Verify that tag filtering works correctly
6. Test that videos play correctly