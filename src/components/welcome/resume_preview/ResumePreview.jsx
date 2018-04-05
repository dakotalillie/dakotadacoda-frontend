import React from 'react';
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
    return (
      <div className="resume_preview section">
        <Container>
          <Row>
            <Col sm="2">
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
            <Col sm="5">
              <Row>{tabDisplay(this.state.active)}</Row>
            </Col>
            <Col sm="5">
              <h2>FullStack Web Development</h2>
              <h4>With more soon to come!</h4>
              {/* <Button outline color="info" className="section_button">
                More On LinkedIn
              </Button> */}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ResumePreview;
