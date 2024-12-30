export function getAllUniqueTags(exercises: { tags: string[] }[]): string[] {
  const tagSet = new Set<string>();
  exercises.forEach(exercise => {
    exercise.tags.forEach(tag => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
}

export function filterExercisesByTags(
  exercises: { tags: string[] }[],
  selectedTags: string[]
): { tags: string[] }[] {
  if (selectedTags.length === 0) return exercises;
  return exercises.filter(exercise =>
    selectedTags.some(tag => exercise.tags.includes(tag))
  );
}

export function filterTopicsByContent(
  topics: { exercises: { tags: string[] }[] }[],
  selectedTags: string[]
): typeof topics {
  return topics.filter(topic => {
    const filteredExercises = filterExercisesByTags(topic.exercises, selectedTags);
    return filteredExercises.length > 0;
  });
}