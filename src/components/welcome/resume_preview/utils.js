import React from 'react';
import resumeData from './resume_data.json';
import ItemIcon from '../../shared/item_icon/ItemIcon';
import javascriptLogo from '../../../img/language_icons/javascript.png';
import pythonLogo from '../../../img/language_icons/python.png';
import javaLogo from '../../../img/language_icons/java.png';
import rubyLogo from '../../../img/language_icons/ruby.png';
import reactLogo from '../../../img/framework_icons/react.png';
import railsLogo from '../../../img/framework_icons/rails.png';
import djangoLogo from '../../../img/framework_icons/django.png';
import reduxLogo from '../../../img/other_icons/redux.png';
import scssLogo from '../../../img/other_icons/scss.png';
import postgresqlLogo from '../../../img/other_icons/postgresql.png';
import bootstrapLogo from '../../../img/other_icons/bootstrap.png';
import sketchLogo from '../../../img/other_icons/sketch.png';

export function tabDisplay(activeTab) {
  switch (activeTab) {
  case 'languages':
    return languagesTab();
  case 'frameworks':
    return frameworksTab();
  case 'other':
    return otherTab();
  default:
    return null;
  }
}

function languagesTab() {
  return resumeData.languages.map(language => {
    let src;
    switch (language) {
    case 'JavaScript':
      src = javascriptLogo;
      break;
    case 'Python':
      src = pythonLogo;
      break;
    case 'Java':
      src = javaLogo;
      break;
    case 'Ruby':
      src = rubyLogo;
      break;
    default:
      src = '#';
    }
    return (
      <ItemIcon key={language} name={language} src={src} xs="3" subtitle />
    );
  });
}

function frameworksTab() {
  return resumeData.frameworks.map(framework => {
    let src;
    switch (framework) {
    case 'React':
      src = reactLogo;
      break;
    case 'Rails':
      src = railsLogo;
      break;
    case 'Django':
      src = djangoLogo;
      break;
    default:
      src = '#';
    }
    return (
      <ItemIcon key={framework} name={framework} src={src} xs="3" subtitle />
    );
  });
}

function otherTab() {
  return resumeData.other.map(tech => {
    let src;
    switch (tech) {
    case 'Redux':
      src = reduxLogo;
      break;
    case 'SCSS':
      src = scssLogo;
      break;
    case 'PostgreSQL':
      src = postgresqlLogo;
      break;
    case 'Bootstrap':
      src = bootstrapLogo;
      break;
    case 'Sketch':
      src = sketchLogo;
      break;
    default:
      src = '#';
    }
    return <ItemIcon key={tech} name={tech} src={src} xs="3" subtitle />;
  });
}
