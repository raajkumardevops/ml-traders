import React from "react";
import "./about.css";

export default function About() {
  return (
    <div className="about-page">

      <div className="about-header">
        <h1>About ML Traders Textiles</h1>
        <p>Your trusted destination for premium textile collections.</p>
      </div>

      <section className="about-section">
        <h2>Our Story</h2>
        <p>
          ML Traders Textiles was founded with a passion to provide high-quality
          fabrics and fashionable clothing at affordable prices. From men's
          shirts to women's sarees and kids wear, our mission has always been to
          offer premium quality with unmatched customer satisfaction.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Vision</h2>
        <p>
          To become one of India’s most trusted textile brands by offering
          stylish, durable, and elegant clothing — inspired by customer needs
          and cultural heritage.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Mission</h2>
        <ul>
          <li>Deliver top-quality textile products at fair prices.</li>
          <li>Provide a seamless shopping experience for customers.</li>
          <li>Build long-term trust through quality and service.</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Premium-quality clothing collections</li>
          <li>Affordable pricing for all categories</li>
          <li>Trusted by thousands of customers in Tamil Nadu</li>
          <li>Modern styles mixed with traditional values</li>
        </ul>
      </section>

      <footer className="about-footer">
        MLTraders2909 © 2025 — All Rights Reserved
      </footer>
    </div>
  );
}
