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
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Slider from "react-slick";

import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

import Modal from 'react-responsive-modal';

import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

import projects from './../../data/projects.json';

class Gallery extends Component {

  render() {
    return (
      <ImageGallery items={this.props.images} showNav={false} autoPlay={true}/>
    );
  }

}

class ProjectDescription extends Component {
  state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div>
        <Button size="small" color="primary" onClick={this.onOpenModal}>
          View Details
        </Button>
        <Modal open={open} onClose={this.onCloseModal} center={true}>
          <Card>
            <Typography>
              {this.props.name}
            </Typography>
            <Divider />
            <CardActionArea styles={{flexgrow: 1}}>
              <Grid
                container
                direction="row"
                justify="left"
                alignItems="left"
              >
                <Grid item xs={12} sm={4}>
                  <Gallery images={this.props.images}/>
                </Grid>
                <Grid item xs={12} sm={8}>
                  {this.props.desc}
                </Grid>
              </Grid>
            </CardActionArea>
          </Card>
        </Modal>
      </div>
    );
  }
}

class ProjectCard extends Component {
  render() {
    return (
      <Card className="card-custom">
        <CardActionArea>
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
        <div className="tags-space">
          {
            this.props.tags.map((tag, i) =>
              <Chip color="primary" size="small" label={tag} className="project-tag"/>
            )
          }
        </div>
        <Divider />
        <CardActions>
          <ProjectDescription name={this.props.title} desc={this.props.desc} images={this.props.images}/>
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
            <ProjectCard key={i}
              title={project.title}
              summary={project.summary}
              desc={project.projectDesc}
              images={project.images}
              tags={project.tags}
            />
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
