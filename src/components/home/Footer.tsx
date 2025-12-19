"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const HemseySectionFooter: React.FC = () => {
  const [selectedApp, setSelectedApp] = useState<"android" | "ios">("android");

  const storeLinks = {
    android: "https://play.google.com/store/apps/details?id=com.hamsey.co",
    ios: "https://apps.apple.com/in/app/hamsey-from-glance-to-hello/id6755126171",
  } as const;

  const qrCodes = {
    android: "/image/QR Code.png",
    ios: "/image/QR Code.png",
  } as const;

  return (
    <div className="footer-container">
      <div className="footer-wrapper animate-fade-in">
        <div className="footer-top-section">
          <div className="footer-qr-container animate-fade-in">
            <div className="footer-qr-inner">
              <Image
                src={qrCodes[selectedApp]}
                alt={`QR code to download Hamsey ${selectedApp === 'android' ? 'on Google Play' : 'on App Store'}`}
                className="footer-qr-image"
                width={158}
                height={158}
              />
              <a
                href={storeLinks[selectedApp]}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-download-row"
              >
                <span className="footer-download-text">
                  Download for {selectedApp === 'android' ? 'Android' : 'iOS'}
                </span>
                <svg
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.8526 3.86574L2.51771 13.2006L0.983887 11.6668L10.3187 2.33191L2.09131 2.33191L2.09131 0.163086H14.0214V12.0932H11.8526V3.86574Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-app-info animate-fade-in delay-200">
            <div className="footer-app-text">
              <div className="logo-header">
                <Image
                  src="/image/logo.svg"
                  alt="Hamsey logo"
                  width={150}
                  height={40}
                />
              </div>
              <p className="footer-description">
                There are multiple ways to connect with people, but not all are
                this easy.
              </p>

              {/* App Store Badges */}
              <div className="footer-store-badges">
                <a
                  href={storeLinks.android}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-store-badge"
                  aria-label="Download Hamsey on Google Play"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.807 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                  </svg>
                  <span>Google Play</span>
                </a>
                <a
                  href={storeLinks.ios}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-store-badge"
                  aria-label="Download Hamsey on App Store"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <span>App Store</span>
                </a>
              </div>
            </div>

            <div className="footer-app-selector">
              <button
                className={`footer-app-button ${selectedApp === "android" ? "footer-app-button-active" : ""
                  }`}
                onClick={() => setSelectedApp("android")}
              >
                Android App
              </button>
              <button
                className={`footer-app-button ${selectedApp === "ios" ? "footer-app-button-active" : ""
                  }`}
                onClick={() => setSelectedApp("ios")}
              >
                iOS App
              </button>
            </div>
          </div>
        </div>

        <div className="footer-divider animate-fade-in delay-400"></div>

        <div className="footer-links-container">
          <div className="footer-social-links animate-fade-in">
            <h3 className="footer-nav-title">Social media</h3>
            <a
              href="https://www.instagram.com/hamsey.connect?igsh=b3c3dWxjMDZuYWhx"
              className="footer-social-link"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="footer-social-icon animate-pulse"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 1.44c2.136 0 2.389.008 3.233.046.78.036 1.203.166 1.485.276.373.145.64.318.92.598.28.28.453.547.598.92.11.282.24.705.276 1.485.038.844.046 1.097.046 3.233s-.008 2.389-.046 3.233c-.036.78-.166 1.203-.276 1.485-.145.373-.318.64-.598.92-.28.28-.547.453-.92.598-.282.11-.705.24-1.485.276-.844.038-1.097.046-3.233.046s-2.389-.008-3.233-.046c-.78-.036-1.203-.166-1.485-.276-.373-.145-.64-.318-.92-.598-.28-.28-.453-.547-.598-.92-.11-.282-.24-.705-.276-1.485-.038-.844-.046-1.097-.046-3.233s.008-2.389.046-3.233c.036-.78.166-1.203.276-1.485.145-.373.318-.64.598-.92.28-.28.547-.453.92-.598.282-.11.705-.24 1.485-.276.844-.038 1.097-.046 3.233-.046M8 0C5.827 0 5.555.01 4.701.048 3.848.087 3.269.222 2.76.42a4.38 4.38 0 00-1.56.987c-.428.428-.747.959-.987 1.56-.198.51-.333 1.09-.372 1.942C-.01 5.555 0 5.827 0 8s.01 2.445.048 3.299c.039.851.174 1.43.372 1.942.24.6.559 1.132.987 1.56.428.428.959.747 1.56.987.51.198 1.09.333 1.942.372C5.555 16.01 5.827 16 8 16s2.445-.01 3.299-.048c.851-.039 1.43-.174 1.942-.372a4.38 4.38 0 001.56-.987c.428-.428.747-.959.987-1.56.198-.51.333-1.09.372-1.942C16.01 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.039-.851-.174-1.43-.372-1.942a4.38 4.38 0 00-.987-1.56 4.38 4.38 0 00-1.56-.987c-.51-.198-1.09-.333-1.942-.372C10.445.01 10.173 0 8 0zm0 3.89a4.11 4.11 0 100 8.22 4.11 4.11 0 000-8.22zm0 6.78a2.67 2.67 0 110-5.34 2.67 2.67 0 010 5.34zm5.23-6.94a.96.96 0 11-1.92 0 .96.96 0 011.92 0z"
                  fill="white"
                />
              </svg>
              <span>Instagram</span>
            </a>
            <a
              href="https://www.linkedin.com/company/hamsay-proximitydiscovery"
              className="footer-social-link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="footer-social-icon"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
              <span>Linkedin</span>
            </a>
          </div>

          <div className="footer-nav-column animate-fade-in delay-200">
            <h3 className="footer-nav-title">General</h3>
            <div className="footer-nav-links">
              <Link href="/about" className="footer-nav-link">
                About us
              </Link>
              <Link href="/contact" className="footer-nav-link">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="footer-nav-column animate-fade-in delay-400">
            <h3 className="footer-nav-title">Company</h3>
            <div className="footer-nav-links">
              <Link href="/blog" className="footer-nav-link">
                Blog
              </Link>
              <Link href="/child-safety" className="footer-nav-link">
                Child Safety Standards
              </Link>
              <Link href="/terms" className="footer-nav-link">
                Terms & Conditions
              </Link>
              <Link href="/privacy" className="footer-nav-link">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        <p className="footer-description footer-copyright">
          By continuing past this Page, you agree to our{" "}
          <Link href="/terms" className="footer-copyright-link">
            Terms of Service
          </Link>
          , Cookie Policy,{" "}
          <Link href="/privacy" className="footer-copyright-link">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/content-policy" className="footer-copyright-link">
            Content Policies
          </Link>
          . All trademarks are properties of their respective owners. 2025 ©
          Hamsey Neosolve Ventures India Ltd. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default HemseySectionFooter;
