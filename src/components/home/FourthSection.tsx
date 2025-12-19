import React from "react";
import Image from "next/image";

const FourthSection: React.FC = () => {
  return (
    <div className="third-section">
      <div className="second-section-container">
        <div className="third-section-img">
          <Image
            className="second-section-image"
            src="/image/3.webp"
            alt="Hamsey secure messaging with end-to-end encryption"
            width={800}
            height={600}
          />
        </div>
        <div className="second-content">
          <h1 className="second-section-title white-text">
            Request <span>Securely</span>
          </h1>
          <p className="second-section-description white-text">
            With end-to-end encryption, your personal messages. Only you and the
            person you&apos;re talking to can read them, and nobody in between,
            not even us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
