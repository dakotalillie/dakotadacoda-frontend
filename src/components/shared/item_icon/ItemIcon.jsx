import React from 'react';
import { Col } from 'reactstrap';
import PropTypes from 'prop-types';

import './item_icon.css';

export default function ItemIcon(props) {
  return (
    <Col
      xs={props.xs}
      sm={props.sm}
      md={props.md}
      lg={props.lg}
      xl={props.xl}
      className="item_icon"
    >
      <a href={props.url}>
        <img src={props.src} alt={props.name} title={props.name} />
        {props.subtitle ? <span>{props.name}</span> : null}
      </a>
    </Col>
  );
}

ItemIcon.propTypes = {
  name: PropTypes.string.isRequired,
  xs: PropTypes.string,
  sm: PropTypes.string,
  md: PropTypes.string,
  lg: PropTypes.string,
  xl: PropTypes.string,
  url: PropTypes.string,
  src: PropTypes.string.isRequired,
  subtitle: PropTypes.bool
};
