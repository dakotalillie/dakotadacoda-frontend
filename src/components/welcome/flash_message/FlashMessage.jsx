import React from 'react';
import { UncontrolledAlert } from 'reactstrap';
import './flash_message.css';

const FlashMessage = () => {
  return (
    <div className="flash_message">
      <UncontrolledAlert color="secondary">
        Check out my latest blog post &mdash;{' '}
        <a
          href="https://medium.com/@dakota.lillie/multitasking-in-java-part-1-multithreading-4e0c17b4f774"
          className="alert-link"
        >
          Multitasking In Java, Part 1: Multithreading
        </a>
      </UncontrolledAlert>
    </div>
  );
};

export default FlashMessage;
