"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFitLog } from "../context/FitLogContext";



export default function Navbar() {
  const pathname = usePathname();

  const { plan, saved } = useFitLog();

  const isWorkoutActive = pathname === "/";
  const isPlanActive = pathname === "/my-plan";

  return (
    <header className="sticky top-0 z-50 border-b border-[#242832] bg-[#090a0d]/95 backdrop-blur">
      <div className="fitlog-container flex min-h-14 items-center justify-between gap-4">

        {/* =========================
            Logo
        ========================== */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2"
        >
          <span className="text-sm text-[#ccff00]">
            ⚡
          </span>

          <span className="text-sm font-black uppercase tracking-wide text-white">
            FitLog
          </span>
        </Link>

        {/* =========================
            Navigation
        ========================== */}
        <nav className="hidden items-center gap-6 md:flex">

          <Link
            href="/"
            className={`rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide transition ${
              isWorkoutActive
                ? "bg-[#ccff00] text-[#090a0d]"
                : "text-[#8b929f] hover:text-white"
            }`}
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            className={`rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide transition ${
              isPlanActive
                ? "bg-[#ccff00] text-[#090a0d]"
                : "text-[#8b929f] hover:text-white"
            }`}
          >
            My Plan
          </Link>

        </nav>

        {/* =========================
            Right Side
        ========================== */}
        <div className="flex shrink-0 items-center gap-2">

          {/* Plan */}
          <Link
            href="/my-plan"
            className="fitlog-accent-badge"
          >
            Plan {plan.length}
          </Link>

          {/* Saved */}
          <Link
            href="/my-plan"
            className="fitlog-outline-badge"
          >
            Saved {saved.length}
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="ml-1 flex h-8 w-8 items-center justify-center rounded border border-[#242832] text-sm text-white md:hidden"
            aria-label="Open navigation menu"
          >
            ☰
          </button>

        </div>

      </div>
    </header>
  );
}