import React from "react";
import Navigation from "@/components/common/Navigation";

const ContactHeroSection: React.FC = () => {
  return (
    <div className="contact-hero-container primary-bg">
      <Navigation theme="dark" />
      <div className="contact-hero-wrapper">
        <div className="contact-hero-content">
          <h1 className="contact-hero-title white-text animate-fade-in">
            Get in <span className="contact-hero-title-span">Touch</span>
          </h1>
          <p className="contact-hero-description white-text animate-slide-up delay-300">
            We&apos;d love to hear from you. Whether you have a question about
            our app, features, or anything else, our team is ready to answer all
            your questions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactHeroSection;
