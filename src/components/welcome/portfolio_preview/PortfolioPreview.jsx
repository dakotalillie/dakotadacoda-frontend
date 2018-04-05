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
  Container,
  Row
} from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faArrowRight from '@fortawesome/fontawesome-free-solid/faArrowRight';
import projectsData from './projects_data.json';
import { mapTechnology, determineCoverSrc } from './portfolio_preview_utils';
import './portfolio_preview.css';

const PortfolioPreview = () => {
  const keys = Object.keys(projectsData);
  const cards = keys.map(title => {
    const project = projectsData[title];
    return (
      <Card key={project.key}>
        <div className="image_container">
          <CardImg
            top
            width="100%"
            src={determineCoverSrc(project.title)}
            alt={`${project.title} Cover`}
          />
          <div className="image_overlay" />
        </div>
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
        {/* <Button outline color="info" size="lg" className="section_button">
          View Portfolio
        </Button> */}
      </Container>
    </div>
  );
};

export default PortfolioPreview;
