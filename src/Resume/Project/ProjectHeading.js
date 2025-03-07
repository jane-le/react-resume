import React, { PropTypes } from 'react';

const ProjectHeading = ({ link, name, tools, type }) => (
  <div style={style.main}>
    <div style={style.name}><a style={style.name} href={link}>{name}</a>
      <div style={style.type}>{type}</div>
    </div>
    <div style={style.tools}>
      {tools.join(', ')}
    </div>
  </div>
);

const style = {
  main: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: '0.4rem',
  },
  name: {
    fontWeight: 'bold',
    color: '#588068',
    textDecoration: 'none',
    fontSize: "1.25rem",
  },
  tools: {
    fontSize: '0.75rem',
    color: 'rgba(53, 97, 69, 0.75)',
  },
  type: {
    display: "inline-block",
    fontSize: "1rem",
    color: "rgba(78, 78, 78 , 1)",
    padding: "0.25rem",
    fontWeight: "300",
  },
};

ProjectHeading.propTypes = {
  name: PropTypes.string.isRequired,
  tools: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectHeading;
