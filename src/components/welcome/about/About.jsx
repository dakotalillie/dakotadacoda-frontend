import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import './about.css';
import profileImage from '../../../img/profile.jpg';

// Must remain a class-based component to work with scroll functionality.
export default class AboutPreview extends React.Component {
  render() {
    return (
      <div className="about section">
        <Container>
          <Row>
            <Col sm="9" className="copy_col">
              <h2>My name is Dakota</h2>
              <h2>I write code and make music</h2>
              <h5>(The two are not so dissimilar)</h5>
            </Col>
            <Col sm="3" className="profile_col">
              <img src={profileImage} className="profile_image" alt="profile" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
