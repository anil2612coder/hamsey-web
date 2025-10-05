import React from "react";

const ContactInfoSection: React.FC = () => {
  return (
    <div className="contact-info-container">
      <div className="contact-info-wrapper">
        <div className="contact-info-header animate-on-scroll slide-up">
          <h2 className="contact-info-title">Other Ways to Connect</h2>
          <p className="contact-info-description">
            Prefer to reach out directly? Here are some alternative ways to get
            in touch with us.
          </p>
        </div>
        <div className="contact-info-cards">
          <div className="contact-info-card animate-on-scroll slide-up">
            <div className="contact-info-icon animate-pulse">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"
                  fill="#D91C4B"
                />
              </svg>
            </div>
            <h3 className="contact-card-title">Email Us</h3>
            <p className="contact-card-info">support@hemsey.com</p>
            <p className="contact-card-description">
              For general inquiries and support
            </p>
          </div>
          <div className="contact-info-card animate-on-scroll slide-up delay-200">
            <div className="contact-info-icon animate-pulse">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"
                  fill="#D91C4B"
                />
              </svg>
            </div>
            <h3 className="contact-card-title">Call Us</h3>
            <p className="contact-card-info">+1 (555) 123-4567</p>
            <p className="contact-card-description">
              Available Monday-Friday, 9am-5pm EST
            </p>
          </div>
          <div className="contact-info-card animate-on-scroll slide-up delay-400">
            <div className="contact-info-icon animate-pulse">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
                  fill="#D91C4B"
                />
              </svg>
            </div>
            <h3 className="contact-card-title">Visit Us</h3>
            <p className="contact-card-info">123 App Street, Suite 100</p>
            <p className="contact-card-description">
              San Francisco, CA 94107, USA
            </p>
          </div>
        </div>
        <div className="contact-social-links animate-on-scroll slide-up delay-600">
          <h3 className="contact-social-title">Follow Us</h3>
          <div className="contact-social-icons">
            <a href="#" className="contact-social-icon animate-pulse">
              {/* Twitter */}
            </a>
            <a href="#" className="contact-social-icon animate-pulse">
              {/* Instagram */}
            </a>
            <a href="#" className="contact-social-icon animate-pulse">
              {/* Facebook */}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoSection;
