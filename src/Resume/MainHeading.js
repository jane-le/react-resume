import React, { PropTypes } from 'react';

const MainHeading = ({ title }) => (
  <h1 style={style.main}>{title.toUpperCase()}</h1>
);

const style = {
  main: {
    marginBottom: '0.6rem',
    color: '#1F3B2C',
    padding: '0.25rem',
    borderBottom: '1px solid #1F3B2C'
  },
};

MainHeading.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MainHeading;
