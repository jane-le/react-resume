import React, { PropTypes } from "react";
import Companies from "./Companies";
import MainHeading from "./MainHeading";
import Project from './Project';
import Section from '../ui/Section';


const Main = ({ companies, projects }) => (
  <section style={style.main}>
    <MainHeading title="+ Work Experience" />
    <Companies data={companies} />
    <MainHeading title="+ Projects" />
    {projects.map((project, key) => (
      <Section key={key}>
        <Project
          name={project.name}
          tools={project.tools}
          achievements={project.achievements}
          link={project.link}
          type={project.type}
          key={key} />
      </Section>
    ))}
  </section>
);

const style = {
  main: {
    paddingRight: "1.25rem",
  },
};

Main.propTypes = {
  companies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Main;
