import React, { useState } from 'react';
import './contact.css';
import { SiLinkedin, SiGithub } from 'react-icons/si';
import { FaEnvelope, FaCopy, FaCheck } from 'react-icons/fa';

const email = "tamas.bartos.92@gmail.com";
const linkedin = "https://www.linkedin.com/in/tam%C3%A1s-bartos-5654aa133/";
const github = "https://github.com/battact";

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="section-content">
        <div className="section-header">
          <h2>Contact</h2>
          <p>Ready to discuss opportunities and collaborate on exciting projects</p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <h3>Email</h3>
              <div className="contact-email">
                <span className="email-address">{email}</span>
                <button 
                  onClick={copyEmail}
                  className="copy-button"
                  title="Copy email address"
                >
                  {copied ? <FaCheck /> : <FaCopy />}
                </button>
              </div>
            </div>
            <div className="contact-item">
              <h3>Connect</h3>
              <div className="contact-links">
                <a 
                  href={`mailto:${email}`} 
                  className="contact-icon-link"
                  title="Email"
                >
                  <FaEnvelope />
                </a>
                <a 
                  href={linkedin} 
                  className="contact-icon-link"
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="LinkedIn"
                >
                  <SiLinkedin />
                </a>
                <a 
                  href={github} 
                  className="contact-icon-link"
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="GitHub"
                >
                  <SiGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 