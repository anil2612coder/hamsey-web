"use client";
import React, { useState } from "react";

const ContactFormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", subject: "", message: "" });
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <div className="contact-form-container">
      <div className="contact-form-wrapper animate-on-scroll slide-up">
        <div className="contact-form-header">
          <h2 className="contact-form-title">Send us a Message</h2>
          <p className="contact-form-description">
            Fill out the form below and we'll get back to you as soon as
            possible.
          </p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group animate-on-scroll slide-up">
            <label htmlFor="name" className="form-label">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group animate-on-scroll slide-up delay-100">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group animate-on-scroll slide-up delay-200">
            <label htmlFor="subject" className="form-label">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="form-input"
              placeholder="What is this regarding?"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group animate-on-scroll slide-up delay-300">
            <label htmlFor="message" className="form-label">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              className="form-textarea"
              placeholder="Type your message here..."
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
            />
          </div>
          <button
            type="submit"
            className="form-submit-btn primary-bg white-text animate-on-scroll slide-up delay-400"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactFormSection;
