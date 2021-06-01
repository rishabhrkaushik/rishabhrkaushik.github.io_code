import React, {Component} from 'react';
import './../Projects.css';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import Chip from '@material-ui/core/Chip';

import ProjectDescription from './ProjectDescription';

class ProjectCard extends Component {
  render() {
    return (
      <Card className="card-custom" style={{ maxWidth: 350 }}>
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
              <Chip key={i} color="primary" size="small" label={tag} className="project-tag"/>
            )
          }
        </div>
        <Divider />
        <CardActions>
          <ProjectDescription name={this.props.title} desc={this.props.desc} images={this.props.images} subtitle={this.props.subtitle} links={this.props.links}/>
        </CardActions>
      </Card>
    );
  }
}

export default ProjectCard;
