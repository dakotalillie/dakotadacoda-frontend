import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import './about_preview.css';
import profileImage from '../../../img/profile.jpg';

class AboutPreview extends React.Component {
  render() {
    return (
      <div className="about_preview section">
        <Container>
          <Row>
            <Col sm="9">
              <h2>My name is Dakota!</h2>
              <h2>I write code and make music.</h2>
              <h5>(The two are not so dissimilar).</h5>
              {/* <Button outline color="info" size="lg" className="section_button">
              About Me
            </Button> */}
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

export default AboutPreview;
