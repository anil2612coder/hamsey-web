/* eslint-disable @next/next/no-img-element */
import React from "react";

const AboutCtaSection: React.FC = () => {
  return (
    <section className="about-cta-section">
      <div className="about-cta-container">
        <div className="about-cta-content animate-on-scroll slide-left">
          <h2 className="about-cta-title">
            Ready to transform glances into conversations?
          </h2>
          <p className="about-cta-text">
            Download Hemsey today and start making meaningful connections with
            people you encounter in your daily life.
          </p>
          <div className="about-cta-buttons">
            <button className="btn-white-bg-primary-text">
              Download for iOS
            </button>
            <button className="btn-white-bg-primary-text">
              Download for Android
            </button>
          </div>
        </div>
        <div className="about-cta-image animate-on-scroll slide-right">
          <img
            src="https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="People connecting"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutCtaSection;
