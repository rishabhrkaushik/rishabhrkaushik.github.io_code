import React, { Component } from 'react';
import './skills.css';

class DonutChart extends Component {
  render() {

    const halfsize = (this.props.size * 0.5);
    const radius = halfsize - (this.props.strokewidth * 0.5);
    const circumference = 2 * Math.PI * radius;
    const strokeval = ((this.props.value * circumference) / 100);
    const dashval = (strokeval + ' ' + circumference);

    const trackstyle = {strokeWidth: this.props.strokewidth};
    const indicatorstyle = {strokeWidth: this.props.strokewidth, strokeDasharray: dashval}
    const rotateval = 'rotate(-90 '+halfsize+','+halfsize+')';

    return (
      <svg width={this.props.size} height={this.props.size} className="donutchart">
        <circle r={radius} cx={halfsize} cy={halfsize} transform={rotateval} style={trackstyle} className="donutchart-track"/>
        <circle r={radius} cx={halfsize} cy={halfsize} transform={rotateval} style={indicatorstyle} className="donutchart-indicator"/>
        <text className="donutchart-text" x={halfsize} y={halfsize} style={{textAnchor:'middle'}} >
          <tspan className="donutchart-text-label" x={halfsize} y={halfsize}>{this.props.valuelabel}</tspan>
        </text>
      </svg>
    );
  }
};

DonutChart.defaultProps = {
  strokewidth: 10,
  size: 120
};

class Skills extends Component {

   render() {
    return (
      <div id="skillsDiv">
        <h1> Skills </h1>
        <h2> Top Skills </h2>
        <div id="ringCharts">
          <DonutChart value={60} valuelabel='Completed'/>
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
};

export default Skills;
