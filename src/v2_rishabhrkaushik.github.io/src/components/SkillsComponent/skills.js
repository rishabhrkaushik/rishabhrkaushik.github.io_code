import React, { Component } from 'react';
import './skills.css';
import topSkills from '../../data/topSkills.json';

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

class BarChart extends Component {
  render() {
    return (
      <div className="bar-container">
        <div className="bar-skills" style={{width: this.props.value, backgroundColor: this.props.color}}>
          {this.props.label}
        </div>
      </div>
    );
  }
}

class Skills extends Component {

   render() {
    return (
      <div id="skillsDiv">
        <h1> Skills </h1>
        <h2> Top Skills </h2>
        <div id="ringCharts">
          <div className="row">
            {
              topSkills.map(topSkill =>
                <div className="col-md-2">
                  <DonutChart value={topSkill.level} valuelabel={topSkill.name}/>
                </div>
              )
            }
            {
            //
            // <div className="col-md-2">
            //   <DonutChart value={60} valuelabel='Completed'/>
            // </div>
            // <div className="col-md-2">
            //   <DonutChart value={60} valuelabel='Completed'/>
            // </div>
            // <div className="col-md-2">
            //   <DonutChart value={60} valuelabel='Completed'/>
            // </div>
            // <div className="col-md-2">
            //   <DonutChart value={60} valuelabel='Completed'/>
            // </div>
            // <div className="col-md-2">
            //   <DonutChart value={60} valuelabel='Completed'/>
            // </div>
          }
          </div>
        </div>
        <h2> Other Skills </h2>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 skillColumn">
              <h3> Programming </h3>
              <BarChart value={'70%'} color="#DD0000" label="HTML" />
              <BarChart value={'100%'} color="green" label="HTML" />
              <BarChart value={'10%'} color="blue" label="HTML" />
            </div>
            <div className="col-md-6 skillColumn">
              <h3> Electronics </h3>
              <BarChart value={'70%'} color="gray" label="HTML" />
              <BarChart value={'100%'} color="black" label="HTML" />
              <BarChart value={'10%'} color="#ABDD00" label="HTML" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 skillColumn">
              <h3> Soft Skills </h3>
              <BarChart value={'70%'} color="#DD0F0A" label="HTML" />
              <BarChart value={'100%'} color="#DA00DD" label="HTML" />
              <BarChart value={'10%'} color="#DDFF00" label="HTML" />
            </div>
            <div className="col-md-6 skillColumn">
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Skills;
