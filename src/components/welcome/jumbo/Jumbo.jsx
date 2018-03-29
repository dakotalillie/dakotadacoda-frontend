import React from 'react';
import { Button, Container, Jumbotron } from 'reactstrap';
import './jumbo.css';

const Jumbo = () => {
  return (
    <div className="jumbo">
      <Jumbotron>
        <Container>
          <h1 className="display-3">Let's Get To Work</h1>
          <p className="lead">Dakota Lillie &bull; Software Developer</p>
          <p className="lead">
            <Button color="primary">Learn More</Button>
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;
