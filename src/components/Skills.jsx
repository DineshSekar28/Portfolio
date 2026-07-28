import React from 'react';

function Skills({ data }) {
  return (
    <section id="skills">
      <div className="container">
        <h2>Skills & Expertise</h2>
        <div className="skills-grid">
          {data.map((skillGroup, idx) => (
            <div key={idx} className="skill-category">
              <h3>{skillGroup.category}</h3>
              <ul>
                {skillGroup.items.map((skill, skillIdx) => (
                  <li key={skillIdx}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
