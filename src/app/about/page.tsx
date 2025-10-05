import AboutHeroSection from "@/components/about/AboutHeroSection";
import AboutStorySection from "@/components/about/AboutStorySection";
import AboutMissionSection from "@/components/about/AboutMissionSection";
import AboutTeamSection from "@/components/about/AboutTeamSection";
import AboutCtaSection from "@/components/about/AboutCtaSection";
import Footer from "@/components/home/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Hamsey | Our Story, Mission & Team",
  description:
    "Discover the story behind Hamsey dating app. Learn about our mission to create meaningful connections and the team making it happen.",
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    title: "About Hamsey | Our Story, Mission & Team",
    description:
      "Discover the story behind Hamsey dating app. Learn about our mission to create meaningful connections and the team making it happen.",
    url: "https://hamsey.co/about",
    images: [{ url: "/image/logo.png" }],
  },
};

export default function AboutPage() {
  const aboutUsSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Hamsey Dating App",
    url: "https://hamsey.co/about",
    logo: "https://hamsey.co/image/logo.png",
    description:
      "Learn about Hamsey's mission to revolutionize the dating experience with safety and authenticity at its core.",
    foundingDate: "2025",
    founders: [{ "@type": "Person", name: "Hamsey Founder" }],
    sameAs: [
      "https://facebook.com/hamseyapp",
      "https://twitter.com/hamseyapp",
      "https://instagram.com/hamseyapp",
    ],
  } as const;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutUsSchema) }}
      />
      <main className="about-us-container">
        <AboutHeroSection />
        <AboutStorySection />
        <AboutMissionSection />
        <AboutTeamSection />
        <AboutCtaSection />
        <Footer />
      </main>
    </>
  );
}
