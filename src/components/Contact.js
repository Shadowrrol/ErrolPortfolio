import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <div className="contact-list">
        <a href="mailto:supangan.erroljay@gmail.com" className="contact-link">
          <FaEnvelope className="icon" />
          supangan.erroljay@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/errol-jay-supangan-935480371"
          className="contact-link"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="icon" />
          linkedin.com/in/errol-jay-supangan
        </a>
        <a
          href="https://github.com/Shadowrrol"
          className="contact-link"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="icon" />
          github.com/Shadowrrol
        </a>
      </div>
    </section>
  );
};

export default Contact;
