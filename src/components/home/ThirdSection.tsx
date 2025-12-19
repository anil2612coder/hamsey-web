import React from "react";
import Image from "next/image";

type Props = {
  imageUrl: string;
  title: string;
  titleSpan: string;
  description: string;
};

const ThirdSection: React.FC<Props> = ({
  imageUrl,
  title,
  titleSpan,
  description,
}) => {
  return (
    <div className="second-section">
      <div className="second-section-container third-section-container">
        <div className="second-content animate-on-scroll slide-left">
          <h1 className="second-section-title">
            {title} <span>{titleSpan}</span>
          </h1>
          <p className="second-section-description">{description}</p>
        </div>
        <div className="second-section-img animate-on-scroll slide-right">
          <Image
            className="second-section-image"
            src={imageUrl}
            alt={`Hamsey app feature: ${title} ${titleSpan}`}
            width={800}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
