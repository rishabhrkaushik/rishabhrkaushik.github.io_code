import React, { Component } from 'react';
import "./landing.css";

class Landing extends Component {
  render() {
    return (
      <div id="landingPageDiv">
        <div>
          <img src={require('./profile.jpg')} alt="Profile" className="centered-image" />
        </div>
        <div className="centered-text">
          <h2> I AM RISHABH KAUSHIK </h2>
        </div>
      </div>
    );
  };
}

export default Landing;
