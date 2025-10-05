import React from "react";

const FourthSection: React.FC = () => {
  return (
    <div className="third-section">
      <div className="second-section-container">
        <div className="third-section-img">
          <img
            className="second-section-image"
            src="/image/3.webp"
            alt="second-section"
          />
        </div>
        <div className="second-content">
          <h1 className="second-section-title white-text">
            Request <span>Securely</span>
          </h1>
          <p className="second-section-description white-text">
            With end-to-end encryption, your personal messages. Only you and the
            person you're talking to can read to them, and nobody in between,
            not even Us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
