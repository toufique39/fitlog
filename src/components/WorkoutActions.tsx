"use client";

import type { Workout } from "@/types/workout";
import { useFitLog } from "@/context/FitLogContext";

interface WorkoutActionsProps {
  workout: Workout;
}

export default function WorkoutActions({
  workout,
}: WorkoutActionsProps) {
  const {
    plan,
    saved,
    addToPlan,
    saveForLater,
  } = useFitLog();

  const isInPlan = plan.some(
    (item) => item.id === workout.id
  );

  const isSaved = saved.some(
    (item) => item.id === workout.id
  );

  const planIsFull = plan.length >= 5;

  return (
    <div className="mt-6 flex flex-col gap-2 sm:flex-row">

      {/* =========================
          Add To Today's Plan
      ========================== */}

      <button
        type="button"
        onClick={() => addToPlan(workout)}
        disabled={isInPlan || planIsFull}
        className={`fitlog-primary-btn flex-1 sm:flex-none ${
          isInPlan || planIsFull
            ? "cursor-not-allowed opacity-50"
            : ""
        }`}
      >
        {isInPlan
          ? "✓ In Today's Plan"
          : planIsFull
            ? "Plan Full"
            : "＋ Add to Today's Plan"}
      </button>


      {/* =========================
          Save For Later
      ========================== */}

      <button
        type="button"
        onClick={() => saveForLater(workout)}
        disabled={isSaved}
        className={`fitlog-secondary-btn flex-1 sm:flex-none ${
          isSaved
            ? "cursor-not-allowed opacity-50"
            : ""
        }`}
      >
        {isSaved
          ? "✓ Saved"
          : "♡ Save for Later"}
      </button>

    </div>
  );
}