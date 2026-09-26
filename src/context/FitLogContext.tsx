"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import { toast } from "react-toastify";
import { Workout } from "../types/workout";




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




const FitLogContext =
  createContext<FitLogContextType | undefined>(undefined);




interface FitLogProviderProps {
  children: ReactNode;
}



export function FitLogProvider({
  children,
}: FitLogProviderProps) {



  const [plan, setPlan] = useState<Workout[]>([]);


  // ----------------------------------------------------
  // Saved State
  // ----------------------------------------------------

  const [saved, setSaved] = useState<Workout[]>([]);


  // ----------------------------------------------------
  // Completed Workout IDs
  // ----------------------------------------------------

  const [completedIds, setCompletedIds] = useState<number[]>(
    []
  );


  // ====================================================
  // Load Data From LocalStorage
  // ====================================================

  useEffect(() => {
    const storedPlan = localStorage.getItem(
      "fitlog-plan"
    );

    const storedSaved = localStorage.getItem(
      "fitlog-saved"
    );

    const storedCompleted = localStorage.getItem(
      "fitlog-completed"
    );


    // Restore Plan
    if (storedPlan) {
      try {
        const parsedPlan: Workout[] =
          JSON.parse(storedPlan);

        setPlan(parsedPlan);
      } catch (error) {
        console.error(
          "Failed to load plan:",
          error
        );
      }
    }


    // Restore Saved
    if (storedSaved) {
      try {
        const parsedSaved: Workout[] =
          JSON.parse(storedSaved);

        setSaved(parsedSaved);
      } catch (error) {
        console.error(
          "Failed to load saved workouts:",
          error
        );
      }
    }


    // Restore Completed IDs
    if (storedCompleted) {
      try {
        const parsedCompleted: number[] =
          JSON.parse(storedCompleted);

        setCompletedIds(parsedCompleted);
      } catch (error) {
        console.error(
          "Failed to load completed workouts:",
          error
        );
      }
    }
  }, []);


  // ====================================================
  // Save Plan To LocalStorage
  // ====================================================

  useEffect(() => {
    localStorage.setItem(
      "fitlog-plan",
      JSON.stringify(plan)
    );
  }, [plan]);


  // ====================================================
  // Save Saved Workouts To LocalStorage
  // ====================================================

  useEffect(() => {
    localStorage.setItem(
      "fitlog-saved",
      JSON.stringify(saved)
    );
  }, [saved]);


  // ====================================================
  // Save Completed IDs To LocalStorage
  // ====================================================

  useEffect(() => {
    localStorage.setItem(
      "fitlog-completed",
      JSON.stringify(completedIds)
    );
  }, [completedIds]);


  // ====================================================
  // Add Workout To Today's Plan
  // ====================================================

  const addToPlan = (workout: Workout) => {

    // -----------------------------------------------
    // Check Duplicate
    // -----------------------------------------------

    const alreadyExists = plan.some(
      (item) => item.id === workout.id
    );


    if (alreadyExists) {
      toast.warning(
        "Workout is already in today's plan."
      );

      return;
    }


    // -----------------------------------------------
    // Check 5 Workout Limit
    // -----------------------------------------------

    if (plan.length >= 5) {
      toast.warning(
        "Today's plan is full. Maximum 5 lifts allowed."
      );

      return;
    }


    // -----------------------------------------------
    // Add Workout
    // -----------------------------------------------

    setPlan((currentPlan) => [
      ...currentPlan,
      workout,
    ]);


    // -----------------------------------------------
    // Notification
    // -----------------------------------------------

    toast.success(
      "Added to today's plan"
    );
  };


  // ====================================================
  // Save Workout For Later
  // ====================================================

  const saveForLater = (workout: Workout) => {

    // -----------------------------------------------
    // Check Duplicate
    // -----------------------------------------------

    const alreadySaved = saved.some(
      (item) => item.id === workout.id
    );


    if (alreadySaved) {
      toast.warning(
        "Workout is already saved."
      );

      return;
    }


    // -----------------------------------------------
    // Save Workout
    // -----------------------------------------------

    setSaved((currentSaved) => [
      ...currentSaved,
      workout,
    ]);


    // -----------------------------------------------
    // Notification
    // -----------------------------------------------

    toast.success(
      "Saved for later"
    );
  };


  // ====================================================
  // Remove Workout From Today's Plan
  // ====================================================

  const removeFromPlan = (id: number) => {

    setPlan((currentPlan) =>
      currentPlan.filter(
        (item) => item.id !== id
      )
    );


    // Remove from completed list too
    setCompletedIds((currentIds) =>
      currentIds.filter(
        (completedId) => completedId !== id
      )
    );


    toast.success(
      "Removed from today's plan"
    );
  };


  // ====================================================
  // Remove Workout From Saved
  // ====================================================

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


  // ====================================================
  // Mark Workout As Done / Undone
  // ====================================================

  const toggleDone = (id: number) => {

    setCompletedIds((currentIds) => {

      // ---------------------------------------------
      // Already Completed
      // ---------------------------------------------

      if (currentIds.includes(id)) {

        toast.info(
          "Workout marked as not done"
        );

        return currentIds.filter(
          (completedId) =>
            completedId !== id
        );
      }


      // ---------------------------------------------
      // Mark As Completed
      // ---------------------------------------------

      toast.success(
        "Workout marked as done"
      );

      return [
        ...currentIds,
        id,
      ];
    });
  };


  // ====================================================
  // Remove All From Today's Plan
  // ====================================================

  const removeAllFromPlan = () => {

    // -----------------------------------------------
    // Nothing To Remove
    // -----------------------------------------------

    if (plan.length === 0) {
      return;
    }


    // -----------------------------------------------
    // Clear Plan
    // -----------------------------------------------

    setPlan([]);


    // -----------------------------------------------
    // Clear Completed IDs
    // -----------------------------------------------

    setCompletedIds([]);


    // -----------------------------------------------
    // Notification
    // -----------------------------------------------

    toast.success(
      "Today's plan cleared"
    );
  };


  // ====================================================
  // Provider
  // ====================================================

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