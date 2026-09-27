"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import { toast } from "react-toastify";
import type { Workout } from "@/types/workout";

interface FitLogContextType {
  plan: Workout[];
  saved: Workout[];
  completedIds: number[];

  addToPlan: (workout: Workout) => void;
  saveForLater: (workout: Workout) => void;

  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;

  toggleDone: (id: number) => void;
  removeAllFromPlan: () => void;
}

const FitLogContext = createContext<FitLogContextType | undefined>(
  undefined
);

interface FitLogProviderProps {
  children: ReactNode;
}

export function FitLogProvider({
  children,
}: FitLogProviderProps) {
  // --------------------------------------------------
  // Initial state
  // --------------------------------------------------

  const readStored = <T,>(key: string, fallback: T): T => {
    if (typeof window === "undefined") return fallback;

    try {
      const stored = localStorage.getItem(key);
      return stored ? (JSON.parse(stored) as T) : fallback;
    } catch (error) {
      console.error(`Failed to load ${key}:`, error);
      return fallback;
    }
  };

  const [plan, setPlan] = useState<Workout[]>(() =>
    readStored("fitlog-plan", [])
  );
  const [saved, setSaved] = useState<Workout[]>(() =>
    readStored("fitlog-saved", [])
  );
  const [completedIds, setCompletedIds] = useState<number[]>(() =>
    readStored("fitlog-completed", [])
  );

  

  const [hydrated] = useState(true);

 



  useEffect(() => {
    if (!hydrated) return;

    localStorage.setItem(
      "fitlog-plan",
      JSON.stringify(plan)
    );
  }, [plan, hydrated]);


  useEffect(() => {
    if (!hydrated) return;

    localStorage.setItem(
      "fitlog-saved",
      JSON.stringify(saved)
    );
  }, [saved, hydrated]);



  useEffect(() => {
    if (!hydrated) return;

    localStorage.setItem(
      "fitlog-completed",
      JSON.stringify(completedIds)
    );
  }, [completedIds, hydrated]);



  const addToPlan = (workout: Workout) => {
    const alreadyExists = plan.some(
      (item) => item.id === workout.id
    );

    if (alreadyExists) {
      toast.warning(
        "Workout is already in today's plan."
      );
      return;
    }

    // Maximum 5 workouts
    if (plan.length >= 5) {
      toast.warning(
        "Today's plan is full. Maximum 5 lifts allowed."
      );
      return;
    }

    setPlan((currentPlan) => [
      ...currentPlan,
      workout,
    ]);

    toast.success(
      "Added to today's plan"
    );
  };

  

  const saveForLater = (workout: Workout) => {
    const alreadySaved = saved.some(
      (item) => item.id === workout.id
    );

    if (alreadySaved) {
      toast.warning(
        "Workout is already saved."
      );
      return;
    }

    setSaved((currentSaved) => [
      ...currentSaved,
      workout,
    ]);

    toast.success(
      "Saved for later"
    );
  };


  const removeFromPlan = (id: number) => {
    setPlan((currentPlan) =>
      currentPlan.filter(
        (item) => item.id !== id
      )
    );

    // Also remove from completed list
    setCompletedIds((currentIds) =>
      currentIds.filter(
        (completedId) => completedId !== id
      )
    );

    toast.success(
      "Removed from today's plan"
    );
  };

  // --------------------------------------------------
  // Remove workout from saved
  // --------------------------------------------------

  const removeFromSaved = (id: number) => {
    setSaved((currentSaved) =>
      currentSaved.filter(
        (item) => item.id !== id
      )
    );

    toast.success(
      "Removed from saved"
    );
  };

  // --------------------------------------------------
  // Mark workout as done / undone
  // --------------------------------------------------

const toggleDone = (id: number) => {
  const isCompleted = completedIds.includes(id);

  if (isCompleted) {
    setCompletedIds((currentIds) =>
      currentIds.filter(
        (completedId) => completedId !== id
      )
    );

    toast.info("Workout marked as not done");
  } else {
    setCompletedIds((currentIds) => [
      ...currentIds,
      id,
    ]);

    toast.success("Workout marked as done");
  }
};

  // --------------------------------------------------
  // Remove all workouts from today's plan
  // --------------------------------------------------

  const removeAllFromPlan = () => {
    if (plan.length === 0) {
      return;
    }

    setPlan([]);
    setCompletedIds([]);

    toast.success(
      "Today's plan cleared"
    );
  };

  // --------------------------------------------------
  // Provider
  // --------------------------------------------------

  return (
    <FitLogContext.Provider
      value={{
        plan,
        saved,
        completedIds,

        addToPlan,
        saveForLater,

        removeFromPlan,
        removeFromSaved,

        toggleDone,
        removeAllFromPlan,
      }}
    >
      {children}
    </FitLogContext.Provider>
  );
}

// ======================================================
// Custom Hook
// ======================================================

export function useFitLog() {
  const context = useContext(
    FitLogContext
  );

  if (!context) {
    throw new Error(
      "useFitLog must be used inside FitLogProvider"
    );
  }

  return context;
}