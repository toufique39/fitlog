"use client";

import { useFitLog } from "../context/FitLogContext";
import { Workout } from "../types/workout";





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

  return (
    <div className="mt-6 flex flex-wrap gap-2">

      <button
        type="button"
        onClick={() => addToPlan(workout)}
        disabled={isInPlan || plan.length >= 5}
        className={`fitlog-primary-btn ${
          isInPlan || plan.length >= 5
            ? "cursor-not-allowed opacity-50"
            : ""
        }`}
      >
        {isInPlan
          ? "✓ In Today's Plan"
          : "＋ Add to Today's Plan"}
      </button>

      <button
        type="button"
        onClick={() => saveForLater(workout)}
        disabled={isSaved}
        className={`fitlog-secondary-btn ${
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