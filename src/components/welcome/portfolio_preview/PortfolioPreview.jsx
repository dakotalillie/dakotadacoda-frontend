import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardDeck,
  CardFooter,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Container,
  Row
} from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faArrowRight from '@fortawesome/fontawesome-free-solid/faArrowRight';
import TechIcon from './tech_icon/TechIcon';
import projectsData from './projects_data.json';
import './portfolio_preview.css';
import reactLogo from '../../../img/react.png';
import reduxLogo from '../../../img/redux.png';
import bootstrapLogo from '../../../img/bootstrap.png';
import railsLogo from '../../../img/rails.png';
import materializeLogo from '../../../img/materialize.png';
import s3Logo from '../../../img/s3.png';

const PortfolioPreview = () => {
  const keys = Object.keys(projectsData);
  const cards = keys.map(title => {
    const project = projectsData[title];
    return (
      <Card key={project.key}>
        <CardImg
          top
          width="100%"
          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>{project.title}</CardTitle>
          <CardSubtitle>{project.subtitle}</CardSubtitle>
          <CardText>Built Using:</CardText>
          <Row>{project.technologies.map(mapTechnology)}</Row>
        </CardBody>
        <CardFooter>
          <Button color="link" href={project.link}>
            Github <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        </CardFooter>
      </Card>
    );
  });

  return (
    <div className="portfolio_preview section grey-bg">
      <Container>
        <h2>Recent Projects</h2>
        <CardDeck>{cards}</CardDeck>
        <Button outline color="info" size="lg" className="section_button">
          View Portfolio
        </Button>
      </Container>
    </div>
  );
};

export default PortfolioPreview;

// Helpers

function mapTechnology(tech) {
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
