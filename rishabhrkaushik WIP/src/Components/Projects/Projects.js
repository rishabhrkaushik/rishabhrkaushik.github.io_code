import React, {Component} from 'react';

import './Projects.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Divider from '@material-ui/core/Divider';

import Slider from "react-slick";

import projects from './../../data/projects.json';

class ProjectCard extends Component {
  render() {
    return (
      <Card className="card-custom">
        <CardActionArea>
          <CardMedia
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {this.props.summary}
            </Typography>
          </CardContent>
        </CardActionArea>
        <Divider />
        <CardActions>
          <Button size="small" color="primary">
            View Details
          </Button>
          <Button size="small" color="primary">
            Demonstrate
          </Button>
        </CardActions>
      </Card>
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
            <ProjectCard key={i} title={project.title} summary={project.summary} desc={project.projectDesc}/>
          )
        }
      </Slider>
    );
  }

  render() {
    return (
      <div className="projects-background">
        <div className="title dark-title">
          Projects
        </div>
          {this.createProjects()}
      </div>
    );
  }
}

export default Projects;
