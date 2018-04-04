import React from 'react';
import './tech_icon.css';

const TechIcon = props => {
  return <img className="tech_icon" src={props.src} alt={props.alt} />;
};

export default TechIcon;
