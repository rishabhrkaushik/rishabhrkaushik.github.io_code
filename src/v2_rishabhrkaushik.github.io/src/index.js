import React from 'react';
import ReactDOM from 'react-dom';
import Landing from "./components/LandingComponent/landing";
import AboutMe from "./components/AboutMeComponent/aboutMe";

// ReactDOM.render(
//   <div> Index.js </div>
//   ,document.getElementById('root')
// );

ReactDOM.render(
  <Landing />,
  document.getElementById('landingIndex'),
);

ReactDOM.render(
  <AboutMe />,
  document.getElementById('aboutMeIndex'),
);
