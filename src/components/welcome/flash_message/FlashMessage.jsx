import React from 'react';
import { UncontrolledAlert } from 'reactstrap';
import PropTypes from 'prop-types';

import './flash_message.css';

export default function FlashMessage({ link, title }) {
  return (
    <div className="flash_message">
      <UncontrolledAlert color="dark">
        Check out my latest blog post &mdash;{' '}
        <a href={link} className="alert-link">
          {title}
        </a>
      </UncontrolledAlert>
    </div>
  );
}

FlashMessage.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};
