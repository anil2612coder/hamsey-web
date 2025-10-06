import Navigation from "@/components/common/Navigation";
import Footer from "@/components/home/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | Hamsey Dating App",
  description:
    "Read the terms and conditions for using Hamsey dating app. Learn about user eligibility, account registration, content policies, and more.",
  alternates: { canonical: "/terms" },
  openGraph: {
    type: "website",
    title: "Terms and Conditions | Hamsey Dating App",
    description: "Read the terms and conditions for using Hamsey dating app.",
    url: "https://hamsey.co/terms",
    images: [{ url: "/image/logo.png" }],
  },
};

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(termsSchema) }}
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
        <section className="terms-content-section">
          <div className="container">
            <div className="terms-content animate-on-scroll slide-up">
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing or using our dating platform, you agree to be bound
                by these Terms and Conditions. If you do not agree to these
                terms, please do not use our service.
              </p>
              <h2>2. Eligibility</h2>
              <p>
                You must be at least 18 years old to use our platform. By
                creating an account, you represent and warrant that you are at
                least 18 years of age and have the legal capacity to enter into
                these terms.
              </p>
              <h2>3. Account Registration</h2>
              <p>
                To access certain features of our platform, you must register
                for an account. You agree to provide accurate, current, and
                complete information during the registration process and to
                update such information to keep it accurate, current, and
                complete.
              </p>
              <h2>4. User Conduct</h2>
              <p>You agree not to use our platform to:</p>
              <ul>
                <li>
                  Post content that is illegal, harmful, threatening, abusive,
                  harassing, defamatory, or otherwise objectionable
                </li>
                <li>
                  Impersonate any person or entity or falsely state or
                  misrepresent your affiliation with a person or entity
                </li>
                <li>
                  Engage in any activity that interferes with or disrupts the
                  services
                </li>
                <li>
                  Attempt to gain unauthorized access to other users&apos;
                  accounts
                </li>
                <li>
                  Use the platform for any commercial purposes without our
                  express consent
                </li>
              </ul>
              <h2>5. Content</h2>
              <p>
                You retain all rights to the content you post on our platform.
                By posting content, you grant us a non-exclusive, transferable,
                sub-licensable, royalty-free, worldwide license to use, copy,
                modify, create derivative works based on, distribute, publicly
                display, and otherwise exploit such content in connection with
                our services.
              </p>
              <h2>6. Termination</h2>
              <p>
                We reserve the right to suspend or terminate your account at any
                time for any reason without notice or liability. Upon
                termination, your right to use the platform will immediately
                cease.
              </p>
              <h2>7. Disclaimer of Warranties</h2>
              <p>
                Our platform is provided &quot;as is&quot; and &quot;as
                available&quot; without any warranties of any kind, either
                express or implied. We do not guarantee that our platform will
                be uninterrupted, secure, or error-free.
              </p>
              <h2>8. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, we shall not be liable
                for any indirect, incidental, special, consequential, or
                punitive damages resulting from your use of or inability to use
                our platform.
              </p>
              <h2>9. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms and Conditions at any
                time. We will provide notice of significant changes by posting
                the updated terms on our platform. Your continued use of our
                platform after such modifications constitutes your acceptance of
                the revised terms.
              </p>
              <h2>10. Governing Law</h2>
              <p>
                These Terms and Conditions shall be governed by and construed in
                accordance with the laws of [Your Jurisdiction], without regard
                to its conflict of law provisions.
              </p>
              <h2>11. Contact Information</h2>
              <p>
                If you have any questions about these Terms and Conditions,
                please contact us at support@hamseyapp.com.
              </p>
              <p className="last-updated">Last Updated: June 1, 2024</p>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
