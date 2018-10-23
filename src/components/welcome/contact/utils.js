import React from 'react';
import Loader from 'react-loader-spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import checkMark from '@fortawesome/fontawesome-free-solid/faCheck';

export function determineButtonIcon(status, hover) {
  if (status === null || status === 'error') {
    return 'Send';
  } else if (status === 'loading') {
    return (
      <Loader
        type="TailSpin"
        color={hover ? '#ffffff' : '#28a9ff'}
        height={30}
        width={45}
      />
    );
  } else if (status === 'success') {
    return (
      <span>
        <FontAwesomeIcon icon={checkMark} /> Sent!
      </span>
    );
  }
}

export function determineButtonClass(status) {
  let className = 'submit_button';
  if (status === 'loading') {
    className += ' disabled loading';
  } else if (status === 'success') {
    className += ' disabled';
  }
  return className;
}