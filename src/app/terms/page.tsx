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
                By accessing or using Hamsey, our proximity-based dating
                application, you agree to be bound by these Terms and
                Conditions. If you do not agree to these terms, please do not
                use our service. These terms constitute a legally binding
                agreement between you and Hamsey.
              </p>

              <h2>2. Eligibility and Age Requirements</h2>

              <h3>2.1 Minimum Age</h3>
              <ul>
                <li>
                  <strong>18+ Only:</strong> You must be at least 18 years old
                  to use our platform
                </li>
                <li>
                  <strong>Age Verification:</strong> We verify user age during
                  registration
                </li>
                <li>
                  <strong>Legal Capacity:</strong> You must have the legal
                  capacity to enter into these terms
                </li>
                <li>
                  <strong>Single Account:</strong> You may only create one
                  account per person
                </li>
              </ul>

              <h3>2.2 Geographic Restrictions</h3>
              <ul>
                <li>
                  Our service is available in most countries where dating apps
                  are permitted
                </li>
                <li>
                  Some features may be restricted in certain jurisdictions
                </li>
                <li>You are responsible for complying with local laws</li>
              </ul>

              <h2>3. Account Registration and Security</h2>

              <h3>3.1 Account Creation</h3>
              <ul>
                <li>
                  <strong>Accurate Information:</strong> You must provide
                  accurate, current, and complete information
                </li>
                <li>
                  <strong>Profile Photos:</strong> You must upload clear, recent
                  photos of yourself
                </li>
                <li>
                  <strong>Contact Verification:</strong> You must verify your
                  email address and phone number
                </li>
                <li>
                  <strong>Profile Maintenance:</strong> Keep your profile
                  information up to date
                </li>
              </ul>

              <h3>3.2 Account Security</h3>
              <ul>
                <li>
                  <strong>Password Protection:</strong> You are responsible for
                  maintaining password security
                </li>
                <li>
                  <strong>Unauthorized Access:</strong> Notify us immediately of
                  any unauthorized access
                </li>
                <li>
                  <strong>Account Sharing:</strong> Do not share your account
                  with others
                </li>
                <li>
                  <strong>Device Security:</strong> Keep your device secure and
                  updated
                </li>
              </ul>

              <h2>4. User Conduct and Safety</h2>

              <h3>4.1 Prohibited Conduct</h3>
              <p>You agree NOT to:</p>
              <ul>
                <li>
                  <strong>Harassment:</strong> Harass, threaten, or intimidate
                  other users
                </li>
                <li>
                  <strong>Inappropriate Content:</strong> Post illegal, harmful,
                  threatening, abusive, or offensive content
                </li>
                <li>
                  <strong>Impersonation:</strong> Impersonate any person or
                  entity or misrepresent your identity
                </li>
                <li>
                  <strong>Spam:</strong> Send unsolicited messages or spam other
                  users
                </li>
                <li>
                  <strong>Commercial Use:</strong> Use the platform for
                  commercial purposes without permission
                </li>
                <li>
                  <strong>Fraud:</strong> Create fake profiles or engage in
                  fraudulent activities
                </li>
                <li>
                  <strong>Underage Users:</strong> Solicit or engage with users
                  under 18
                </li>
                <li>
                  <strong>Illegal Activities:</strong> Use the platform for any
                  illegal activities
                </li>
              </ul>

              <h3>4.2 Safety Guidelines</h3>
              <ul>
                <li>
                  <strong>Meet Safely:</strong> Meet in public places for first
                  dates
                </li>
                <li>
                  <strong>Inform Others:</strong> Tell friends or family about
                  your plans
                </li>
                <li>
                  <strong>Trust Your Instincts:</strong> If something feels
                  wrong, trust your instincts
                </li>
                <li>
                  <strong>Report Concerns:</strong> Report suspicious or
                  inappropriate behavior immediately
                </li>
                <li>
                  <strong>No Pressure:</strong> Respect others&apos; boundaries
                  and decisions
                </li>
              </ul>

              <h2>5. Content and Intellectual Property</h2>

              <h3>5.1 Your Content</h3>
              <ul>
                <li>
                  <strong>Ownership:</strong> You retain ownership of content
                  you post
                </li>
                <li>
                  <strong>License Grant:</strong> You grant us a license to use
                  your content for the service
                </li>
                <li>
                  <strong>Responsibility:</strong> You are responsible for all
                  content you post
                </li>
                <li>
                  <strong>Removal Rights:</strong> We may remove content that
                  violates these terms
                </li>
              </ul>

              <h3>5.2 Content Guidelines</h3>
              <ul>
                <li>
                  <strong>Appropriate Photos:</strong> Use clear, recent photos
                  of yourself only
                </li>
                <li>
                  <strong>No Nudity:</strong> No explicit or inappropriate
                  content
                </li>
                <li>
                  <strong>No Copyright Infringement:</strong> Do not post
                  copyrighted material
                </li>
                <li>
                  <strong>Respectful Language:</strong> Use respectful and
                  appropriate language
                </li>
              </ul>

              <h2>6. Location Services and Privacy</h2>

              <h3>6.1 Location Data</h3>
              <ul>
                <li>
                  <strong>Permission Required:</strong> We require location
                  permission for proximity matching
                </li>
                <li>
                  <strong>Approximate Location:</strong> We share approximate
                  location, not exact coordinates
                </li>
                <li>
                  <strong>Control Options:</strong> You can control location
                  sharing in settings
                </li>
                <li>
                  <strong>Safety Purpose:</strong> Location data helps ensure
                  user safety
                </li>
              </ul>

              <h3>6.2 Privacy Protection</h3>
              <ul>
                <li>
                  <strong>Personal Information:</strong> We protect your
                  personal information
                </li>
                <li>
                  <strong>Contact Details:</strong> We do not share your phone
                  number or email with other users
                </li>
                <li>
                  <strong>Message Privacy:</strong> Your private messages remain
                  private
                </li>
                <li>
                  <strong>Data Security:</strong> We implement security measures
                  to protect your data
                </li>
              </ul>

              <h2>7. Prohibited Content and Behavior</h2>

              <h3>7.1 Content Restrictions</h3>
              <ul>
                <li>
                  <strong>No Explicit Content:</strong> No nudity, sexual
                  content, or explicit images
                </li>
                <li>
                  <strong>No Violence:</strong> No violent, threatening, or
                  harmful content
                </li>
                <li>
                  <strong>No Hate Speech:</strong> No discriminatory or hateful
                  language
                </li>
                <li>
                  <strong>No Spam:</strong> No promotional or commercial content
                </li>
                <li>
                  <strong>No False Information:</strong> No misleading or false
                  information
                </li>
              </ul>

              <h3>7.2 Behavioral Restrictions</h3>
              <ul>
                <li>
                  <strong>No Harassment:</strong> No stalking, harassment, or
                  unwanted contact
                </li>
                <li>
                  <strong>No Catfishing:</strong> No fake profiles or
                  misrepresentation
                </li>
                <li>
                  <strong>No Solicitation:</strong> No soliciting money, gifts,
                  or services
                </li>
                <li>
                  <strong>No Multiple Accounts:</strong> No creating multiple
                  accounts
                </li>
                <li>
                  <strong>No Automated Use:</strong> No bots, scripts, or
                  automated tools
                </li>
              </ul>

              <h2>8. Reporting and Moderation</h2>

              <h3>8.1 Reporting System</h3>
              <ul>
                <li>
                  <strong>Report Button:</strong> Use the report button for
                  inappropriate behavior
                </li>
                <li>
                  <strong>Block Users:</strong> Block users who make you
                  uncomfortable
                </li>
                <li>
                  <strong>Safety Concerns:</strong> Report safety concerns
                  immediately
                </li>
                <li>
                  <strong>False Reports:</strong> Do not make false or malicious
                  reports
                </li>
              </ul>

              <h3>8.2 Moderation Actions</h3>
              <ul>
                <li>
                  <strong>Content Removal:</strong> We may remove inappropriate
                  content
                </li>
                <li>
                  <strong>Account Warnings:</strong> We may issue warnings for
                  violations
                </li>
                <li>
                  <strong>Account Suspension:</strong> We may suspend accounts
                  for serious violations
                </li>
                <li>
                  <strong>Account Termination:</strong> We may terminate
                  accounts for repeated violations
                </li>
              </ul>

              <h2>9. Premium Features and Payments</h2>

              <h3>9.1 Premium Subscriptions</h3>
              <ul>
                <li>
                  <strong>Optional Features:</strong> Premium features are
                  optional
                </li>
                <li>
                  <strong>Payment Terms:</strong> Payments are processed through
                  app stores
                </li>
                <li>
                  <strong>Auto-Renewal:</strong> Subscriptions may auto-renew
                  unless cancelled
                </li>
                <li>
                  <strong>Refund Policy:</strong> Refunds are subject to app
                  store policies
                </li>
              </ul>

              <h3>9.2 Free Features</h3>
              <ul>
                <li>
                  <strong>Basic Matching:</strong> Free users can match with
                  nearby users
                </li>
                <li>
                  <strong>Basic Messaging:</strong> Free users can send basic
                  messages
                </li>
                <li>
                  <strong>Profile Creation:</strong> Free users can create and
                  maintain profiles
                </li>
                <li>
                  <strong>Safety Features:</strong> All safety features are
                  available to all users
                </li>
              </ul>

              <h2>10. Termination and Account Closure</h2>

              <h3>10.1 Account Termination</h3>
              <ul>
                <li>
                  <strong>Your Right:</strong> You may delete your account at
                  any time
                </li>
                <li>
                  <strong>Our Right:</strong> We may terminate accounts for
                  violations
                </li>
                <li>
                  <strong>Immediate Effect:</strong> Termination takes effect
                  immediately
                </li>
                <li>
                  <strong>Data Deletion:</strong> We will delete your data as
                  described in our Privacy Policy
                </li>
              </ul>

              <h3>10.2 Consequences of Termination</h3>
              <ul>
                <li>
                  <strong>Access Loss:</strong> You will lose access to your
                  account
                </li>
                <li>
                  <strong>Message Loss:</strong> Your messages and matches will
                  be deleted
                </li>
                <li>
                  <strong>No Refunds:</strong> No refunds for unused premium
                  time
                </li>
                <li>
                  <strong>Re-registration:</strong> You may not re-register
                  without permission
                </li>
              </ul>

              <h2>11. Disclaimers and Limitations</h2>

              <h3>11.1 Service Disclaimers</h3>
              <ul>
                <li>
                  <strong>No Guarantees:</strong> We do not guarantee successful
                  matches or relationships
                </li>
                <li>
                  <strong>User Responsibility:</strong> Users are responsible
                  for their interactions
                </li>
                <li>
                  <strong>No Endorsement:</strong> We do not endorse or verify
                  user information
                </li>
                <li>
                  <strong>Service Availability:</strong> Service may be
                  unavailable due to maintenance or technical issues
                </li>
              </ul>

              <h3>11.2 Limitation of Liability</h3>
              <ul>
                <li>
                  <strong>No Liability:</strong> We are not liable for user
                  interactions or relationships
                </li>
                <li>
                  <strong>No Damages:</strong> We are not liable for indirect,
                  incidental, or consequential damages
                </li>
                <li>
                  <strong>Maximum Liability:</strong> Our liability is limited
                  to the amount you paid for the service
                </li>
                <li>
                  <strong>Force Majeure:</strong> We are not liable for events
                  beyond our control
                </li>
              </ul>

              <h2>12. Legal Compliance</h2>

              <h3>12.1 Applicable Laws</h3>
              <ul>
                <li>
                  <strong>Local Laws:</strong> You must comply with all
                  applicable local laws
                </li>
                <li>
                  <strong>Age of Consent:</strong> You must comply with age of
                  consent laws in your jurisdiction
                </li>
                <li>
                  <strong>Harassment Laws:</strong> You must comply with
                  anti-harassment laws
                </li>
                <li>
                  <strong>Privacy Laws:</strong> We comply with applicable
                  privacy laws
                </li>
              </ul>

              <h3>12.2 International Users</h3>
              <ul>
                <li>
                  <strong>Global Service:</strong> Our service is available
                  globally
                </li>
                <li>
                  <strong>Local Compliance:</strong> We comply with local laws
                  where we operate
                </li>
                <li>
                  <strong>Data Transfers:</strong> Your data may be transferred
                  internationally
                </li>
                <li>
                  <strong>Jurisdiction:</strong> These terms are governed by
                  applicable law
                </li>
              </ul>

              <h2>13. Changes to Terms</h2>

              <h3>13.1 Updates</h3>
              <ul>
                <li>
                  <strong>Right to Modify:</strong> We may modify these terms at
                  any time
                </li>
                <li>
                  <strong>Notification:</strong> We will notify you of
                  significant changes
                </li>
                <li>
                  <strong>Effective Date:</strong> Changes become effective when
                  posted
                </li>
                <li>
                  <strong>Continued Use:</strong> Continued use constitutes
                  acceptance of changes
                </li>
              </ul>

              <h3>13.2 Dispute Resolution</h3>
              <ul>
                <li>
                  <strong>Good Faith:</strong> We encourage good faith
                  resolution of disputes
                </li>
                <li>
                  <strong>Contact Us:</strong> Contact us first to resolve any
                  issues
                </li>
                <li>
                  <strong>Arbitration:</strong> Disputes may be resolved through
                  arbitration
                </li>
                <li>
                  <strong>Class Action Waiver:</strong> You waive the right to
                  participate in class actions
                </li>
              </ul>

              <h2>14. Contact Information</h2>

              <h3>14.1 General Inquiries</h3>
              <ul>
                <li>
                  <strong>Email:</strong> support@hamsey.co
                </li>
                <li>
                  <strong>Website:</strong> https://hamsey.co
                </li>
                <li>
                  <strong>Response Time:</strong> We respond to inquiries within
                  48 hours
                </li>
              </ul>

              <h3>14.2 Safety and Legal</h3>
              <ul>
                <li>
                  <strong>Safety Issues:</strong> support@hamsey.co
                </li>
                <li>
                  <strong>Legal Matters:</strong> support@hamsey.co
                </li>
                <li>
                  <strong>Privacy Concerns:</strong> support@hamsey.co
                </li>
              </ul>

              <p className="last-updated">Last Updated: December 19, 2024</p>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
