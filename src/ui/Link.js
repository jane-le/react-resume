import React, { PropTypes } from 'react';

const Link = ({ to, children, style }) => {
  return (
    <a href={to} style={Object.assign({}, defaultStyle, style)}>
      {children}
    </a>
  );
};

Link.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node,
  to: PropTypes.string.isRequired,
};

const defaultStyle = {
  padding: '0 0 0 0.5rem',
  textDecoration: 'none',
  color: 'rgb(53, 97, 69)'
};

export default Link;
