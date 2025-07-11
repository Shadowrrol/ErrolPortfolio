import React from "react";
import { Link } from 'react-router-dom';
import "../styles/Hero.css";
import {FaFacebookF,FaInstagram,FaLinkedinIn,FaCode,FaExternalLinkAlt,} from "react-icons/fa";

const Hero = () => {
  return (
    <section id="hero">
      <header>
        <a className="header-logo">Errol<span>.</span></a>
        <nav>
          <a className="nav-item" href="#hero">Home</a>
          <a className="nav-item" href="#about">About</a>
          <a className="nav-item" href="#experience">WorkExperience</a>
          <a className="nav-item" href="#portfolio">Portfolio</a>
          <a className="nav-item" href="#contact">Contact</a>
          <a className="nav-item" href="/video-edits">Video Edits</a>

        </nav>
      </header>

      <div className="content">
        <div className="left">
          <h3 className="typewriter">Hi, I'm <span className="typed-name">Errol Jay Supangan</span></h3>
          <h1>Web-Dev <span>Video-Edit</span></h1>
          <p>
           I’m a passionate and creative video editor and web developer, known for crafting engaging visual content and building responsive, meaningful web applications. With strong foundations in editing, frontend design, and backend development, I bring real-world ideas to life through visually appealing videos and clean, functional code.
          </p>

          <div className="cta-section">
           <Link to="/hire">
  <button className="cta-2">
    Hire Me <FaExternalLinkAlt />
  </button>
</Link>



          </div>
        </div>

        <div className="right">
          <div className="img-wrap">
            <img className="hero-img" src="/pro-pic.png" alt="Errol Jay" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
