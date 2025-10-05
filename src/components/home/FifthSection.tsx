import React from "react";
import Image from "next/image";

type Props = {
  title: string;
  titleSpan: string;
  description: string;
};

const FifthSection: React.FC<Props> = ({ title, titleSpan, description }) => {
  return (
    <div className="fifth-section-container">
      <Image
        className="fifth-sec-img"
        src="/image/chats.png"
        alt="chats"
        width={1200}
        height={800}
      />
      <div className="second-content fifth-section-content animate-on-scroll slide-right">
        <h1 className="second-section-title">
          {title} <span>{titleSpan}</span>
        </h1>
        <p className="second-section-description">{description}</p>
      </div>
      <Image
        className="fifth-sec-img"
        src="/image/chats2.png"
        alt="chats"
        width={1200}
        height={800}
      />
    </div>
  );
};

export default FifthSection;
