// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import HireMe from './components/HireMe';
import VideoEdits from './components/VideoEdits'; // ✅ Import

import './styles/Hero.css';
import './styles/About.css';
import './styles/WorkExperience.css';
import './styles/Portfolio.css';
import './styles/Contact.css';
import './styles/HireMe.css';
import './styles/VideoEdits.css'; // ✅ Optional: if you created this CSS file

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <WorkExperience />
              <Portfolio />
              <Contact />
            </>
          }
        />
        <Route path="/hire" element={<HireMe />} />
        <Route path="/video-edits" element={<VideoEdits />} /> {/* ✅ NEW */}
      </Routes>
    </Router>
  );
}

export default App;
