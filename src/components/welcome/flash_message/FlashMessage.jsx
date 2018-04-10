import React from 'react';
import { UncontrolledAlert } from 'reactstrap';
import PropTypes from 'prop-types';
import './flash_message.css';

const FlashMessage = props => {
  return (
    <div className="flash_message">
      <UncontrolledAlert color="dark">
        Check out my latest blog post &mdash;{' '}
        <a href={props.link} className="alert-link">
          {props.title}
        </a>
      </UncontrolledAlert>
    </div>
  );
};

export default FlashMessage;

FlashMessage.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};
