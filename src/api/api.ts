import type { Workout } from "../types/workout";

const API_BASE_URL =
  "https://api.abcz.workers.dev/api/fitlog";

export async function getAllWorkouts(): Promise<Workout[]> {
  const response = await fetch(API_BASE_URL, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch workouts: ${response.status}`
    );
  }

  const data: Workout[] = await response.json();

  return data;
}

export async function getWorkoutById(
  id: number
): Promise<Workout | null> {
  const workouts = await getAllWorkouts();

  const workout = workouts.find(
    (item) => Number(item.id) === id
  );

  return workout ?? null;
}