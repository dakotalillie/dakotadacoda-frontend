import React, { Fragment } from 'react';
import { Button, ButtonGroup, Col, Container, Row } from 'reactstrap';
import { tabDisplay } from './resume_preview_utils';
import './resume_preview.css';

class ResumePreview extends React.Component {
  state = {
    active: 'languages'
  };

  setActive = newActive => {
    this.setState({ active: newActive });
  };

  render() {
    const section1 = (
      <Fragment>
        <Col sm="2" className="buttons_col">
          <ButtonGroup vertical>
            <Button
              outline
              block
              color="primary"
              active={this.state.active === 'languages'}
              onClick={() => this.setActive('languages')}
            >
              Languages
            </Button>
            <Button
              outline
              block
              color="primary"
              active={this.state.active === 'frameworks'}
              onClick={() => this.setActive('frameworks')}
            >
              Frameworks
            </Button>
            <Button
              outline
              block
              color="primary"
              active={this.state.active === 'other'}
              onClick={() => this.setActive('other')}
            >
              Other
            </Button>
          </ButtonGroup>
        </Col>
        <Col sm="6" className="icons_col">
          <Row>{tabDisplay(this.state.active)}</Row>
        </Col>
      </Fragment>
    );

    const section2 = (
      <Col sm="4" className="copy_col">
        <h2>Proficiencies &amp; Skills</h2>
        {/* <h5>Tools that I've worked with</h5> */}
      </Col>
    );

    return (
      <div className="resume_preview section">
        <Container>
          {window.innerWidth > 768 ? (
            <Row>
              {section1}
              {section2}
            </Row>
          ) : (
            <Row>
              {section2}
              {section1}
            </Row>
          )}
        </Container>
      </div>
    );
  }
}

export default ResumePreview;
