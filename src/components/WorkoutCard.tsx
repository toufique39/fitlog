import Link from "next/link";
import { Workout } from "../types/workout";


interface WorkoutCardProps {
  workout: Workout;
}

export default function WorkoutCard({
  workout,
}: WorkoutCardProps) {
  return (
    <Link
      href={`/workout/${workout.id}`}
      className="group block"
    >
      <article className="overflow-hidden rounded-md border border-[#242832] bg-[#151820] transition duration-200 hover:-translate-y-1 hover:border-[#343a45]">

        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden bg-[#111318]">
          <img
            src={workout.image}
            alt={workout.name}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          />

          {/* Difficulty */}
          <div className="absolute right-2 top-2">
            <span className="fitlog-outline-badge bg-[#090a0d]/80 text-white">
              {workout.difficulty}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">

          {/* Categories */}
          <div className="mb-3 flex flex-wrap gap-1.5">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="fitlog-accent-badge"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Name */}
          <h3 className="font-['Impact'] text-xl uppercase leading-none text-white">
            {workout.name}
          </h3>

          {/* Equipment */}
          <p className="mt-2 text-[11px] text-[#8b929f]">
            {workout.equipment}
          </p>

          {/* Stats */}
          <div className="mt-4 flex items-center justify-between border-t border-[#242832] pt-3 text-[10px] text-[#8b929f]">

            <span>
              ◷ {workout.duration} min
            </span>

            <span>
              🔥 {workout.caloriesBurned} kcal
            </span>

            <span className="text-white">
              ★ {workout.rating}
            </span>

          </div>

        </div>
      </article>
    </Link>
  );
}