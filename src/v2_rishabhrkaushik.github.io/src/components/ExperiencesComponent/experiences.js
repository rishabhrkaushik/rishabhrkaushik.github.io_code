import React, {  Component } from 'react';
import "./experiences.css";
import experiences from '../../data/workExperience.json';

class Card extends Component {
  render (){
    return (
      <article>
        <div className="inner">
          <span className="icon">
            <i className="fa fa-briefcase"></i>
          </span>
          <div className="cardHeader">
            <div className="jobTitle">
              {this.props.title}
            </div>
            <div className="company">
              {this.props.company}, {this.props.location}
            </div>
            <div className="team">
              {this.props.team}
            </div>
            <div className="date">
              {this.props.startDate} - {this.props.endDate}
            </div>
          </div>
          <p>{this.props.content}</p>
        </div>
      </article>
    );
  }
}

class Experiences extends Component {
  render(){
    return (
      <div id="experiencesDiv">
        <h1> Experiences </h1>
        <section id="timeline">
          {
            experiences.map((experience) =>
              <Card title={experience.jobTitle} content={experience.jobDesc} company={experience.company} location={experience.location} startDate={experience.startDate} endDate={experience.endDate} team={experience.team} />
            )
          }

          {/* <Card title="Research and Development Intern" content="Did everything"/> */}
        </section>
      </div>
    );
  }
}

export default Experiences;
