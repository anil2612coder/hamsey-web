import SEOMetaTags from "@/components/common/SEOMetaTags";
import HeroSection from "@/components/home/HeroSection";
import SecondSection from "@/components/home/SecondSection";
import ThirdSection from "@/components/home/ThirdSection";
import FourthSection from "@/components/home/FourthSection";
import FifthSection from "@/components/home/FifthSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import Footer from "@/components/home/Footer";

export default function Home() {
  const homePageSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Hamsey Dating App",
    url: "https://hamsey.co/",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://hamsey.co/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
    description:
      "Hamsey is a modern dating app that helps you connect with people nearby safely and securely.",
  };

  return (
    <>
      <SEOMetaTags
        title="Hamsey - Connect with People Nearby"
        description="Hamsey helps you connect with people nearby safely and securely. Never miss a chance to meet someone special with our innovative dating app."
        keywords="dating app, meet people nearby, safe dating, online dating, Hamsey app"
        canonicalUrl="https://hamsey.co/"
        schema={homePageSchema}
      />
      <div className="homepage-container">
        <HeroSection />
        <SecondSection
          isBg="second-section-bg"
          imageUrl="/image/1.webp"
          title="Never miss a"
          titleSpan="Chance"
          description="Don't just pass - connect. See someone nearby who catches your eye. View their profile, send message request and start conversation."
        />
        <ThirdSection
          imageUrl="/image/2.webp"
          title="Reachout"
          titleSpan="Safely"
          description="Send your thoughts to people you're intrigued by, choose to stay hidden while requesting for them  to accept first."
        />
        <FourthSection />
        <ThirdSection
          imageUrl="/image/4.webp"
          title="Express"
          titleSpan="Freely"
          description="End to end encryption, your personal messages stay secured. Only you and your connection can read them, no one else, not even us."
        />
        <FifthSection
          title="Complete the"
          titleSpan="Circle"
          description="Eliminate the hesitation & fear of rejection in public. Express your interest with you both to see and you both to appreciate."
        />
        <TestimonialSection />
        <Footer />
      </div>
    </>
  );
}
