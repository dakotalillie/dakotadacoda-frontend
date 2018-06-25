import React from 'react';
import { Alert } from 'reactstrap';
import PropTypes from 'prop-types';

import './flash_message.css';

export default function FlashMessage({ link, title, flashOpen, toggleFlash }) {
  return (
    <Alert
      color="dark"
      className="flash_message"
      isOpen={flashOpen}
      toggle={toggleFlash}
      transition={{ timeout: 0, unmountOnExit: true }}
    >
      Check out my latest blog post &mdash;{' '}
      <a href={link} className="alert-link">
        {title}
      </a>
    </Alert>
  );
}

FlashMessage.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  flashOpen: PropTypes.bool.isRequired,
  toggleFlash: PropTypes.func.isRequired,
};
