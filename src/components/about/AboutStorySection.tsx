/* eslint-disable @next/next/no-img-element */
import React from "react";

const AboutStorySection: React.FC = () => {
  return (
    <section className="about-story-section">
      <div className="about-story-container">
        <div className="about-story-content animate-on-scroll slide-left">
          <h2 className="about-section-title">
            How it all <span>Began</span>
          </h2>
          <p className="about-section-text">
            Our journey started with a simple observation: in a world where
            we&apos;re more connected than ever digitally, genuine human
            connections were becoming harder to form. We noticed how people
            would pass by each other in cafes, on streets, or at events,
            exchanging glances but never words.
          </p>
          <p className="about-section-text">
            Founded in 2025, Hemsey was born from the desire to bridge this gap
            – to help people transform those fleeting moments of connection into
            meaningful relationships. Our team of passionate innovators,
            designers, and relationship experts came together with one mission:
            to create a platform that makes it easier and safer to reach out to
            someone who catches your eye.
          </p>
          <div className="story-stats animate-on-scroll slide-up">
            <div className="stat-item">
              <span className="stat-number primary-text">2025</span>
              <span className="stat-label">Founded</span>
            </div>
            <div className="stat-item">
              <span className="stat-number primary-text">5+</span>
              <span className="stat-label">Team Members</span>
            </div>
          </div>
        </div>
        <div className="about-story-image animate-on-scroll slide-right">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Our team collaborating"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutStorySection;
