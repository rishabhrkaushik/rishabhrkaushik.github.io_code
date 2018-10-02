import React, { Component } from 'react';
import "./landing.css";

class Landing extends Component {
  render() {
    return (
      <div id="landingPageDiv">
        <div className="profile-image">
          <img src={require('./profile.jpg')} alt="Profile" className="centered-image" />
        </div>
        <div className="centered-text">
          <h2> I AM RISHABH KAUSHIK </h2>
{
  // To Do
// <div className="adjectives">
//
// </div>
}
          <div className="social-networking-icons">
            <a href="https://www.linkedin.com/in/rishabhrkaushik/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin fa-2x"> </i>
            </a>
            <a href="https://github.com/rishabhrkaushik/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github fa-2x"> </i>
            </a>
            <a href="https://www.quora.com/profile/Rishabh-Kaushik-4" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-quora fa-2x"> </i>
            </a>
            <a href="https://www.facebook.com/rishabhrkaushik" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook fa-2x"> </i>
            </a>
          </div>
        </div>
      </div>
    );
  };
}

export default Landing;
