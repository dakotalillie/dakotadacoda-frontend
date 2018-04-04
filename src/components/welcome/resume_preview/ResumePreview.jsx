import React from 'react';
import { Button, Container } from 'reactstrap';
import './resume_preview.css';

const ResumePreview = () => {
  return (
    <div className="resume_preview section">
      <Container>
        <h2>FullStack Web Development</h2>
        <h4>With more soon to come!</h4>
        <Button outline color="info" size="lg" className="section_button">
          View Resume
        </Button>
      </Container>
    </div>
  );
};

export default ResumePreview;
