import Footer from "@/src/components/Footer";
import Hero from "@/src/components/Hero";
import Navbar from "@/src/components/Navbar";
import WorkoutLibrary from "@/src/components/WorkoutLibrary";



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