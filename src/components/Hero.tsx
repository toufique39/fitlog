export default function Hero() {
  return (
    <section className="py-6 md:py-8">
      <div className="fitlog-container">
        <div className="grid overflow-hidden rounded-md border border-[#242832] bg-[#111318] md:grid-cols-[1.2fr_0.8fr]">

          <div className="flex flex-col justify-center p-6 md:p-10">
            <p className="mb-3 text-[9px] font-black uppercase tracking-[0.18em] text-[#ccff00]">
              Workout Library
            </p>

            <h1 className="max-w-2xl text-4xl font-black uppercase leading-[0.9] tracking-tight md:text-6xl">
              Train with intent.
              <br />
              Log every set.
            </h1>

            <p className="mt-5 max-w-xl text-xs leading-6 text-gray-500 md:text-sm">
              FitLog is a dark, no-nonsense gym companion:
              pick a lift, lock it into todays plan, and watch
              the weeks work add up.
            </p>

            <div className="mt-6">
              <a
                href="#library"
                className="fitlog-primary-btn"
              >
                Browse Workouts →
              </a>
            </div>
          </div>

          <div className="min-h-72 bg-[#151820]">
            {/* Hero image will come here */}
          </div>

        </div>
      </div>
    </section>
  );
}