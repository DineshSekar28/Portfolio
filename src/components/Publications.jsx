import React from 'react';
import { FaMedium } from 'react-icons/fa';
import Reveal from './Reveal';

function Publications({ data }) {
  const published = data.filter(p => p.url);

  return (
    <section id="publications">
      <div className="container">
        <h2>Publications</h2>
        <div className="publications-list">
          {published.length > 0 ? (
            published.map((pub, idx) => (
              <Reveal key={pub.id} index={idx}>
                <div className="publication-item">
                  <a href={pub.url} target="_blank" rel="noopener noreferrer" className="publication-link">
                    <h3><FaMedium className="link-icon" /> {pub.title}</h3>
                  </a>
                  <div className="publication-meta">
                    {pub.platform} • {new Date(pub.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                  </div>
                  <p>{pub.excerpt}</p>
                </div>
              </Reveal>
            ))
          ) : (
            <p style={{ color: 'var(--text-secondary)' }}>Coming soon...</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Publications;
