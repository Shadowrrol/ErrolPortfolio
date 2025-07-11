import React from 'react';
import '../styles/WorkExperience.css'; // CSS will handle individual animations

const optoImages = Array.from({ length: 26 }, (_, i) => `/optogrow (${i + 1}).png`);
const megamodImages = Array.from({ length: 6 }, (_, i) => `/megamod (${i + 1}).png`);

const WorkExperience = () => {
  return (
    <section id="experience" className="experience-section fadeIn">
      <h2>Work Experience</h2>

      {/* OptoGrow */}
      <div className="experience-entry">
        <div className="experience-header">
          <img
            src="/optologo.png"
            alt="OptoGrow Logo"
            className="experience-logo"
          />
          <div>
            <h3>Intern – Systems & Technology Engineer</h3>
            <p className="company">OptoGrow (Remote – Mandaluyong, PH)</p>
            <p className="date-range">Jan 2025 – Mar 2025</p>
          </div>
        </div>
<ul>
  <li>Assisted in CRM platform setup and automation for lead tracking</li>
  <li>Generated leads and maintained organized client data pipelines</li>
  <li>Monitored incoming company emails and flagged priority inquiries</li>
  <li>Created visual funnels for client outreach and engagement strategies</li>
  <li>Designed email templates and banners for marketing campaigns</li>
  <li>Collaborated with the design team to produce branded assets</li>
  <li>Contributed to system automation efforts for internal workflows</li>
  <li>Ensured consistent formatting across outgoing emails and funnels</li>
</ul>

        <div className="marquee-container">
          <div className="marquee-track opto-marquee">
            {optoImages.concat(optoImages).map((src, index) => (
              <img
                src={src}
                alt={`OptoGrow Work ${index + 1}`}
                className="marquee-img"
                key={index}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Megamod */}
      <div className="experience-entry">
        <div className="experience-header">
          <img
            src="/jzzgcefbq8njmhdwhoke.webp"
            alt="Megamod Logo"
            className="experience-logo"
          />
          <div>
            <h3>Level Designer</h3>
            <p className="company">Megamod (Remote – Russia)</p>
            <p className="date-range">Nov 2022 – Feb 2023</p>
          </div>
        </div>
<ul>
  <li>Designed creative and engaging game levels using in-house tools and assets</li>
  <li>Collaborated with other level designers to ensure consistent gameplay quality</li>
  <li>Provided strategic feedback to improve level flow, balance, and user experience</li>
  <li>Assisted in testing and polishing levels before final integration</li>
  <li>Helped expand Megamod’s playable content by contributing multiple unique levels</li>
</ul>

        <div className="marquee-container">
          <div className="marquee-track mega-marquee">
            {megamodImages.concat(megamodImages).map((src, index) => (
              <img
                src={src}
                alt={`Megamod Work ${index + 1}`}
                className="marquee-img"
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
