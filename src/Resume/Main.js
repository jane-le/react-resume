import React, { PropTypes } from 'react';
import Companies from './Companies';
import MainHeading from './MainHeading';


const Main = ({ companies }) => (
  <section style={style.main}>
    <MainHeading title="+ Work Experience" />
    <Companies data={companies} />
  </section>
);

const style = {
  main: {
    paddingRight: '1.25rem',
  },
};

Main.propTypes = {
  companies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Main;
