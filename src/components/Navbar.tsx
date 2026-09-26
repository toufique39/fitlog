"use client";

import Link from "next/link";
import { useFitLog } from "../context/FitLogContext";


export default function Navbar() {
  const { plan, saved } = useFitLog();

  return (
    <header className="border-b border-[#242832] bg-[#090a0d]">
      <div className="fitlog-container flex min-h-14 items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-sm font-black tracking-wide"
        >
          ⚡ FITLOG
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-8 text-[10px] font-bold uppercase">
          <Link
            href="/"
            className="text-gray-500 hover:text-white"
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            className="text-gray-500 hover:text-white"
          >
            My Plan
          </Link>
        </nav>

        {/* Counters */}
        <div className="flex items-center gap-2">

          <Link
            href="/my-plan"
            className="fitlog-accent-badge"
          >
            Plan {plan.length}
          </Link>

          <Link
            href="/my-plan"
            className="fitlog-outline-badge"
          >
            Saved {saved.length}
          </Link>

        </div>

      </div>
    </header>
  );
}