import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardDeck,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Container
} from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faArrowRight from '@fortawesome/fontawesome-free-solid/faArrowRight';
import projectsData from './projects_data.json';
import './portfolio_preview.css';

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
          <CardText>
            Built With:
            <ul>{project.technologies.map(t => <li>{t}</li>)}</ul>
          </CardText>
          <Button color="link" href={project.link}>
            Github <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        </CardBody>
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
