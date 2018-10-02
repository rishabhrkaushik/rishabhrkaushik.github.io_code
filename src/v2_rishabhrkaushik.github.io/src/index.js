import React from 'react';
import ReactDOM from 'react-dom';
import Landing from "./components/LandingComponent/landing";
import AboutMe from "./components/AboutMeComponent/aboutMe";
import Skills from "./components/SkillsComponent/skills";

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
