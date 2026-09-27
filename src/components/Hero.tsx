import Link from "next/link";

export default function Hero() {
  return (
    <section className="py-5 md:py-8">
      <div className="fitlog-container">

        <div className="grid overflow-hidden rounded-md border border-[#242832] bg-[#111318] md:grid-cols-[1.15fr_0.85fr]">

          
          <div className="flex flex-col justify-center p-6 sm:p-8 md:p-10">

           
            <p className="mb-3 text-[9px] font-black uppercase tracking-[0.2em] text-[#ccff00]">
              Workout Library
            </p>

            <h1 className="max-w-2xl font-['Impact'] text-5xl uppercase leading-[0.84] tracking-tight text-white sm:text-6xl md:text-7xl">

              Train With Intent.
              <br />

              <span className="text-[#ccff00]">
                Log Every Set.
              </span>

            </h1>

            
            <p className="mt-5 max-w-xl text-xs leading-6 text-[#8b929f] sm:text-sm">
              FitLog is a dark, no-nonsense gym companion:
              pick a lift, lock it into todays plan, and
              watch the weeks work add up.
            </p>

            {/* CTA */}
            <div className="mt-6">
              <a
                href="#library"
                className="fitlog-primary-btn"
              >
                <span>→</span>
                Browse Workouts
              </a>
            </div>

          </div>

         
          <div className="relative min-h-[280px] overflow-hidden bg-[#151820] md:min-h-[390px]">

            <img
              src="https://img.magnific.com/free-photo/portrait-anime-character-doing-fitness-exercising_23-2151666664.jpg?w=1000"
              alt="Workout illustration"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#111318] via-transparent to-transparent" />

            {/* Bottom accent */}
            <div className="absolute bottom-0 left-0 h-1 w-full bg-[#ccff00]" />

          </div>

        </div>

      </div>
    </section>
  );
}