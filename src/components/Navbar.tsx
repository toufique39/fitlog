export default function Navbar() {
  return (
    <header className="border-b border-[#242832] bg-[#090a0d]">
      <div className="fitlog-container flex min-h-14 items-center justify-between">
        <div className="text-sm font-black tracking-wide">
          ⚡ FITLOG
        </div>

        <nav className="flex items-center gap-8 text-[10px] font-bold uppercase text-gray-500">
          <span>Workout</span>
          <span>My Plan</span>
        </nav>

        <div className="flex items-center gap-2">
          <span className="fitlog-accent-badge">
            Plan 0
          </span>

          <span className="fitlog-outline-badge">
            Saved 0
          </span>
        </div>
      </div>
    </header>
  );
}