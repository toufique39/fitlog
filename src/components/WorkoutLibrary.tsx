"use client";

import { useEffect, useState } from "react";


import WorkoutCard from "./WorkoutCard";
import { Workout } from "../types/workout";
import { getAllWorkouts } from "../api/api";

export default function WorkoutLibrary() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadWorkouts = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getAllWorkouts();

        setWorkouts(data);
      } catch (error) {
        console.error(error);
        setError("Failed to load workouts.");
      } finally {
        setLoading(false);
      }
    };

    loadWorkouts();
  }, []);

  return (
    <section
      id="library"
      className="py-8 md:py-10"
    >
      <div className="fitlog-container">

        {/* Section Heading */}
        <div className="mb-6">
          <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#ccff00]">
            Workout Library
          </p>

          <h2 className="mt-2 font-['Impact'] text-4xl uppercase leading-none text-white md:text-5xl">
            The Library
          </h2>

          <p className="mt-2 text-xs text-[#8b929f]">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex min-h-72 items-center justify-center">
            <div className="flex flex-col items-center gap-4">

              <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#242832] border-t-[#ccff00]" />

              <p className="text-[10px] uppercase tracking-widest text-[#8b929f]">
                Loading workouts...
              </p>

            </div>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="flex min-h-72 items-center justify-center">
            <p className="text-sm text-red-400">
              {error}
            </p>
          </div>
        )}

        {/* Cards */}
        {!loading && !error && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {workouts.map((workout) => (
              <WorkoutCard
                key={workout.id}
                workout={workout}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}