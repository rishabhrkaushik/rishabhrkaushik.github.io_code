import React, {  Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import "./experiences.css";
import experiences from '../../data/workExperience.json';

class Card extends Component {
  render (){
    return (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={this.props.startDate + " - " + this.props.endDate}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">{this.props.title}</h3>
          <h4 className="vertical-timeline-element-subtitle">{this.props.team + this.props.company}</h4>
          {/* <h4 className="vertical-timeline-element-subtitle">{experience.company}</h4> */}
          <p>
            {this.props.content}
          </p>
        </VerticalTimelineElement>
    );
  }
}

{/* icon={<i className="fa fa-briefcase"></i>} */}
class Experiences extends Component {
  render(){
    return (
      <div id="experiencesDiv">
        <h1> Experiences </h1>
        <VerticalTimeline>
          {
            experiences.map((experience) =>
              <Card title={experience.jobTitle} content={experience.jobDesc} company={experience.company} location={experience.location} startDate={experience.startDate} endDate={experience.endDate} team={experience.team} />
            )
          }
        </VerticalTimeline>
      </div>
    );
  }
}

export default Experiences;
