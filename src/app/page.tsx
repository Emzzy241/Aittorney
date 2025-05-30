import HeroSection from "@/components/HeroSection";
import ContentSection from "@/components/ContentSection";
import CoreFeaturesSection from "@/components/CoreFeaturesSection";
import ToDoListSection from "@/components/ToDoListSection";
import SpecialSection from "@/components/SpecialSection";
import ReviewsSection from "@/components/ReviewsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import FormSection from "@/components/FormSection";
import DiscountSection from "@/components/DiscountSection";
import NeedToKnowSection from "@/components/NeedToKnowSection";

export default function Home() {
  return (
    <main className="flex min h-screen flex-col bg-[#141414]">

      <HeroSection />

      <ContentSection
        title="AI-Powered Legal Protection at Startup Speed"
        subtitle="Aittorney for Startups & SMEs"
      />

      <CoreFeaturesSection />

      <ContentSection
        title="Get investor-ready legal docs in 3 simple steps"
        subtitle="How it Works"
      />

      <ToDoListSection />

      <ContentSection
        title="Legal Protection shouldn't break the bank"
        subtitle="Simple Pricing for Startups & SMEs"
      />

      <PricingSection />
      
      <SpecialSection />

      <ContentSection
        title="500+ startups saved $3.8M+ in legal fees last quarter"
        subtitle="What Is Said About AIttorney"
      />
      <ReviewsSection />

      <NeedToKnowSection />
      
      <FAQSection />

      <DiscountSection />

      <FormSection />
    </main>
  );
}
