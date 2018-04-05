import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import './about_preview.css';
import profileImage from '../../../img/profile.jpg';

const AboutPreview = () => {
  return (
    <div className="about_preview section">
      <Container>
        <Row>
          <Col>
            <h2>My name is Dakota!</h2>
            <h2>I write code and make music.</h2>
            <h5>(The two are not so dissimilar).</h5>
            {/* <Button outline color="info" size="lg" className="section_button">
              About Me
            </Button> */}
          </Col>
          <Col>
            <img src={profileImage} className="profile_image" alt="profile" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutPreview;
