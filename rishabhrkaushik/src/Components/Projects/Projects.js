import React, {Component} from 'react';

import './Projects.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import projects from './../../data/projects.json';

class ProjectCard extends Component {
  render() {
    return (
      <div className="card">
        <header className="card-header">
          <p class="card-header-title">
            {this.props.title}
          </p>
        </header>
        <div className="card-content">
          <div className="columns">
            <div className="column">
              <p>
                {this.props.summary}
              </p>
            </div>
            <div className="column">
              Here will be image
            </div>
          </div>
        </div>
        <div className="tags">
        </div>
        <div className="card-footer">
          <p class="card-footer-item">
            Hero
          </p>
        </div>
      </div>
    );
  }
}

class Projects extends Component {

  constructor(props){
    super(props);
    this.state = {

    }
  }

  createProjects() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 2000,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return(
      <Slider {...settings}>
        {
          projects.map((project, i) =>
            <ProjectCard key={i} title={project.title} summary={project.summary}/>
          )
        }
      </Slider>
    );
  }

  render() {
    return (
      <div className="projects-background">
        <div className="title">
          Projects
        </div>
          {this.createProjects()}
      </div>
    );
  }
}

export default Projects;
