import React from 'react';
import ReactDOM from 'react-dom';
import Landing from "./components/LandingComponent/landing";
import AboutMe from "./components/AboutMeComponent/aboutMe";
import Skills from "./components/SkillsComponent/skills";
import Projects from "./components/ProjectsComponent/projects";
import Experiences from "./components/ExperiencesComponent/experiences";
import Education from "./components/EducationComponent/education";

ReactDOM.render(
  <Landing />,
  document.getElementById('landingIndex'),
);

ReactDOM.render(
  <AboutMe />,
  document.getElementById('aboutMeIndex'),
);

ReactDOM.render(
  <Skills />,
  document.getElementById('skillsIndex'),
);

ReactDOM.render(
  <Projects />,
  document.getElementById("projectsIndex"),
);

ReactDOM.render(
  <Experiences />,
  document.getElementById("experiencesIndex"),
);

// ReactDOM.render(
//   <Education />,
//   document.getElementById("educationIndex"),
// );
