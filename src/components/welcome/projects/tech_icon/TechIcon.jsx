import React from 'react';
import PropTypes from 'prop-types';

import './tech_icon.css';

export default function TechIcon({ url, src, alt }) {
  return (
    <a href={url}>
      <img
        className="tech_icon"
        src={src}
        alt={alt}
        title={alt}
      />
    </a>
  );
}

TechIcon.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  url: PropTypes.string
};