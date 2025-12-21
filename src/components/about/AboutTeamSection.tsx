import React from "react";
import Image from "next/image";

const AboutTeamSection: React.FC = () => {
  const teamMembers = [
    {
      name: "Rohit Singh Tanwar",
      role: "Co-Founder & CEO",
      image: "/image/rohit.png",
    },
    {
      name: "Shaurya Pratap Singh",
      role: "Co-founder & CTO",
      image: "/image/shaurya.jpeg",
    },
    { name: "Harsh", role: "Backend Developer", image: "/image/Harsh.png" },
  ];

  return (
    <section className="about-team-section">
      <div className="about-team-container">
        <h2 className="about-section-title text-center animate-on-scroll slide-up">
          Meet Our <span>Team</span>
        </h2>
        <p className="about-section-text text-center team-intro animate-on-scroll slide-up delay-200">
          The passionate individuals behind Hamsey are united by a shared
          vision: to help people form meaningful connections in an increasingly
          digital world.
        </p>

        <div className="team-members-grid">
          {teamMembers.map((member, index) => (
            <div
              className="team-member-card animate-on-scroll scale-up delay-300"
              key={index}
            >
              <div className="team-member-image">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="team-member-info">
                <h3 className="team-member-name">{member.name}</h3>
                <p className="team-member-role">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeamSection;
