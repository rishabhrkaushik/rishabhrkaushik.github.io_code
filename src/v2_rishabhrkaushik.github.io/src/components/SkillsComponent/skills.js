import React, { Component } from 'react';
import './skills.css';

class Skills extends Component {

   render() {
    return (
      <div id="skillsDiv">
        <h1> Skills </h1>
        <h2> Top Skills </h2>
        <div id="ringCharts">

        </div>
        <div className="container-fluid">
          <h2> Other Skills </h2>
          <div className="row">
            <h3> Programming </h3>
            <div className="col-md-6">
            </div>
            <h3> Electronics </h3>
            <div className="col-md-6">
            </div>
          </div>
          <div className="row">
            <h3> Soft Skills </h3>
            <div className="col-md-6">
            </div>
            <div className="col-md-6">
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
