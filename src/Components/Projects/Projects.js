import React, { Component } from 'react'

import './Projects.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ChipSet, Chip } from '@material/react-chips'
import '@material/react-chips/dist/chips.css'

import Grid from '@material-ui/core/Grid'
import Slider from 'react-slick'
import Icon from '@material-ui/core/Icon'

import ProjectCard from './ProjectSubComponents/ProjectCard'

import AllProjects from './ProjectSubComponents/AllProjects'
import Typography from '@material-ui/core/Typography'

import projects from './../../data/projects.js'

class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedChipIds: [],
      allProjects: false,
    }
  }

  createProjects() {
    return (
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        {projects.map((project, i) => {
          if (this.state.allProjects) {
            return (
              <Grid item key={i}>
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
              </Grid>
            )
          } 
          else {
            if (project.topProject) {
              return (
                <Grid item key={i}>
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
                </Grid>
              )
            } 
            else {
              return null
            }
          }
        })}
      </Grid>
    )
  }

  toggleDisplayAll = () => {
    this.setState(prevState => ({
      allProjects: !prevState.allProjects
    }));
  }
  render() {
    return (
      <div className="projects-background">
        <div className="title dark-title">Projects</div>
        <ChipSet
          filter
          selectedChipIds={this.state.selectedChipIds}
          handleSelect={(selectedChipIds) => this.setState({ selectedChipIds })}
        >
          {<Chip id={'es'} label="Embedded System" />}
        </ChipSet>
        {this.createProjects()}
        <br />
        <br />
        <div
          className="view-all"
          onClick={this.toggleDisplayAll}
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Icon
            color="primary"
            style={{
              display: 'flex',
              marginRight: '0.5rem',
            }}
          >
            dashboard
          </Icon>
          <Typography
            variant="overline"
            component="p"
            className="view-all-text"
          >
            {!this.state.allProjects ? "View All Projects" : "Show Top Projects"}
          </Typography>
        </div>
      </div>
    )
  }
}

export default Projects
