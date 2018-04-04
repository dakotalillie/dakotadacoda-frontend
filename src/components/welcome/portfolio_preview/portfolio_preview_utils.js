import React from 'react';
import { Col } from 'reactstrap';
import TechIcon from './tech_icon/TechIcon';
import reactLogo from '../../../img/react.png';
import reduxLogo from '../../../img/redux.png';
import bootstrapLogo from '../../../img/bootstrap.png';
import railsLogo from '../../../img/rails.png';
import materializeLogo from '../../../img/materialize.png';
import s3Logo from '../../../img/s3.png';
import beetboxCover from '../../../img/beetbox.png';
import flatchatCover from '../../../img/flatchat.png';
import diplomacyCover from '../../../img/diplomacy.png';

export function mapTechnology(tech) {
  let imgSrc;

  switch (tech) {
    case 'React':
      imgSrc = reactLogo;
      break;
    case 'Redux':
      imgSrc = reduxLogo;
      break;
    case 'Bootstrap':
      imgSrc = bootstrapLogo;
      break;
    case 'Ruby On Rails':
      imgSrc = railsLogo;
      break;
    case 'Materialize':
      imgSrc = materializeLogo;
      break;
    case 'AWS S3':
      imgSrc = s3Logo;
      break;
    default:
      imgSrc = '#';
  }

  return (
    <Col key={tech} xs="4" className="tech_row">
      <TechIcon src={imgSrc} alt={tech} />
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
    case 'Diplomacy':
      imgSrc = diplomacyCover;
      break;
    default:
      imgSrc =
        'https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180';
  }

  return imgSrc;
}
