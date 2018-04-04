import React from 'react';
import { Button, Container } from 'reactstrap';

const AboutPreview = () => {
  return (
    <div className="about_preview section">
      <Container>
        <h2>My name is Dakota!</h2>
        <h2>I write code and make music.</h2>
        <h5>(The two are not so dissimilar).</h5>
        <Button outline color="info" size="lg" className="section_button">
          About Me
        </Button>
      </Container>
    </div>
  );
};

export default AboutPreview;
