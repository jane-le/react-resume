import React, { PropTypes } from 'react';
import SidebarHeading from './SidebarHeading';
import List from '../ui/List';

const Education = ({ university, duration, degree, courses }) => (
  <section style={style.main}>
    <SidebarHeading align="left">+ EDUCATION</SidebarHeading>
    <div style={{
      ...style.text,
      fontWeight: 'bold',
    }}>{university}</div>
    <div>{degree}</div>
    <div style={style.text}>{duration}</div>
    <p style={style.subtitle}>Relevant Courses</p>
    <List style={{ margin: 0 }} items={courses} />

  </section>
);

const style = {
  main: {
    margin: '0.4rem 0 0 0',
  },
  text: {
    textAlign: 'left',
  },
  subtitle: {
    marginBottom: 0,
    fontWeight: 'bold',
  },

};

Education.propTypes = {
  university: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
};

export default Education;
