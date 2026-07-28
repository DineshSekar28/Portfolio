import React from 'react';
import SocialLinks from './SocialLinks';

function Footer({ data }) {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-links">
            <SocialLinks data={data} className="social-icon-link" />
          </div>
          <p>© 2024 Dinesh Sekar. Built with React. Designed for clarity.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
