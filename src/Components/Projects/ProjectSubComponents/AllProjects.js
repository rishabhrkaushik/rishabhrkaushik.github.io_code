import React, {Component} from 'react';
import './../Projects.css';

import Modal from 'react-responsive-modal';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Chip from '@material-ui/core/Chip';

import ProjectDescription from './ProjectDescription';

import projects from './../../../data/projects.js';

class AllProjects extends Component {
  state = {
    open: true,
    toggle: true,
    keywordsString: "",
    keywords: []
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  toggle = () => {
    this.setState({ toggle: !this.state.toggle })
  }

  updateKeywords = () => {
    var unTrimmedKeywords = this.state.keywordsString.split(',');
    var keywords = unTrimmedKeywords.map((keyword, i) => {
      return (keyword.trim())
    })
    this.setState({ keywords: keywords })
  }

  handleDelete = chipToDelete => () => {
    this.setState({keywords: this.state.keywords.filter(keyword =>  keyword !== chipToDelete)})
  };

  render() {
    const { open } = this.state;
    return (
      <div className="view-all">
        <div onClick={this.onOpenModal} style={{
          'display': 'flex',
          'align-items': 'center'
        }}>
          <Icon color="primary" style={{
            'display': 'flex',
            'margin-right': '0.5rem'
          }}>
            dashboard
          </Icon>
          <Typography variant='overline' component="p">
            View All Projects
          </Typography>
        </div>
        <Modal open={open} onClose={this.onCloseModal} center={true} showCloseIcon={false} >
          <Card style={{'padding': '0.5em', 'width': '100%'}}>
            <div style={{'display': 'flex'}}>
              <TextField
                id="outlined-full-width"
                label="Search"
                placeholder="Keywords"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                Style={{
                  'margin-left': '1em'
                }}
                variant="outlined"
                value={this.state.keywordsString}
                onChange={e => this.setState({ keywordsString: e.target.value })}
                onKeyPress={(ev) => {
                  if (ev.key === 'Enter') {
                    // Do code here
                    this.updateKeywords()
                  }
                }}
              />
              <Icon color="primary" style={{'margin': 'auto', 'margin-left': '1rem', 'font-size': '3rem'}} onClick={this.updateKeywords}>search</Icon>
            </div>
            {
              this.state.keywords.map((keyword, i) =>
                <Chip key={i} color="primary" size="small" label={keyword} className="project-tag" onDelete={this.handleDelete(keyword)}/>
              )
            }
            <div style={{maxHeight: 440, overflow: 'auto'}}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                  <TableCell  align='right'>
                    Project Name
                  </TableCell>
                  <TableCell style={{ minWidth: 400 }} align='right'>
                    Summary
                  </TableCell>
                  <TableCell align='right' style={{
                    'justify-content': 'center'
                  }}>
                    Tags
                  </TableCell>
                  <TableCell align='right'>
                    Details
                  </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    projects.map((project, i) => {
                      var toShow = true
                      for(var i=0; i<this.state.keywords.length; i++){
                        if(!project.tags.join('|').toLowerCase().split('|').includes(this.state.keywords[i].toLowerCase())){
                          toShow = false
                        }
                      }
                      if(toShow){
                        return (
                          <TableRow hover role="checkbox" tabIndex={-1} >
                            <TableCell  align='right'>
                              {project.title}
                            </TableCell>
                            <TableCell  align='right'>
                              {project.summary}
                            </TableCell>
                            <TableCell  align='right'>
                              {
                                project.tags.map((tag, i) =>
                                  <Chip
                                    key={i}
                                    color="primary"
                                    size="small"
                                    label={tag}
                                    className="project-tag"
                                  />
                                )
                              }
                            </TableCell>
                            <TableCell  align='right'>
                              <ProjectDescription
                                  name={project.title}
                                  desc={project.projectDesc}
                                  images={project.images}
                                  subtitle={project.subTitle}
                                  links={project.links}
                              />
                            </TableCell>
                          </TableRow>
                        )
                      }
                    }
                  )}
                </TableBody>
              </Table>
            </div>
          </Card>
        </Modal>
      </div>
    );
  }
}

export default AllProjects;
