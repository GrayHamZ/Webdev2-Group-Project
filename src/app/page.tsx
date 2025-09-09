import { prisma } from "@/lib/prisma";
import Image from "next/image";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* Villas section goes here */}
    </main>
  );
}