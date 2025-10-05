"use client";
import React from "react";
import Navigation from "../common/Navigation";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <Navigation theme="dark" />
      <div className="hero-content">
        <h1 className="hero-title animate-fade-in">
          From glance to hello, <br /> made easy
        </h1>
        <button
          onClick={() =>
            (window.location.href =
              "https://play.google.com/store/apps/details?id=com.hamsey.co")
          }
          className="btn-white-bg-primary-text animate-slide-up delay-300"
        >
          Download
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
