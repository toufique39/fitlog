import type { Workout } from "@/types/workout";
import WorkoutActions from "./WorkoutActions";

interface WorkoutDetailsProps {
  workout: Workout;
}

export default function WorkoutDetails({
  workout,
}: WorkoutDetailsProps) {
  return (
    <section className="overflow-hidden rounded-md border border-[#242832] bg-[#111318]">
      <div className="grid md:grid-cols-2">

        {/* =========================
            LEFT SIDE - IMAGE
        ========================== */}

        <div className="bg-[#151820]">
          <img
            src={workout.image}
            alt={workout.name}
            className="h-[320px] w-full object-cover sm:h-[420px] md:h-full md:min-h-[620px]"
          />
        </div>

        {/* =========================
            RIGHT SIDE - CONTENT
        ========================== */}

        <div className="p-5 sm:p-6 md:p-8 lg:p-10">

          {/* Eyebrow */}

          <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#ccff00]">
            Workout Details
          </p>

          {/* Title */}

          <h1 className="mt-2 font-['Impact'] text-4xl uppercase leading-[0.9] tracking-tight text-white sm:text-5xl md:text-6xl">
            {workout.name}
          </h1>

          {/* Description */}

          <p className="mt-4 max-w-xl text-[11px] leading-6 text-[#8b929f] sm:text-xs md:text-sm">
            {workout.description}
          </p>

          {/* =========================
              MUSCLE GROUP TAGS
          ========================== */}

          <div className="mt-4 flex flex-wrap gap-1.5">
            {workout.muscleGroups.map(
              (muscleGroup) => (
                <span
                  key={muscleGroup}
                  className="fitlog-accent-badge"
                >
                  {muscleGroup}
                </span>
              )
            )}
          </div>

          {/* =========================
              KEY SPECS
          ========================== */}

          <div className="mt-6 overflow-hidden rounded-md border border-[#242832] bg-[#0d0f13]">

            {/* Equipment */}

            <div className="flex items-center justify-between gap-4 border-b border-[#242832] px-4 py-2.5">

              <span className="text-[9px] font-bold uppercase text-[#5f6570]">
                Equipment
              </span>

              <span className="text-right text-[10px] text-white">
                {workout.equipment}
              </span>

            </div>

            {/* Difficulty */}

            <div className="flex items-center justify-between gap-4 border-b border-[#242832] px-4 py-2.5">

              <span className="text-[9px] font-bold uppercase text-[#5f6570]">
                Difficulty
              </span>

              <span className="text-right text-[10px] text-white">
                {workout.difficulty}
              </span>

            </div>

            {/* Sets */}

            <div className="flex items-center justify-between gap-4 border-b border-[#242832] px-4 py-2.5">

              <span className="text-[9px] font-bold uppercase text-[#5f6570]">
                Sets
              </span>

              <span className="text-right text-[10px] text-white">
                {workout.sets}
              </span>

            </div>

            {/* Reps */}

            <div className="flex items-center justify-between gap-4 border-b border-[#242832] px-4 py-2.5">

              <span className="text-[9px] font-bold uppercase text-[#5f6570]">
                Reps
              </span>

              <span className="text-right text-[10px] text-white">
                {workout.reps}
              </span>

            </div>

            {/* Duration */}

            <div className="flex items-center justify-between gap-4 border-b border-[#242832] px-4 py-2.5">

              <span className="text-[9px] font-bold uppercase text-[#5f6570]">
                Duration
              </span>

              <span className="text-right text-[10px] text-white">
                {workout.duration} min
              </span>

            </div>

            {/* Calories */}

            <div className="flex items-center justify-between gap-4 border-b border-[#242832] px-4 py-2.5">

              <span className="text-[9px] font-bold uppercase text-[#5f6570]">
                Calories
              </span>

              <span className="text-right text-[10px] text-white">
                {workout.caloriesBurned} kcal
              </span>

            </div>

            {/* Rating */}

            <div className="flex items-center justify-between gap-4 px-4 py-2.5">

              <span className="text-[9px] font-bold uppercase text-[#5f6570]">
                Rating
              </span>

              <span className="text-right text-[10px] text-white">
                ★ {workout.rating}
              </span>

            </div>

          </div>

          {/* =========================
              INSTRUCTIONS
          ========================== */}

          <div className="mt-6">

            <h2 className="font-['Impact'] text-xl uppercase leading-none text-white md:text-2xl">
              Instructions
            </h2>

            <ol className="mt-4 space-y-2.5">

              {workout.instructions.map(
                (instruction, index) => (
                  <li
                    key={`${workout.id}-${index}`}
                    className="flex gap-3"
                  >

                    {/* Number */}

                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#242832] text-[9px] font-bold text-[#ccff00]">
                      {index + 1}
                    </span>

                    {/* Instruction */}

                    <span className="text-[11px] leading-5 text-[#8b929f] md:text-xs">
                      {instruction}
                    </span>

                  </li>
                )
              )}

            </ol>

          </div>

          {/* =========================
              ACTION BUTTONS
          ========================== */}

          <WorkoutActions
            workout={workout}
          />

        </div>

      </div>
    </section>
  );
}