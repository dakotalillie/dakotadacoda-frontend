import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import githubIcon from '../../../img/social/github.png';
import mediumIcon from '../../../img/social/medium.png';
import linkedinIcon from '../../../img/social/linkedin.png';
import links from '../../../utils/links.json';
import './footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col sm="6">
            <span>&copy; Dakota Lillie 2018</span>
          </Col>
          <Col sm="6" className="second-col">
            <a href={links.github}>
              <img src={githubIcon} className="social-icon" />
            </a>
            <a href={links.medium}>
              <img src={mediumIcon} className="social-icon" />
            </a>
            <a href={links.linkedin}>
              <img src={linkedinIcon} className="social-icon" id="linkedin" />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
