import React from 'react';

function Publications({ data }) {
  const published = data.filter(p => p.url);

  return (
    <section id="publications">
      <div className="container">
        <h2>Publications</h2>
        <div className="publications-list">
          {published.length > 0 ? (
            published.map((pub) => (
              <div key={pub.id} className="publication-item">
                <a href={pub.url} target="_blank" rel="noopener noreferrer" className="publication-link">
                  <h3>{pub.title}</h3>
                </a>
                <div className="publication-meta">
                  {pub.platform} • {new Date(pub.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                </div>
                <p>{pub.excerpt}</p>
              </div>
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
