import React from 'react';
import SocialLinks from './SocialLinks';

function Hero({ data }) {
  const socials = [
    { platform: 'GitHub', url: data.github, label: 'GitHub' },
    { platform: 'LinkedIn', url: data.linkedin, label: 'LinkedIn' },
    { platform: 'Medium', url: data.medium, label: 'Medium' },
    { platform: 'Email', url: `mailto:${data.email}`, label: 'Email' },
  ];

  return (
    <section className="hero" id="home">
      <div className="hero-blob hero-blob-1" aria-hidden="true" />
      <div className="hero-blob hero-blob-2" aria-hidden="true" />
      <div className="hero-blob hero-blob-3" aria-hidden="true" />
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-greeting">Hi there, I'm</p>
            <h1 className="gradient-text">{data.name}</h1>
            <p className="subtitle">{data.headline}</p>
            <p>{data.bio}</p>
            <div className="hero-cta">
              <a href={data.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                View GitHub
              </a>
              <a href={`mailto:${data.email}`} className="btn btn-secondary">
                Get in Touch
              </a>
            </div>
            <div className="hero-socials">
              <SocialLinks data={socials} />
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-frame">
              <img src={`/Portfolio/${data.headshot}`} alt={data.name} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
