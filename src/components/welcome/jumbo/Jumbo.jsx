import React from 'react';
import PropTypes from 'prop-types';
import { Container, Jumbotron } from 'reactstrap';

import githubIcon from '../../../img/social_icons/white/github.png';
import mediumIcon from '../../../img/social_icons/white/medium.png';
import linkedinIcon from '../../../img/social_icons/white/linkedin.png';
import socialLinks from '../../../utils/links.json';
import './jumbo.css';

class Jumbo extends React.Component {

  static propTypes = {
    paddingTop: PropTypes.number.isRequired,
  }

  render() {
    return (
      <div className="jumbo">
        <Jumbotron fluid style={{ paddingTop: this.props.paddingTop }}>
          <Container>
            <h1 className="display-3">Dakota Lillie</h1>
            <p className="lead">Software Developer</p>
            <div className="social_icons">
              <a href={socialLinks.github}>
                <img src={githubIcon} alt="Github" />
              </a>
              <a href={socialLinks.medium}>
                <img src={mediumIcon} alt="Medium" />
              </a>
              <a href={socialLinks.linkedin}>
                <img src={linkedinIcon} className="linkedin" alt="Linked In" />
              </a>
            </div>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default Jumbo;
