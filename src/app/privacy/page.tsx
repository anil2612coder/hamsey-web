import Navigation from "@/components/common/Navigation";
import Footer from "@/components/home/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Hamsey Dating App",
  description:
    "Learn how Hamsey dating app collects, uses, and protects your personal information. Read our privacy policy to understand your data rights.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    type: "website",
    title: "Privacy Policy | Hamsey Dating App",
    description:
      "Learn how Hamsey dating app collects, uses, and protects your personal information.",
    url: "https://hamsey.co/privacy",
    images: [{ url: "/image/logo.png" }],
  },
};

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(privacySchema) }}
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
        <section className="privacy-content-section">
          <div className="container">
            <div className="privacy-content animate-on-scroll slide-up">
              <h2>1. Introduction</h2>
              <p>
                This Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you use our dating platform.
                Please read this Privacy Policy carefully. By accessing or using
                our platform, you acknowledge that you have read, understood,
                and agree to be bound by all the terms of this Privacy Policy.
              </p>
              <h2>2. Information We Collect</h2>
              <p>
                We may collect information about you in various ways, including:
              </p>
              <h3>2.1 Personal Data</h3>
              <ul>
                <li>
                  Contact information (such as name, email address, phone
                  number)
                </li>
                <li>
                  Profile information (such as age, gender, location, interests,
                  photos)
                </li>
                <li>Authentication information (such as password)</li>
              </ul>
              <h3>2.2 Usage Data</h3>
              <p>
                We automatically collect certain information when you visit,
                use, or navigate our platform, including:
              </p>
              <ul>
                <li>
                  Device and connection information (such as IP address, browser
                  type, device type)
                </li>
                <li>
                  Usage patterns (such as pages visited, time spent on pages,
                  click-through data)
                </li>
                <li>Location data (if you grant permission)</li>
              </ul>
              <h2>3. How We Use Your Information</h2>
              <ul>
                <li>Providing, maintaining, and improving our platform</li>
                <li>
                  Matching you with potential partners based on your preferences
                </li>
                <li>
                  Communicating with you about updates, features, or support
                </li>
                <li>Analyzing usage patterns to enhance user experience</li>
                <li>
                  Preventing fraudulent activities and ensuring platform
                  security
                </li>
                <li>Complying with legal obligations</li>
              </ul>
              <h2>4. Sharing Your Information</h2>
              <ul>
                <li>
                  Other users (as necessary for the platform&apos;s core
                  functionality)
                </li>
                <li>
                  Service providers (who assist us in operating our platform)
                </li>
                <li>
                  Legal authorities (when required by law or to protect our
                  rights)
                </li>
                <li>
                  Business partners (with your consent, for marketing purposes)
                </li>
              </ul>
              <h2>5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures
                to protect your personal data against unauthorized access,
                alteration, disclosure, or destruction. However, no method of
                transmission over the Internet or electronic storage is 100%
                secure, and we cannot guarantee absolute security.
              </p>
              <h2>6. Your Privacy Rights</h2>
              <ul>
                <li>Right to access your personal data</li>
                <li>Right to correct inaccurate or incomplete data</li>
                <li>Right to delete your personal data</li>
                <li>Right to restrict or object to processing</li>
                <li>Right to data portability</li>
                <li>Right to withdraw consent</li>
              </ul>
              <h2>7. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to collect and
                store information about your interactions with our platform. You
                can control cookie settings through your browser preferences.
              </p>
              <h2>8. Children&apos;s Privacy</h2>
              <p>
                Our platform is not intended for individuals under the age of
                18. We do not knowingly collect personal data from children. If
                we become aware that we have collected personal data from a
                child without parental consent, we will take steps to remove
                that information.
              </p>
              <h2>9. International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in
                countries other than your country of residence. These countries
                may have different data protection laws. We will take
                appropriate measures to ensure that your personal data remains
                protected.
              </p>
              <h2>10. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the "Last Updated" date.
              </p>
              <h2>11. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please
                contact us at support@hamseyapp.com.
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
