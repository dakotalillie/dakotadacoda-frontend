import React from 'react';
import { Col } from 'reactstrap';
import TechIcon from './tech_icon/TechIcon';
import reactLogo from '../../../img/framework_icons/react.png';
import reduxLogo from '../../../img/other_icons/redux_transparent.png';
import bootstrapLogo from '../../../img/other_icons/bootstrap.png';
import railsLogo from '../../../img/framework_icons/rails.png';
import djangoLogo from '../../../img/framework_icons/django.png';
import materializeLogo from '../../../img/other_icons/materialize.png';
import s3Logo from '../../../img/other_icons/s3.png';
import beetboxCover from '../../../img/project_images/beetbox.png';
import flatchatCover from '../../../img/project_images/flatchat.png';
import diplomacyCover from '../../../img/project_images/diplomacy.png';

export function mapTechnology(tech) {
  let imgSrc;
  let url;

  switch (tech) {
    case 'React':
      imgSrc = reactLogo;
      url = 'https://reactjs.org/';
      break;
    case 'Redux':
      imgSrc = reduxLogo;
      url = 'https://redux.js.org/';
      break;
    case 'Bootstrap':
      imgSrc = bootstrapLogo;
      url = 'https://getbootstrap.com/';
      break;
    case 'Ruby On Rails':
      imgSrc = railsLogo;
      url = 'http://rubyonrails.org/';
      break;
    case 'Django':
      imgSrc = djangoLogo;
      url = 'https://www.djangoproject.com/';
      break;
    case 'Materialize':
      imgSrc = materializeLogo;
      url = 'http://materializecss.com/';
      break;
    case 'AWS S3':
      imgSrc = s3Logo;
      url = 'https://aws.amazon.com/s3/';
      break;
    default:
      imgSrc = '#';
  }

  return (
    <Col key={tech} xs="4" className="tech_row">
      <TechIcon src={imgSrc} alt={tech} url={url} />
    </Col>
  );
}

export function determineCoverSrc(title) {
  let imgSrc;

  switch (title) {
    case 'BeetBox':
      imgSrc = beetboxCover;
      break;
    case 'FlatChat':
      imgSrc = flatchatCover;
      break;
    case 'Stratagem':
      imgSrc = diplomacyCover;
      break;
    default:
      imgSrc =
        'https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180';
  }

  return imgSrc;
}
