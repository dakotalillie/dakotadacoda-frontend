import React from 'react';
import PropTypes from 'prop-types';
import './tech_icon.css';

const TechIcon = props => {
  return (
    <img
      className="tech_icon"
      src={props.src}
      alt={props.alt}
      title={props.alt}
    />
  );
};

TechIcon.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default TechIcon;
