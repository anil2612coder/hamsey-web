import SEOMetaTags from "@/components/common/SEOMetaTags";
import Navigation from "@/components/common/Navigation";

export default function TermsPage() {
  const termsSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms and Conditions | Hamsey Dating App",
    url: "https://hamsey.co/terms",
    description:
      "Read the terms and conditions for using Hamsey dating app. Learn about user eligibility, account registration, content policies, and more.",
    mainEntity: {
      "@type": "WebPageElement",
      name: "Terms and Conditions Document",
      text: "These terms outline the rules, guidelines, and legal agreements between users and Hamsey dating app.",
    },
  } as const;

  return (
    <>
      <SEOMetaTags
        title="Terms and Conditions | Hamsey Dating App"
        description="Read the terms and conditions for using Hamsey dating app. Learn about user eligibility, account registration, content policies, and more."
        keywords="Hamsey terms, dating app terms, terms and conditions, legal terms, user agreement"
        canonicalUrl="https://hamsey.co/terms"
        schema={termsSchema as unknown as Record<string, unknown>}
      />
      <main className="terms-conditions-container">
        <section className="terms-hero-section">
          <Navigation />
          <div className="terms-hero-content">
            <h1 className="terms-hero-title animate-fade-in">
              Terms and <span className="primary-text">Conditions</span>
            </h1>
            <p className="terms-hero-subtitle animate-slide-up delay-300">
              Please read these terms carefully before using our platform
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
