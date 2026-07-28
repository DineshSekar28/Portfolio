import React from 'react';
import socialIcons from '../data/socialIcons';

function SocialLinks({ data, className = 'social-icon-link', iconClassName = 'link-icon' }) {
  return (
    <>
      {data.map((link, idx) => {
        const Icon = socialIcons[link.platform];
        return (
          <a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={className}
            aria-label={link.label}
          >
            {Icon && <Icon className={iconClassName} />}
          </a>
        );
      })}
    </>
  );
}

export default SocialLinks;
