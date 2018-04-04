import React from 'react';
import PropTypes from 'prop-types';
import './tech_icon.css';

const TechIcon = props => {
  return (
    <a href={props.url}>
      <img
        className="tech_icon"
        src={props.src}
        alt={props.alt}
        title={props.alt}
      />
    </a>
  );
};

TechIcon.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  url: PropTypes.string
};

export default TechIcon;
