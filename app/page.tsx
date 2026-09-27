import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import WorkoutLibrary from "@/components/WorkoutLibrary";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <WorkoutLibrary />
      </main>

      <Footer />
    </>
  );
}