import React from "react";
import "./AboutPage.css";

const About = () => {
  return (
    <section className="about-container">
      {/* Enhanced animated heading */}
      <div className="heading-wrapper">
        <h1 className="main-heading">
          About <span className="heading-accent">The Portal</span>
        </h1>
        <div className="heading-underline"></div>
      </div>

      {/* Main content card */}
      <div className="content-card">
        {/* Inspiration section */}
        <div className="section-wrapper">
          <div className="section-header">
            <div className="icon-wrapper">💡</div>
            <h2 className="section-title">Inspiration</h2>
          </div>
          <p className="content-text highlight-first">
            The inspiration behind this booking app came from the frequent need for students to visit professors for paper signatures to access lab machinery, and the constant requests and calls to equipment operators for sample status and queries. This app streamlines communication and processes, saving time, cost, energy, and effort for students, operators, and professors alike.
          </p>
        </div>

        {/* Technology section */}
        <div className="section-wrapper">
          <div className="section-header">
            <div className="icon-wrapper">⚡</div>
            <h2 className="section-title">Technology Stack</h2>
          </div>
          <p className="content-text">
            The front-end of the application is built with{" "}
            <span className="tech-tag react-tag">React</span>, while the back-end leverages the{" "}
            <span className="tech-tag express-tag">Express</span> framework. These technologies are trusted by leading companies like{" "}
            <span className="company-highlight">Facebook</span>,{" "}
            <span className="company-highlight">Instagram</span>,{" "}
            <span className="company-highlight">Airbnb</span>, and{" "}
            <span className="company-highlight">Netflix</span> ensuring performance, scalability, and modern design.
          </p>
        </div>

        {/* Benefits section */}
        <div className="section-wrapper">
          <div className="section-header">
            <div className="icon-wrapper">🎯</div>
            <h2 className="section-title">Key Benefits</h2>
          </div>
          <div className="benefits-grid">
            <div className="benefit-item">
              <span className="benefit-icon">⏱️</span>
              <span className="benefit-text">Saves Time</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">💰</span>
              <span className="benefit-text">Reduces Costs</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">⚡</span>
              <span className="benefit-text">Saves Energy</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">🤝</span>
              <span className="benefit-text">Streamlines Communication</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">👍</span>
              <span className="benefit-text">Get equipment Information</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">🧑‍🎓</span>
              <span className="benefit-text">Track students activity</span>
            </div>
          </div>
        </div>

        {/* Quote section */}
        <div className="quote-section">
          <div className="quote-mark">"</div>
          <blockquote className="inspirational-quote">
            Simplicity is the ultimate sophistication
          </blockquote>
          <cite className="quote-author"> Leonardo da vinci</cite>
        </div>
      </div>
    </section>
  );
};

export default About;