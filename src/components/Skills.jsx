import React from 'react';
import Reveal from './Reveal';
import { getSkillIcon } from '../data/skillIcons';

function Skills({ data }) {
  return (
    <section id="skills">
      <div className="container">
        <h2>Skills & Expertise</h2>
        <div className="skills-grid">
          {data.map((skillGroup, idx) => (
            <Reveal key={idx} index={idx}>
              <div className="skill-category">
                <h3>{skillGroup.category}</h3>
                <ul>
                  {skillGroup.items.map((skill, skillIdx) => {
                    const Icon = getSkillIcon(skillGroup.category, skill);
                    return (
                      <li key={skillIdx} className="skill-pill">
                        <Icon className="skill-pill-icon" />
                        {skill}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
