import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import githubIcon from '../../../img/social_icons/white/github.png';
import mediumIcon from '../../../img/social_icons/white/medium.png';
import linkedinIcon from '../../../img/social_icons/white/linkedin.png';
import links from '../../../utils/links.json';
import './footer.scss';

export default function Footer() {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col sm="6">
            <span>&copy; Dakota Lillie 2018</span>
          </Col>
          <Col sm="6" className="second-col">
            <a href={links.github}>
              <img src={githubIcon} className="social-icon" alt="Github" />
            </a>
            <a href={links.medium}>
              <img src={mediumIcon} className="social-icon" alt="Medium" />
            </a>
            <a href={links.linkedin}>
              <img
                src={linkedinIcon}
                className="social-icon"
                id="linkedin"
                alt="Linked In"
              />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
