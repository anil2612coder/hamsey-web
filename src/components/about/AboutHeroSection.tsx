import React from "react";
import Navigation from "@/components/common/Navigation";

const AboutHeroSection: React.FC = () => {
  return (
    <section className="about-hero-section">
      <Navigation />
      <div className="about-hero-content">
        <h1 className="about-hero-title animate-fade-in">
          Our <span className="primary-text">Story</span>
        </h1>
        <p className="about-hero-subtitle animate-slide-up delay-300">
          Creating meaningful connections in a digital world where every glance
          can become a conversation
        </p>
      </div>
    </section>
  );
};

export default AboutHeroSection;
