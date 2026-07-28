import React from 'react';
import Reveal from './Reveal';

function Experience({ data }) {
  const formatDate = (dateStr) => {
    if (dateStr === 'present') return 'Present';
    const [year, month] = dateStr.split('-');
    const date = new Date(year, parseInt(month) - 1);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  return (
    <section id="experience">
      <div className="container">
        <h2>Experience</h2>
        <div className="experience-list">
          {data.map((exp, idx) => (
            <Reveal key={exp.id} index={idx}>
              <div className="experience-item">
                <h3>{exp.title}</h3>
                <div className="meta">
                  {exp.company} • {exp.location} • {formatDate(exp.startDate)} – {formatDate(exp.endDate)}
                </div>
                <p>{exp.description}</p>
                {exp.highlights && (
                  <div className="highlights">
                    {exp.highlights.map((highlight, hIdx) => (
                      <span key={hIdx} className="highlight-tag">
                        {highlight}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
