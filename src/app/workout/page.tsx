import { getWorkoutById } from "@/src/api/api";
import WorkoutActions from "@/src/components/WorkoutActions";
import Link from "next/link";

interface WorkoutDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function WorkoutDetailsPage({
  params,
}: WorkoutDetailsPageProps) {
  const { id } = await params;

  const workout = await getWorkoutById(Number(id));

  return (
    <main className="min-h-screen bg-[#090a0d] py-10">
      <div className="fitlog-container">

        <Link
          href="/"
          className="mb-6 inline-flex text-[10px] font-bold uppercase text-[#8b929f] hover:text-white"
        >
          ← Back to library
        </Link>

        <div className="grid gap-6 md:grid-cols-2">

          {/* Image */}
          <div className="overflow-hidden rounded-md border border-[#242832]">
            <img
              src={workout.image}
              alt={workout.name}
              className="h-full min-h-[420px] w-full object-cover"
            />
          </div>

          {/* Info */}
          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#ccff00]">
              Workout Details
            </p>

            <h1 className="mt-2 font-['Impact'] text-5xl uppercase leading-none text-white">
              {workout.name}
            </h1>

            <p className="mt-4 text-sm leading-7 text-[#8b929f]">
              {workout.description}
            </p>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="fitlog-accent-badge"
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/* Specs */}
            <div className="mt-6 overflow-hidden rounded-md border border-[#242832] bg-[#111318]">

              <div className="flex justify-between border-b border-[#242832] px-4 py-3 text-xs">
                <span className="text-[#8b929f]">
                  EQUIPMENT
                </span>

                <span className="text-white">
                  {workout.equipment}
                </span>
              </div>

              <div className="flex justify-between border-b border-[#242832] px-4 py-3 text-xs">
                <span className="text-[#8b929f]">
                  DIFFICULTY
                </span>

                <span className="text-white">
                  {workout.difficulty}
                </span>
              </div>

              <div className="flex justify-between border-b border-[#242832] px-4 py-3 text-xs">
                <span className="text-[#8b929f]">
                  SETS
                </span>

                <span className="text-white">
                  {workout.sets}
                </span>
              </div>

              <div className="flex justify-between border-b border-[#242832] px-4 py-3 text-xs">
                <span className="text-[#8b929f]">
                  REPS
                </span>

                <span className="text-white">
                  {workout.reps}
                </span>
              </div>

              <div className="flex justify-between border-b border-[#242832] px-4 py-3 text-xs">
                <span className="text-[#8b929f]">
                  DURATION
                </span>

                <span className="text-white">
                  {workout.duration} min
                </span>
              </div>

              <div className="flex justify-between border-b border-[#242832] px-4 py-3 text-xs">
                <span className="text-[#8b929f]">
                  CALORIES
                </span>

                <span className="text-white">
                  {workout.caloriesBurned} kcal
                </span>
              </div>

              <div className="flex justify-between px-4 py-3 text-xs">
                <span className="text-[#8b929f]">
                  RATING
                </span>

                <span className="text-white">
                  ★ {workout.rating}
                </span>
              </div>

            </div>
            {/* Instructions */}

<div className="mt-6">
  <h2 className="font-['Impact'] text-2xl uppercase text-white">
    Instructions
  </h2>

  <ol className="mt-3 space-y-3">
    {workout.instructions.map(
      (instruction, index) => (
        <li
          key={instruction}
          className="flex gap-3 text-xs leading-6 text-[#8b929f]"
        >
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#242832] text-[9px] text-[#ccff00]">
            {index + 1}
          </span>

          <span>
            {instruction}
          </span>
        </li>
      )
    )}
  </ol>
  <WorkoutActions workout={workout} />
</div>


          </div>

        </div>

      </div>
    </main>
  );
}