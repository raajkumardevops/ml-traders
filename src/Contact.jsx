import React from "react";
import "./contact.css";
import { FaEnvelope, FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p className="contact-description">
          We would love to hear from you! Reach out to us anytime.
        </p>

        <div className="contact-items">

          <a
            href="mailto:mltraders@gmail.com"
            className="contact-card"
            target="_blank"
          >
            <FaEnvelope className="contact-icon" />
            <span>Email: mltraders@gmail.com</span>
          </a>

          <a
            href="https://wa.me/1234567890"
            className="contact-card"
            target="_blank"
          >
            <FaWhatsapp className="contact-icon" />
            <span>WhatsApp: 1234567890</span>
          </a>

          <a
            href="https://facebook.com"
            className="contact-card"
            target="_blank"
          >
            <FaFacebook className="contact-icon" />
            <span>Facebook</span>
          </a>

          <a
            href="https://instagram.com"
            className="contact-card"
            target="_blank"
          >
            <FaInstagram className="contact-icon" />
            <span>Instagram</span>
          </a>

        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>mltraders2909 © 2025. All Rights Reserved.</p>
      </footer>
    </div>
  );
}