import React, { Component } from 'react';
import { Card, CardText, CardBody, CardHeader, CardFooter, CardDeck} from 'reactstrap';
import { Progress } from 'reactstrap';
import './skills.css';
import topSkills from '../../data/topSkills.json';
import programmingSkills from '../../data/programmingSkills.json';
import softSkills from '../../data/softSkills.json';
import electronicsSkills from '../../data/electronicsSkills.json';

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
      <div className="bar">
        <Progress value={this.props.value} text-align="left">{this.props.label}</Progress>
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
              topSkills.map((topSkill, i) => (
                <div className="col-md-2" key={i}>
                  <DonutChart value={topSkill.level} valuelabel={topSkill.name}/>
                </div>
              ))
            }
          </div>
        </div>
        <h2> Other Skills </h2>
        <CardDeck>
          <Card>
            <CardHeader> Programming </CardHeader>
            {
              programmingSkills.map((programmingSkill, i) =>
                <BarChart key={i} value={programmingSkill.level} label={programmingSkill.name} />
              )
            }
          </Card>
          <Card>
            <CardHeader> Electronics </CardHeader>
            {
              electronicsSkills.map((electronicsSkill, i) =>
                <BarChart key={i} value={electronicsSkill.level} label={electronicsSkill.name} />
              )
            }
          </Card>
          <Card>
            <CardHeader> Soft Skills </CardHeader>
            {
              softSkills.map((softSkill, i) =>
                <BarChart key={i} value={softSkill.level} label={softSkill.name} />
              )
            }
          </Card>
        </CardDeck>
      </div>
    );
  }
};

export default Skills;
