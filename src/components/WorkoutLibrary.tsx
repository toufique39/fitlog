export default function WorkoutLibrary() {
  return (
    <section
      id="library"
      className="py-8 md:py-10"
    >
      <div className="fitlog-container">

        <div className="mb-6">
          <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#ccff00]">
            Workout Library
          </p>

          <h2 className="mt-2 text-3xl font-black uppercase leading-none md:text-4xl">
            The Library
          </h2>

          <p className="mt-2 text-xs text-gray-500">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {/* Workout cards will come here */}
        </div>

      </div>
    </section>
  );
}