import React from 'react';
import '../styles/About.css'; // Make sure your styles file exists

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>

      {/* Logo before intro */}
<div className="logo-container">
  <img src="/images.png" alt="CIT-U Logo" className="school-logo" />
</div>
    

<p>
  I’m <strong>Errol Jay Supangan</strong>, a passionate frontend-focused developer based in Cebu, Philippines.
  I graduated with a Bachelor of Science in Information Technology from Cebu Institute of Technology – University (2021–2025).
</p>

<p>
  I specialize in designing and building interactive, user-friendly web interfaces using technologies like ReactJS,
  Tailwind CSS, and responsive design principles. While I have full-stack experience with Spring Boot and MySQL,
  my strength and passion lie in crafting clean, intuitive frontend experiences.
</p>


      <ul className="about-achievements">
        <li>
          🎓 Parangal Awardee
          <br />
          <img src="/parangal.png" alt="Parangal Certificate" className="award-img" />
        </li>
        <li>
          🏅 Top 40 Student at CIT-U
          <br />
          <img src="/top40.png" alt="Top 40 Award" className="award-img" />
        </li>
        <li>🧠 Strong focus on full-stack development</li>
        <li>🚀 Lifelong learner and problem solver</li>
      </ul>
    </section>
  );
};

export default About;
