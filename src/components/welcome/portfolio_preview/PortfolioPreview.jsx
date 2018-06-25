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

import projectsData from './projects_data.json';
import { mapTechnology, determineCoverSrc } from './utils';
import githubIcon from '../../../img/social_icons/github.png';
import './portfolio_preview.css';

class PortfolioPreview extends React.Component {
  render() {
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
            <Row>
              <Col xs="4">
                <Button color="link" href={project.links.frontend}>
                  <img src={githubIcon} alt="Github" className="github_icon" />{' '}
                  <span>front</span>
                </Button>
              </Col>
              <Col xs="4">
                <Button color="link" href={project.links.backend}>
                  <img src={githubIcon} alt="Github" className="github_icon" />{' '}
                  <span>back</span>
                </Button>
              </Col>
            </Row>
          </CardFooter>
        </Card>
      );
    });

    return (
      <div className="portfolio_preview section grey-bg">
        <Container>
          <h2>Recent Projects</h2>
          <CardDeck>{cards}</CardDeck>
        </Container>
      </div>
    );
  }
}

export default PortfolioPreview;
