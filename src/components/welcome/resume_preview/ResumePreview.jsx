import React from 'react';
import { Button, ButtonGroup, Col, Container, Row } from 'reactstrap';
import resumeData from './resume_data.json';
import javascriptLogo from '../../../img/language_icons/javascript.png';
import pythonLogo from '../../../img/language_icons/python.png';
import javaLogo from '../../../img/language_icons/java.png';
import rubyLogo from '../../../img/language_icons/ruby.png';
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
            <Col sm="5">{tabDisplay(this.state.active)}</Col>
            <Col sm="5">
              <h2>FullStack Web Development</h2>
              <h4>With more soon to come!</h4>
              <Button outline color="info" size="lg" className="section_button">
                View Resume
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ResumePreview;

function tabDisplay(activeTab) {
  switch (activeTab) {
    case 'languages':
      return <Row className="languages_row">{languagesTab()}</Row>;
  }
}

function languagesTab() {
  return resumeData.languages.map(language => {
    let href;
    switch (language) {
      case 'JavaScript':
        href = javascriptLogo;
        break;
      case 'Python':
        href = pythonLogo;
        break;
      case 'Java':
        href = javaLogo;
        break;
      case 'Ruby':
        href = rubyLogo;
        break;
      default:
        href = '#';
    }
    return (
      <Col xs="3" key={language}>
        <img src={href} alt={language} className="language_icon" />
        {language}
      </Col>
    );
  });
}
