import React,{ Component } from 'react';
import "./aboutMe.css";

class AboutMe extends Component {
  render() {
    return (
      <div id="#AboutMe">
        <h1> About Me </h1>
        <div className="container-fluid">
          <h2> What I do? </h2>
          <div className="row icon-row">
            <div className="col-md-3 text-center icon-and-text">
              <i className="fa fa-microchip"></i>
              <h4>Electronics</h4>
            </div>
            <div className="col-md-3 text-center icon-and-text">
              <i className="fa fa-laptop"></i>
              <h4>Programming</h4>
            </div>
            <div className="col-md-3 text-center icon-and-text">
              <i className="fas fa-cogs"></i>
              <h4>Robotics</h4>
            </div>
            <div className="col-md-3 text-center icon-and-text">
              <i className="fa fa-th"></i>
              <h4>Product Designing</h4>
            </div>
            {/* <div className="col-md-3">
              <i class="far fa-lightbulb"></i>
              <h4>Ideation/Philosophy</h4>
            </div> */}
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <h4 className="text-column">Tech is reserved for the people like me - The freaks, the weirdos, the misfits, the geeks, the dweebs, the dorks<br /> - Richard Hendriks, Silicon Valley</h4>
            </div>
            <div className="col-md-1">
            </div>
            <div className="col-md-4">
              <p className="text-column">I am a task oriented guy who likes to get his hands dirty working on interdisciplinary projects. Topic of interests range wide from Embedded systems, Programming, Robotics, Mechanics, UX etc.</p>
            </div>
            <div className="col-md-4">
              <p className="text-column">When I am not working, I like to indulge in discussions on science, philosophy, religion or any other topic. I love to watch TV series and have watched quite many of them. I like to indulge in adventures, swimming, road trips etc  a weird combination giving peace as well as getting my adrenaline high.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
