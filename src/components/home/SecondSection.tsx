import React from "react";

type Props = {
  isBg?: string;
  imageUrl: string;
  title: string;
  titleSpan: string;
  description: string;
};

const SecondSection: React.FC<Props> = ({ isBg = "", imageUrl, title, titleSpan, description }) => {
  return (
    <div className={`second-section ${isBg}`}>
      <div className="second-section-container">
        <div className="second-section-img animate-on-scroll slide-left">
          <img className="second-section-image" src={imageUrl} alt="second-section" />
        </div>
        <div className="second-content animate-on-scroll slide-right">
          <h1 className="second-section-title">
            {title} <span>{titleSpan}</span>
          </h1>
          <p className="second-section-description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;


