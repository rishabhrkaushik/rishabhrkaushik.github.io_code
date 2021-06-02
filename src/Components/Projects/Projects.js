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
      selectedDomains: this.domains,
      allProjects: false,
    }
  }

  domains = [
    'Embedded Systems',
    'ATE',
    'LabVIEW',
    'Python',
    'Fullstack Development',
    'Electronics Design',
    'Unity',
    'Robotics',
  ]

  createProjects() {
    return (
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        {projects.map((project, projectIndex) => {
          var toShow = false
          if (project.topProject) {
            toShow = true
          } else if (this.state.allProjects) {
            toShow = true
          }
          // console.log(
          //   project.title,
          //   this.state.selectedDomains,
          //   project.domains,
          // )

          if (toShow) {
            toShow = false;
            for (var i = 0; i < this.state.selectedDomains.length; i++) {
              if (
                project.domains
                  .join('|')
                  .toLowerCase()
                  .split('|')
                  .includes(this.state.selectedDomains[i].toLowerCase())
              ) {
                toShow = true
                break
              }
            }
            if (toShow) {
              return (
                <Grid item key={"grid"+projectIndex}>
                  <ProjectCard
                    key={"card"+projectIndex}
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
            } else {
              return null
            }
          } else {
            return null
          }
        })}
      </Grid>
    )
  }

  toggleDisplayAll = () => {
    this.setState((prevState) => ({
      allProjects: !prevState.allProjects,
    }))
  }

  render() {
    return (
      <div className="projects-background">
        <div className="title dark-title">Projects</div>
        <ChipSet
          filter
          selectedChipIds={this.state.selectedDomains}
          handleSelect={(selectedChipIds) =>
            this.setState({ selectedDomains: selectedChipIds })
          }
        >
          {this.domains.map((domain, i) => {
            return <Chip id={domain} label={domain} key={i} />
          })}
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
            {!this.state.allProjects
              ? 'View All Projects'
              : 'Show Top Projects'}
          </Typography>
        </div>
      </div>
    )
  }
}

export default Projects
