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
                Hamsey ("we," "our," or "us") is committed to protecting your
                privacy. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you use our
                proximity-based dating application. Please read this Privacy
                Policy carefully. By accessing or using our platform, you
                acknowledge that you have read, understood, and agree to be
                bound by all the terms of this Privacy Policy.
              </p>

              <h2>2. Information We Collect</h2>

              <h3>2.1 Personal Information</h3>
              <ul>
                <li>
                  <strong>Name and Profile Information:</strong> Your display
                  name, age, gender, and profile description
                </li>
                <li>
                  <strong>Contact Information:</strong> Email address and phone
                  number for account verification
                </li>
                <li>
                  <strong>Photos and Videos:</strong> Profile pictures and
                  images you choose to share
                </li>
                <li>
                  <strong>Location Data:</strong> Your precise and approximate
                  location to show nearby users
                </li>
                <li>
                  <strong>Communication Data:</strong> Messages, photos, and
                  other content you share with other users
                </li>
              </ul>

              <h3>2.2 Technical Information</h3>
              <ul>
                <li>
                  <strong>Device Information:</strong> Device type, operating
                  system, unique device identifiers
                </li>
                <li>
                  <strong>Usage Data:</strong> How you interact with the app,
                  features used, time spent
                </li>
                <li>
                  <strong>Log Data:</strong> IP address, browser type, pages
                  visited, access times
                </li>
                <li>
                  <strong>Cookies and Tracking:</strong> Analytics data to
                  improve app performance
                </li>
              </ul>

              <h2>3. How We Use Your Information</h2>

              <h3>3.1 Core App Functionality</h3>
              <ul>
                <li>
                  <strong>Matching:</strong> Show you nearby users based on your
                  location and preferences
                </li>
                <li>
                  <strong>Communication:</strong> Enable messaging and photo
                  sharing between users
                </li>
                <li>
                  <strong>Profile Management:</strong> Create and maintain your
                  dating profile
                </li>
                <li>
                  <strong>Safety:</strong> Verify user identities and prevent
                  fraud
                </li>
              </ul>

              <h3>3.2 App Improvement</h3>
              <ul>
                <li>
                  <strong>Analytics:</strong> Understand how users interact with
                  the app
                </li>
                <li>
                  <strong>Performance:</strong> Monitor app performance and fix
                  technical issues
                </li>
                <li>
                  <strong>Features:</strong> Develop new features based on user
                  behavior
                </li>
                <li>
                  <strong>Personalization:</strong> Customize your experience
                  and show relevant content
                </li>
              </ul>

              <h3>3.3 Safety and Security</h3>
              <ul>
                <li>
                  <strong>Moderation:</strong> Review and moderate
                  user-generated content
                </li>
                <li>
                  <strong>Reporting:</strong> Handle reports of inappropriate
                  behavior
                </li>
                <li>
                  <strong>Legal Compliance:</strong> Comply with applicable laws
                  and regulations
                </li>
                <li>
                  <strong>Fraud Prevention:</strong> Detect and prevent
                  fraudulent accounts
                </li>
              </ul>

              <h2>4. Location Data Usage</h2>

              <h3>4.1 Why We Collect Location Data</h3>
              <ul>
                <li>
                  <strong>Proximity Matching:</strong> Show you users who are
                  nearby
                </li>
                <li>
                  <strong>Distance Display:</strong> Show how far other users
                  are from you
                </li>
                <li>
                  <strong>Location-Based Features:</strong> Enable
                  location-specific dating features
                </li>
                <li>
                  <strong>Safety:</strong> Help ensure user safety in real-world
                  meetings
                </li>
              </ul>

              <h3>4.2 How Location Data is Used</h3>
              <ul>
                <li>
                  <strong>Real-Time Location:</strong> Your current location is
                  used to find nearby users
                </li>
                <li>
                  <strong>Location History:</strong> We may store your location
                  history to improve matching
                </li>
                <li>
                  <strong>Background Location:</strong> We may access your
                  location when the app is closed to show you when someone
                  nearby wants to connect
                </li>
                <li>
                  <strong>Location Sharing:</strong> Your approximate location
                  (not exact address) is shared with other users
                </li>
              </ul>

              <h3>4.3 Location Data Controls</h3>
              <ul>
                <li>
                  You can disable location services at any time in your device
                  settings
                </li>
                <li>Disabling location will limit app functionality</li>
                <li>
                  You can choose to share your location only when using the app
                </li>
                <li>You can block specific users from seeing your location</li>
              </ul>

              <h2>5. Information Sharing</h2>

              <h3>5.1 With Other Users</h3>
              <ul>
                <li>
                  <strong>Profile Information:</strong> Your name, age, photos,
                  and bio are visible to other users
                </li>
                <li>
                  <strong>Location:</strong> Your approximate location is shared
                  with nearby users
                </li>
                <li>
                  <strong>Messages:</strong> Content you send to other users is
                  visible to them
                </li>
                <li>
                  <strong>Activity Status:</strong> Whether you&apos;re online
                  or recently active
                </li>
              </ul>

              <h3>5.2 With Third Parties</h3>
              <ul>
                <li>
                  <strong>Service Providers:</strong> We share data with
                  companies that help us operate the app (hosting, analytics,
                  customer support)
                </li>
                <li>
                  <strong>Legal Requirements:</strong> We may share information
                  when required by law or to protect rights
                </li>
                <li>
                  <strong>Business Transfers:</strong> Information may be
                  transferred in case of merger or acquisition
                </li>
                <li>
                  <strong>Consent:</strong> We may share information with your
                  explicit consent
                </li>
              </ul>

              <h3>5.3 We Do NOT Share</h3>
              <ul>
                <li>Your exact location coordinates</li>
                <li>Your phone number or email with other users</li>
                <li>Your private messages with third parties</li>
                <li>Your personal information for advertising purposes</li>
              </ul>

              <h2>6. Data Security</h2>

              <h3>6.1 Security Measures</h3>
              <ul>
                <li>
                  <strong>Encryption:</strong> All data is encrypted in transit
                  and at rest
                </li>
                <li>
                  <strong>Access Controls:</strong> Limited access to personal
                  information
                </li>
                <li>
                  <strong>Regular Audits:</strong> Security assessments and
                  vulnerability testing
                </li>
                <li>
                  <strong>Secure Infrastructure:</strong> Industry-standard
                  security practices
                </li>
              </ul>

              <h3>6.2 Data Retention</h3>
              <ul>
                <li>
                  <strong>Account Data:</strong> Retained while your account is
                  active
                </li>
                <li>
                  <strong>Location Data:</strong> Retained for up to 12 months
                  for matching purposes
                </li>
                <li>
                  <strong>Messages:</strong> Retained until deleted by users or
                  account closure
                </li>
                <li>
                  <strong>Analytics Data:</strong> Retained for up to 24 months
                  for app improvement
                </li>
              </ul>

              <h2>7. Your Rights and Choices</h2>

              <h3>7.1 Access and Control</h3>
              <ul>
                <li>
                  <strong>View Your Data:</strong> Access all personal
                  information we have about you
                </li>
                <li>
                  <strong>Update Information:</strong> Correct or update your
                  profile information
                </li>
                <li>
                  <strong>Delete Account:</strong> Permanently delete your
                  account and associated data
                </li>
                <li>
                  <strong>Data Portability:</strong> Export your data in a
                  machine-readable format
                </li>
              </ul>

              <h3>7.2 Privacy Settings</h3>
              <ul>
                <li>
                  <strong>Location Sharing:</strong> Control who can see your
                  location
                </li>
                <li>
                  <strong>Profile Visibility:</strong> Control who can see your
                  profile
                </li>
                <li>
                  <strong>Message Controls:</strong> Block users and report
                  inappropriate behavior
                </li>
                <li>
                  <strong>Notification Preferences:</strong> Control what
                  notifications you receive
                </li>
              </ul>

              <h3>7.3 Opt-Out Options</h3>
              <ul>
                <li>
                  <strong>Location Services:</strong> Disable location sharing
                  in device settings
                </li>
                <li>
                  <strong>Push Notifications:</strong> Disable notifications in
                  app settings
                </li>
                <li>
                  <strong>Analytics:</strong> Opt out of analytics data
                  collection
                </li>
                <li>
                  <strong>Marketing:</strong> Opt out of promotional
                  communications
                </li>
              </ul>

              <h2>8. Age Requirements</h2>

              <h3>8.1 Minimum Age</h3>
              <ul>
                <li>
                  <strong>18+ Only:</strong> Our app is only for users 18 years
                  and older
                </li>
                <li>
                  <strong>Age Verification:</strong> We verify user age during
                  registration
                </li>
                <li>
                  <strong>Parental Controls:</strong> Parents can contact us to
                  remove underage accounts
                </li>
                <li>
                  <strong>Reporting:</strong> Users can report underage accounts
                </li>
              </ul>

              <h2>9. International Users</h2>

              <h3>9.1 Data Transfers</h3>
              <ul>
                <li>
                  <strong>Global Service:</strong> Your data may be transferred
                  to and processed in different countries
                </li>
                <li>
                  <strong>Adequate Protection:</strong> We ensure adequate
                  protection for international transfers
                </li>
                <li>
                  <strong>Local Laws:</strong> We comply with local privacy laws
                  where applicable
                </li>
              </ul>

              <h3>9.2 Regional Rights</h3>
              <ul>
                <li>
                  <strong>EU Users:</strong> Additional rights under GDPR
                </li>
                <li>
                  <strong>California Users:</strong> Additional rights under
                  CCPA
                </li>
                <li>
                  <strong>Other Regions:</strong> Rights as provided by local
                  law
                </li>
              </ul>

              <h2>10. Updates to This Policy</h2>

              <h3>10.1 Policy Changes</h3>
              <ul>
                <li>
                  <strong>Notification:</strong> We will notify you of
                  significant changes
                </li>
                <li>
                  <strong>Review:</strong> We encourage you to review this
                  policy periodically
                </li>
                <li>
                  <strong>Effective Date:</strong> Changes will be effective as
                  of the date posted
                </li>
                <li>
                  <strong>Continued Use:</strong> Continued use constitutes
                  acceptance of changes
                </li>
              </ul>

              <h2>11. Contact Information</h2>

              <h3>11.1 Privacy Questions</h3>
              <ul>
                <li>
                  <strong>Email:</strong> support@hamsey.co
                </li>

                <li>
                  <strong>Phone:</strong>+91 7607012157
                </li>
                <li>
                  <strong>Website:</strong> https://hamsey.co
                </li>
              </ul>

              <h3>11.2 Data Protection Officer</h3>
              <ul>
                <li>
                  <strong>Email:</strong> support@hamsey.co
                </li>
                <li>
                  <strong>Response Time:</strong> We respond to privacy
                  inquiries within 30 days
                </li>
              </ul>

              <h2>12. Legal Basis for Processing (EU Users)</h2>

              <h3>12.1 Legal Grounds</h3>
              <ul>
                <li>
                  <strong>Consent:</strong> You consent to data processing for
                  app functionality
                </li>
                <li>
                  <strong>Contract:</strong> Processing necessary for app
                  service provision
                </li>
                <li>
                  <strong>Legitimate Interest:</strong> Processing for app
                  improvement and safety
                </li>
                <li>
                  <strong>Legal Obligation:</strong> Processing required by
                  applicable law
                </li>
              </ul>

              <h2>13. California Privacy Rights (CCPA)</h2>

              <h3>13.1 Your Rights</h3>
              <ul>
                <li>
                  <strong>Right to Know:</strong> What personal information we
                  collect and how we use it
                </li>
                <li>
                  <strong>Right to Delete:</strong> Request deletion of your
                  personal information
                </li>
                <li>
                  <strong>Right to Opt-Out:</strong> Opt out of sale of personal
                  information (we don&apos;t sell)
                </li>
                <li>
                  <strong>Right to Non-Discrimination:</strong> We won&apos;t
                  discriminate for exercising rights
                </li>
              </ul>

              <h2>14. Children&apos;s Privacy</h2>

              <h3>14.1 COPPA Compliance</h3>
              <ul>
                <li>
                  <strong>No Children:</strong> We don&apos;t knowingly collect
                  information from children under 13
                </li>
                <li>
                  <strong>Age Verification:</strong> We verify user age during
                  registration
                </li>
                <li>
                  <strong>Parental Rights:</strong> Parents can request deletion
                  of child&apos;s information
                </li>
                <li>
                  <strong>Reporting:</strong> Report underage users to
                  support@hamsey.co
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
