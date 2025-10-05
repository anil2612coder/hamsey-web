import SEOMetaTags from "@/components/common/SEOMetaTags";
import Navigation from "@/components/common/Navigation";

export default function PrivacyPage() {
  const privacySchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy | Hamsey Dating App",
    url: "https://hamsey.co/privacy",
    description:
      "Learn how Hamsey dating app collects, uses, and protects your personal information. Read our privacy policy to understand your data rights.",
    mainEntity: {
      "@type": "WebPageElement",
      name: "Privacy Policy Document",
      text: "This privacy policy outlines how we collect and process your personal data when using the Hamsey dating app.",
    },
  } as const;

  return (
    <>
      <SEOMetaTags
        title="Privacy Policy | Hamsey Dating App"
        description="Learn how Hamsey dating app collects, uses, and protects your personal information. Read our privacy policy to understand your data rights."
        keywords="Hamsey privacy, dating app privacy, data protection, privacy policy, personal data"
        canonicalUrl="https://hamsey.co/privacy"
        schema={privacySchema as unknown as Record<string, unknown>}
      />
      <main className="privacy-policy-container">
        <section className="privacy-hero-section">
          <Navigation />
          <div className="privacy-hero-content">
            <h1 className="privacy-hero-title animate-fade-in">
              Privacy <span className="primary-text">Policy</span>
            </h1>
            <p className="privacy-hero-subtitle animate-slide-up delay-300">
              We value your privacy and are committed to protecting your
              personal data
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
