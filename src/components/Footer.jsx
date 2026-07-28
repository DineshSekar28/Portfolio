import React from 'react';

function Footer({ data }) {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-links">
            {data.map((link, idx) => (
              <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="footer-link">
                {link.label}
              </a>
            ))}
          </div>
          <p>© 2024 Dinesh Sekar. Built with React. Designed for clarity.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
