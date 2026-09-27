"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import type { Workout } from "@/types/workout";
import { getAllWorkouts } from "@/api/api";
import WorkoutDetails from "@/components/WorkoutDetails";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function WorkoutDetailsPage() {
  const params = useParams();

  const id = params.id as string;
  const workoutId = Number(id);
  const invalidWorkoutId = Number.isNaN(workoutId);

  const [workout, setWorkout] = useState<Workout | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadWorkout = async () => {
      try {
        setLoading(true);
        setError("");

        const workouts = await getAllWorkouts();

        const foundWorkout = workouts.find(
          (item) => Number(item.id) === workoutId
        );

        if (!foundWorkout) {
          setError("Workout not found.");
          return;
        }

        setWorkout(foundWorkout);
      } catch (error) {
        console.error("Failed to load workout:", error);
        setError("Failed to load workout details.");
      } finally {
        setLoading(false);
      }
    };

    if (!invalidWorkoutId) {
      loadWorkout();
    }
  }, [invalidWorkoutId, workoutId]);

  if (invalidWorkoutId) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#090a0d] px-5 text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold">
            Workout Not Found
          </h1>

          <p className="mt-3 text-gray-400">
            Invalid workout ID.
          </p>
        </div>
      </main>
    );
  }

  // Loading
  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#090a0d] text-white">
        <div className="text-center">
          <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-[#242832] border-t-[#ccff00]" />

          <p className="mt-4 text-sm text-gray-400">
            Loading workout...
          </p>
        </div>
      </main>
    );
  }

  // Error
  if (error || !workout) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#090a0d] px-5 text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold">
            Workout Not Found
          </h1>

          <p className="mt-3 text-gray-400">
            {error}
          </p>
        </div>
      </main>
    );
  }

  // Workout data
 return (
  <div className="min-h-screen bg-[#090a0d]">

    <Navbar />

    <main className="py-6 md:py-8">
      <div className="fitlog-container">

        <Link
          href="/"
          className="mb-5 inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-wide text-[#5f6570] hover:text-white"
        >
          ← Back to Library
        </Link>

        <WorkoutDetails
          workout={workout}
        />

      </div>
    </main>

    <Footer />

  </div>
);
}