// import Image from "next/image";
import Nav from "@/components/Nav";
import HeroSection from "@/components/HeroSection";
import ContentSection from "@/components/ContentSection";
import ContentSection1 from "@/components/ContentSection1";
import ContentSection2 from "@/components/ContentSection2";

export default function Home() {
  return (
    <main className="flex min h-screen flex-col bg-[#141414]">
      <Nav />
      <HeroSection />
      <ContentSection />
      {/* core features component */}
      <ContentSection1 />
      {/* Submit your legal needs component */}
      <ContentSection2 />
    </main>
  );
}
