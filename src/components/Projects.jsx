import React from 'react';
import { FaGithub } from 'react-icons/fa';
import Reveal from './Reveal';

function Projects({ data }) {
  const featured = data.filter(p => p.featured);
  const others = data.filter(p => !p.featured);

  return (
    <section id="projects">
      <div className="container">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {featured.map((project, idx) => (
            <Reveal key={project.id} index={idx}>
              <div className="project-card">
                <h3>{project.name}</h3>
                <span className={`project-status ${project.status}`}>
                  {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                </span>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaGithub className="link-icon" /> View on GitHub →
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {others.length > 0 && (
          <>
            <h2 style={{ marginTop: '3rem' }}>Other Projects</h2>
            <div className="projects-grid">
              {others.map((project, idx) => (
                <Reveal key={project.id} index={idx}>
                  <div className="project-card">
                    <h3>{project.name}</h3>
                    <span className={`project-status ${project.status}`}>
                      {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                    </span>
                    <p>{project.description}</p>
                    <div className="project-tags">
                      {project.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="tag">{tag}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                          <FaGithub className="link-icon" /> View on GitHub →
                        </a>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Projects;
