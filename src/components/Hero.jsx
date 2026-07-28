import React from 'react';

function Hero({ data }) {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>{data.name}</h1>
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
          </div>
          <div className="hero-image">
            <img src={`/Portfolio/${data.headshot}`} alt={data.name} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
