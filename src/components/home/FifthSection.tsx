import React from "react";

type Props = {
  title: string;
  titleSpan: string;
  description: string;
};

const FifthSection: React.FC<Props> = ({ title, titleSpan, description }) => {
  return (
    <div className="fifth-section-container">
      <img className="fifth-sec-img" src="/image/chats.png" alt="chats" />
      <div className="second-content fifth-section-content animate-on-scroll slide-right">
        <h1 className="second-section-title">
          {title} <span>{titleSpan}</span>
        </h1>
        <p className="second-section-description">{description}</p>
      </div>
      <img className="fifth-sec-img" src="/image/chats2.png" alt="chats" />
    </div>
  );
};

export default FifthSection;
