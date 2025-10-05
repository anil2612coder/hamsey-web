import React from "react";

const AboutMissionSection: React.FC = () => {
  return (
    <section className="about-mission-section">
      <div className="about-mission-container">
        <div className="about-mission-image animate-on-scroll slide-left">
          <img
            src="https://cdn.pixabay.com/photo/2020/05/24/23/44/hands-5216585_1280.jpg"
            alt="People connecting"
          />
        </div>
        <div className="about-mission-content animate-on-scroll slide-right">
          <h2 className="about-section-title white-text">
            Our <span>Mission</span>
          </h2>
          <p className="about-section-text about-section-text-mision">
            At Hemsey, we believe that the most meaningful connections often
            begin with a glance. Our mission is to empower people to act on
            those moments of attraction safely and confidently.
          </p>
          <div className="about-mission-values">
            <div className="mission-value-item animate-on-scroll slide-up">
              <div className="mission-value-icon primary-bg">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="mission-value-text">
                <h3>Authentic Connections</h3>
                <p>
                  We prioritize quality over quantity, focusing on real-world
                  chemistry rather than endless digital browsing.
                </p>
              </div>
            </div>
            <div className="mission-value-item animate-on-scroll slide-up delay-200">
              <div className="mission-value-icon primary-bg">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 11.99H19C18.47 16.11 15.72 19.78 12 20.93V12H5V6.3L12 3.19V11.99Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="mission-value-text">
                <h3>Safety First</h3>
                <p>
                  We&apos;ve built our platform with privacy and security at its
                  core, giving users control over their interactions.
                </p>
              </div>
            </div>
            <div className="mission-value-item animate-on-scroll slide-up delay-400">
              <div className="mission-value-icon primary-bg">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 16.08C17.24 16.08 16.56 16.38 16.04 16.85L8.91 12.7C8.96 12.47 9 12.24 9 12C9 11.76 8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C19.66 8 21 6.66 21 5C21 3.34 19.66 2 18 2C16.34 2 15 3.34 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C4.34 9 3 10.34 3 12C3 13.66 4.34 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.16 18.35C15.11 18.56 15.08 18.78 15.08 19C15.08 20.61 16.39 21.92 18 21.92C19.61 21.92 20.92 20.61 20.92 19C20.92 17.39 19.61 16.08 18 16.08Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="mission-value-text">
                <h3>Inclusive Community</h3>
                <p>
                  We&apos;re creating a platform where everyone feels welcome,
                  respected, and empowered to connect.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMissionSection;
