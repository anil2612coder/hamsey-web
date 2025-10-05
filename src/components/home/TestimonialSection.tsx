"use client";
import React, { useEffect, useState } from "react";

const testimonials = [
  "Hamsey has made meeting new people so much easier. I can send a message request in real time and instantly connect with others, no awkwardness! It’s a total game changer for someone like me who used to hesitate.",
  "As someone who struggles with social anxiety, Hamsey has been a huge help. It lets me reach out to people without the pressure of initiating a conversation face-to-face. I feel more confident connecting now.",
  "I love how simple Hamsey makes it to connect with people. No more second-guessing when to talk to someone. Just send a request and see if they’re interested! It’s super easy and natural.",
  "Hamsey has helped me meet so many interesting people. I love how quick and effortless it is to send a message request and start a conversation. No more missing chances to connect!",
];

const TestimonialSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 2));
    }, 100);

    const slideInterval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
      setProgress(0);
    }, 5000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(slideInterval);
    };
  }, []);

  return (
    <div className="testimonial-section">
      <div className="testimonial-wrapper">
        <h4 className="testimonial-heading animate-on-scroll slide-up">
          What our users say
        </h4>
        <div className="quote animate-on-scroll slide-up">
          <svg
            width="48"
            height="43"
            viewBox="0 0 48 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28.2137 43V28.6051C28.2137 20.731 29.7405 14.2718 32.7939 9.22746C35.9695 4.18312 41.0382 1.1073 48 0V7.56651C43.8473 8.05865 40.916 9.65808 39.2061 12.3648C37.4962 15.0715 36.6412 19.3777 36.6412 25.2833L31.145 24.5451H47.8168V43H28.2137ZM0 43V28.6051C0 20.731 1.52672 14.2718 4.58015 9.22746C7.75572 4.18312 12.8244 1.1073 19.7863 0V7.56651C15.6336 8.05865 12.7023 9.65808 10.9924 12.3648C9.28244 15.0715 8.42748 19.3777 8.42748 25.2833L2.9313 24.5451H19.6031V43H0Z"
              fill="#D91C4B"
            />
          </svg>
        </div>
        <p className="testimonial-text animate-on-scroll scale-up">
          {testimonials[activeIndex]}
        </p>
        <div className="progress-bars animate-on-scroll slide-up">
          {testimonials.map((_, index) => (
            <div className="bar-container" key={index}>
              <div
                className="bar-fill"
                style={{
                  width:
                    index === activeIndex
                      ? `${progress}%`
                      : index < activeIndex
                      ? "100%"
                      : "0%",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
