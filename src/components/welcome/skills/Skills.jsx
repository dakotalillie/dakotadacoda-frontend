import React, { Fragment } from 'react';
import { Button, ButtonGroup, Col, Container, Row } from 'reactstrap';

import { tabDisplay } from './utils';
import './skills.scss';

class ResumePreview extends React.Component {
  state = {
    active: 'languages'
  };

  setActive = newActive => {
    this.setState({ active: newActive });
  };

  render() {
    const tabs = ['Languages', 'Frameworks', 'Other'];
    const section1 = (
      <Fragment>
        <Col sm="2" className="buttons_col">
          <ButtonGroup vertical>
            {tabs.map(name => (
              <Button
                key={name}
                id={`${name.toLowerCase()}_tab`}
                outline
                block
                color="primary"
                active={this.state.active === name.toLowerCase()}
                onClick={() => this.setActive(name.toLowerCase())}
              >
                {name}
              </Button>
            ))}
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
