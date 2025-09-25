import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { VillaShowcase } from "@/components/VillaShowcase";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <VillaShowcase />
    </main>
  );
}