import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#090a0d] px-5">
      <div className="text-center">

        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#ccff00]">
          FitLog
        </p>

        <h1 className="mt-3 font-['Impact'] text-8xl leading-none text-white">
          404
        </h1>

        <h2 className="mt-4 text-xl font-bold uppercase text-white">
          Page Not Found
        </h2>

        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#8b929f]">
          The workout or page you are looking for
          does not exist.
        </p>

        <Link
          href="/"
          className="fitlog-primary-btn mt-6"
        >
          ← Back to Workouts
        </Link>

      </div>
    </main>
  );
}