// import Image from "next/image";
import Nav from "@/components/Nav";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="flex min h-screen flex-col bg-[#141414]">
      <Nav />
      <HeroSection />
    </main>
  );
}
