import React, {Component} from 'react';
import './../Projects.css';

import Modal from 'react-responsive-modal';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import Button from '@material-ui/core/Button';

import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

class Gallery extends Component {
  render() {
    return (
      <ImageGallery items={this.props.images} showNav={false} autoPlay={true} showPlayButton={false} showFullscreenButton={true}/>
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

  createDescription(){
    if(this.props.images.length > 0){
      return(
        <Grid
          container
          direction="row"
          justify="left"
          alignItems="left"
        >
          <Grid item xs={12} sm={4}>
            <Gallery images={this.props.images}/>
          </Grid>
          <Grid item xs={12} sm={8} className="project-desc-text">
            <Typography variant="body2" color="textSecondary" component="p" paragraph={true}>
              {this.props.desc["P1"]}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" paragraph={true}>
              {this.props.desc["P2"]}
            </Typography>
             <ul>
             <Typography variant="body2" color="textSecondary" component="p" paragraph={true}>
              {
                this.props.desc["B"].map(function(bullet, i){
                  return <li key={i}>{bullet}</li>;
                })
              }
              </Typography>
            </ul>
          </Grid>
        </Grid>
      )
    }
    else{
      return(
        <Grid
          container
          direction="row"
          justify="left"
          alignItems="left"
        >
          <Grid item xs={12} sm={12} className="project-desc-text">
            <Typography variant="body2" color="textSecondary" component="p" paragraph={true}>
              {this.props.desc["P1"]}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" paragraph={true}>
              {this.props.desc["P2"]}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" paragraph={true}>
             <ul>
              {
                this.props.desc["B"].map(function(bullet, i){
                  return <li key={i}>{bullet}</li>;
                })
              }
            </ul>
          </Typography>
          </Grid>
        </Grid>
      )
    }
  }

  generateButtons(){
    var buttonKeys = Object.keys(this.props.links)
    if(buttonKeys.length > 0){
      var buttons = []
      for(var i = 0; i < buttonKeys.length; i++){
        buttons.push(
          <Button key={i} size="small" color="primary" href={this.props.links[buttonKeys[i]]} target="_blank">
            {buttonKeys[i]}
          </Button>
        )
      }
      return (
        <div>
          <Divider />
          {buttons}
        </div>
      )
    }
  }
  render() {
    const { open } = this.state;
    return (
      <div>
        <Button size="small" color="primary" onClick={this.onOpenModal}>
          View Details
        </Button>
        <Modal open={open} onClose={this.onCloseModal} center={true} showCloseIcon={true}>
          <Card>
            <Typography variant="h5" component="h2" className="project-desc-title">
              {this.props.name}
            </Typography>
            <Typography gutterBottom variant="subtitle2" component="h4" color="textSecondary" className="project-subtitle">
              {this.props.subtitle}
            </Typography>
            <CardActionArea styles={{flexgrow: 1}}>
              {this.createDescription()}
            </CardActionArea>
            {this.generateButtons()}
          </Card>
        </Modal>
      </div>
    );
  }
}

export default ProjectDescription;
