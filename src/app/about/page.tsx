import SEOMetaTags from "@/components/common/SEOMetaTags";
import Navigation from "@/components/common/Navigation";

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
      <SEOMetaTags
        title="About Hamsey | Our Story, Mission & Team"
        description="Discover the story behind Hamsey dating app. Learn about our mission to create meaningful connections and the team making it happen."
        keywords="about Hamsey, dating app mission, Hamsey team, dating app story, safe dating platform"
        canonicalUrl="https://hamsey.co/about"
        schema={aboutUsSchema as unknown as Record<string, unknown>}
      />
      <main className="about-us-container">
        {/* Minimal placeholder; sections will be ported next */}
        <Navigation />
        <section className="about-hero-section">
          <div className="about-hero-content">
            <h1 className="about-hero-title">About Hamsey</h1>
            <p className="about-hero-subtitle">Our story, mission, and team</p>
          </div>
        </section>
      </main>
    </>
  );
}
