import React, { Component } from 'react';
import "./landing.css";
import contactInfo from '../../data/contactInfo.json';

class Landing extends Component {
  render() {
    return (
      <div id="landingPageDiv">
        <div className="profile-image">
          <img src={contactInfo.profilePic} alt="Profile" className="centered-image" />
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
            <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin fa-2x"> </i>
            </a>
            <a href={contactInfo.github} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github fa-2x"> </i>
            </a>
            <a href={contactInfo.quora} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-quora fa-2x"> </i>
            </a>
            <a href={contactInfo.facebook} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook fa-2x"> </i>
            </a>
          </div>
        </div>
      </div>
    );
  };
}

export default Landing;
