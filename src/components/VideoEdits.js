import React from 'react';
import '../styles/VideoEdits.css';

const videoProjects = [
  {
    title: 'Valorant Montage',
    description: 'High-paced montage with synced music transitions.',
    thumbnail: '/vidthumb1.jpg',
    link: 'https://www.youtube.com/watch?v=your-video-link1',
  },
  {
    title: 'Product Promo Edit',
    description: 'Edited promotional video for a digital product.',
    thumbnail: '/vidthumb2.jpg',
    link: 'https://www.youtube.com/watch?v=your-video-link2',
  },
  {
    title: 'Short Form Edit',
    description: 'TikTok-style vertical edit with subtitles and effects.',
    thumbnail: '/vidthumb3.jpg',
    link: 'https://www.youtube.com/watch?v=your-video-link3',
  },
];

const VideoEdits = () => {
  return (
    <section className="video-edits-section">
      <h2>Video Edits</h2>
      <div className="video-grid">
        {videoProjects.map((video, index) => (
          <a
            href={video.link}
            className="video-card"
            key={index}
            target="_blank"
            rel="noreferrer"
          >
            <img src={video.thumbnail} alt={video.title} className="video-thumb" />
            <div className="video-info">
              <h3>{video.title}</h3>
              <p>{video.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default VideoEdits;
