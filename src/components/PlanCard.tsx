"use client";

import Link from "next/link";
import { Workout } from "../types/workout";
import { useFitLog } from "../context/FitLogContext";


interface PlanCardProps {
  workout: Workout;
  isSaved?: boolean;
}

export default function PlanCard({
  workout,
  isSaved = false,
}: PlanCardProps) {
  const {
    completedIds,
    toggleDone,
    removeFromPlan,
    removeFromSaved,
  } = useFitLog();

  const isDone = completedIds.includes(workout.id);

  return (
    <article className="flex flex-col gap-4 rounded-md border border-[#242832] bg-[#111318] p-3 sm:flex-row sm:items-center">

      {/* Image */}
      <img
        src={workout.image}
        alt={workout.name}
        className="h-24 w-full rounded object-cover sm:h-16 sm:w-24"
      />

      {/* Main Info */}
      <div className="min-w-0 flex-1">

        <h3 className="font-['Impact'] text-lg uppercase leading-none text-white">
          {workout.name}
        </h3>

        <p className="mt-1 text-[10px] text-[#8b929f]">
          {workout.equipment}
        </p>

        <div className="mt-2 flex flex-wrap gap-3 text-[10px] text-[#8b929f]">
          <span>◷ {workout.duration} min</span>

          <span>
            🔥 {workout.caloriesBurned} kcal
          </span>

          <span className="text-white">
            ★ {workout.rating}
          </span>
        </div>

      </div>

      {/* Actions */}
      <div className="flex flex-wrap items-center gap-2">

        <Link
          href={`/workout/${workout.id}`}
          className="fitlog-secondary-btn"
        >
          View Details
        </Link>

        {!isSaved && (
          <button
            type="button"
            onClick={() => toggleDone(workout.id)}
            className={`fitlog-primary-btn ${
              isDone
                ? "opacity-60"
                : ""
            }`}
          >
            {isDone
              ? "✓ Done"
              : "✓ Mark as Done"}
          </button>
        )}

        <button
          type="button"
          onClick={() =>
            isSaved
              ? removeFromSaved(workout.id)
              : removeFromPlan(workout.id)
          }
          className="fitlog-secondary-btn px-3"
          aria-label={`Remove ${workout.name}`}
        >
          ×
        </button>

      </div>

    </article>
  );
}