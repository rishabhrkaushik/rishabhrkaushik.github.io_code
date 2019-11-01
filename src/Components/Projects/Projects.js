import React, {Component} from 'react';

import './Projects.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import ProjectCard from './ProjectSubComponents/ProjectCard';

import AllProjects from './ProjectSubComponents/AllProjects';
import Typography from '@material-ui/core/Typography';

import projects from './../../data/projects.js';

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
          projects.map((project, i) => {
            if(project.topProject){
              return (
                <ProjectCard
                  key={i}
                  title={project.title}
                  subtitle={project.subTitle}
                  summary={project.summary}
                  desc={project.projectDesc}
                  images={project.images}
                  tags={project.tags}
                  links={project.links}
                />
              )
            }
          })
        }
      </Slider>
    );
  }

  render() {
    return (
      <div className="projects-background">
        <div className="title dark-title">
          Projects
          <AllProjects />
        </div>
          <Typography variant="h5" component="p" style={{
            "color": "white"
          }}>
            Top Projects
          </Typography>
          {this.createProjects()}
      </div>
    );
  }
}

export default Projects;
