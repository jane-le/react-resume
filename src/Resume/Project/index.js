import React, { PropTypes } from 'react';
import List from '../../ui/List';
import ProjectHeading from './ProjectHeading';

const Project = ({ name, tools, link, achievements, type }) => {
  return (
    <div style={style.main}>
      <ProjectHeading link={link} name={name} tools={tools} type={type} />
      <List items={achievements} style={style.list}/>
    </div>
  );
};

function createLink(link) {
  return `Link: ${link}`;
}

const style = {
  main: {
    margin: '1rem 0 0 0.2rem',
  },
  list: {
    margin: 0,
  },
};

Project.propTypes = {
  name: PropTypes.string.isRequired,
  tools: PropTypes.arrayOf(PropTypes.string).isRequired,
  achievements: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Project;
