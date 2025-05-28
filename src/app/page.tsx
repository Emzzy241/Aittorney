// import Image from "next/image";
import Nav from "@/components/Nav";
import HeroSection from "@/components/HeroSection";
import ContentSection from "@/components/ContentSection";

export default function Home() {
  return (
    <main className="flex min h-screen flex-col bg-[#141414]">
      <Nav />
      <HeroSection />
      <ContentSection
        title="AI-Powered Legal Protection at Startup Speed"
        subtitle="Aittorney for Startups & SMEs"
      />
      {/* core features component */}
      <ContentSection 
        title="Get investor-ready legal docs in 3 simple steps"
        subtitle="How it Works"
      />
      {/* Submit your legal needs component */}
      <ContentSection 
        title="Legal Protection shouldn't break the bank"
        subtitle="Simple Pricing for Startups & SMEs"
      />
    </main>
  );
}
