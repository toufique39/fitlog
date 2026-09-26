"use client";

import {
  useMemo,
  useState,
} from "react";

import Link from "next/link";
import { useFitLog } from "@/src/context/FitLogContext";
import Navbar from "@/src/components/Navbar";
import PlanCard from "@/src/components/PlanCard";
import Footer from "@/src/components/Footer";



type Tab = "plan" | "saved";

type SortBy =
  | "duration"
  | "calories"
  | "rating";

type SortDropdownProps = {
  sortBy: SortBy;
  onSortChange: (value: SortBy) => void;
};

function SortDropdown({
  sortBy,
  onSortChange,
}: SortDropdownProps) {
  return (
    <div className="flex items-center gap-2 rounded border border-[#242832] bg-[#111318] px-3 py-2">
      <label
        htmlFor="sort-plan"
        className="text-[8px] font-bold uppercase tracking-[0.15em] text-[#5f6570]"
      >
        Sort
      </label>

      <select
        id="sort-plan"
        value={sortBy}
        onChange={(event) =>
          onSortChange(event.target.value as SortBy)
        }
        className="bg-transparent text-[9px] font-bold uppercase text-white outline-none"
      >
        <option value="duration" className="bg-[#111318] text-white">
          Duration
        </option>
        <option value="calories" className="bg-[#111318] text-white">
          Calories
        </option>
        <option value="rating" className="bg-[#111318] text-white">
          Rating
        </option>
      </select>
    </div>
  );
}

export default function MyPlanPage() {
  const {
    plan,
    saved,
  } = useFitLog();

  const [activeTab, setActiveTab] =
    useState<Tab>("plan");

  const [sortBy, setSortBy] =
    useState<SortBy>("duration");

  const currentList =
    activeTab === "plan"
      ? plan
      : saved;

  const sortedList = useMemo(() => {
    return [...currentList].sort(
      (a, b) => {
        if (sortBy === "duration") {
          return a.duration - b.duration;
        }

        if (sortBy === "calories") {
          return (
            a.caloriesBurned -
            b.caloriesBurned
          );
        }

        return b.rating - a.rating;
      }
    );
  }, [currentList, sortBy]);

  // Metrics
  const totalExercises = plan.length;

  const totalMinutes = plan.reduce(
    (total, workout) =>
      total + workout.duration,
    0
  );

  const totalCalories = plan.reduce(
    (total, workout) =>
      total + workout.caloriesBurned,
    0
  );

  return (
    <div className="min-h-screen bg-[#090a0d]">

      <Navbar />

      <main className="py-8 md:py-10">

        <div className="fitlog-container">

          {/* Page Heading */}
          <div className="mb-6">

            <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#ccff00]">
              Workout Tracker
            </p>

           <h1 className="mt-2 font-['Impact'] text-4xl uppercase leading-[0.9] tracking-tight text-white sm:text-5xl md:text-6xl">
              My Plan
            </h1>

            <p className="mt-2 text-xs text-[#8b929f]">
              Cap of five lifts for today.
              Finish them, then load more.
            </p>

          </div>

          {/* Metrics */}
          <div className="mb-5 grid grid-cols-3 overflow-hidden rounded-md border border-[#242832] bg-[#111318]">

            <div className="border-r border-[#242832] p-4">
              <p className="text-[8px] uppercase text-[#5f6570]">
                Exercises
              </p>

              <p className="mt-2 font-['Impact'] text-2xl text-[#ccff00]">
                {totalExercises}
              </p>
            </div>

            <div className="border-r border-[#242832] p-4">
              <p className="text-[8px] uppercase text-[#5f6570]">
                Minutes
              </p>

              <p className="mt-2 font-['Impact'] text-2xl text-white">
                {totalMinutes}
              </p>
            </div>

            <div className="p-4">
              <p className="text-[8px] uppercase text-[#5f6570]">
                Calories
              </p>

              <p className="mt-2 font-['Impact'] text-2xl text-white">
                {totalCalories}
              </p>
            </div>

          </div>

          {/* Tabs + Sort */}
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">

            <div className="flex rounded border border-[#242832] bg-[#111318] p-1">

              <button
                type="button"
                onClick={() =>
                  setActiveTab("plan")
                }
                className={`px-3 py-2 text-[9px] font-bold uppercase ${
                  activeTab === "plan"
                    ? "bg-[#ccff00] text-[#090a0d]"
                    : "text-[#8b929f]"
                }`}
              >
                Todays Plan
              </button>

              <button
                type="button"
                onClick={() =>
                  setActiveTab("saved")
                }
                className={`px-3 py-2 text-[9px] font-bold uppercase ${
                  activeTab === "saved"
                    ? "bg-[#ccff00] text-[#090a0d]"
                    : "text-[#8b929f]"
                }`}
              >
                Saved
              </button>

            </div>

            <SortDropdown
              sortBy={sortBy}
              onSortChange={setSortBy}
            />

          </div>

          {/* Empty State */}
          {sortedList.length === 0 ? (

            <div className="flex min-h-64 flex-col items-center justify-center rounded-md border border-[#242832] bg-[#111318] px-5 text-center">

              <h2 className="font-['Impact'] text-2xl uppercase text-white">
                Nothing Here Yet
              </h2>

              <p className="mt-4 max-w-xl text-[11px] leading-6 text-[#8b929f] sm:text-xs md:text-sm">
                Browse the library and add a lift
                to get today moving.
              </p>

              <Link
                href="/"
                className="fitlog-primary-btn mt-5"
              >
                Go to Workouts
              </Link>

            </div>

          ) : (

            <div className="space-y-3">

              {sortedList.map((workout) => (
                <PlanCard
                  key={workout.id}
                  workout={workout}
                  isSaved={
                    activeTab === "saved"
                  }
                />
              ))}

            </div>

          )}

        </div>

      </main>

      <Footer />

    </div>
  );
}