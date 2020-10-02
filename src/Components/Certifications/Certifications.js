import React, { Component } from 'react';
import './Certifications.css';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';

import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

import certifications from './../../data/certifications.json';

// const useStyles = makeStyles(theme => ({
//   root: {
//     width: '100%',
//   },
//   heading: {
//     fontSize: theme.typography.pxToRem(15),
//     fontWeight: theme.typography.fontWeightRegular,
//   },
// }));


class CertificatesCard extends Component {
  generateCertButton(status, link){
    if(this.props.link != ""){
      if(status === "Non Certified"){
        return(
          <Button size="small" color="primary">
            No Formal Certificate
          </Button>
        )
      }
      else if(status === "Certified"){
        return(
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Button size="small" color="primary">
              View Certificate
            </Button>
          </a>
        )
      }
    }
  }

  generateSubcourseCards(subcourses){
      var cards = [];

      if(subcourses){
        subcourses.map((subcourse, i) =>
          cards.push(
              <ExpansionPanel>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                <Typography>{subcourse.title}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Issued By: {subcourse["issued by"]}
                  </Typography>
                </ExpansionPanelDetails>
                <Divider />
                  <ExpansionPanelActions>
                    {
                      this.generateCertButton(subcourse.status, subcourse.link)
                    }
                  </ExpansionPanelActions>
              </ExpansionPanel>
          )
        )
      }

      return(
        <div>
          {cards}
        </div>
      )
  }

  render(){
    return(
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <Typography>{this.props.title}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Issued By: {this.props.issuedBy}
          </Typography>
          <Divider />
          </ExpansionPanelDetails>
          <ExpansionPanelDetails>
            {this.generateSubcourseCards(this.props.subcourses)}
          </ExpansionPanelDetails>
        <Divider />
          <ExpansionPanelActions>
            {
                this.generateCertButton(this.props.status, this.props.link)
            }
          </ExpansionPanelActions>
      </ExpansionPanel>
    );
  }
}

class Certifications extends Component {

  enumerateElectronics(){
    var cards = [];

    certifications["Electronics"].map((certificate, i) =>
      cards.push(<CertificatesCard key={i} title={certificate.title} issuedBy={certificate["issued by"]} link={certificate.link} status={certificate.status}/>)
    )

    return(
      <div>
        {cards}
      </div>
    )
  }

  enumerateCS(){
    var cards = [];

    certifications["Computer Science"].map((certificate, i) =>
      cards.push(<CertificatesCard key={i} title={certificate.title} issuedBy={certificate["issued by"]} link={certificate.link} status={certificate.status}/>)
    )

    return(
      <div>
        {cards}
      </div>
    )
  }

  enumerateSoftSkills(){
    var cards = [];

    certifications["Soft Skills and Humanities"].map((certificate, i) =>
      cards.push(<CertificatesCard key={i} title={certificate.title} issuedBy={certificate["issued by"]} link={certificate.link} status={certificate.status} subcourses={certificate.subcourses}/>)
    )

    return(
      <div>
        {cards}
      </div>
    )
  }

  render(){
    return (
      <div className="certifications-background">
        <div className='title'>
          Certifications
        </div>
        <div className="columns">
          <div className="column">
            {
              <ExpansionPanel>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                <Typography>
                  {certifications["Formal Education"][0].title}, {certifications["Formal Education"][0].majors}
                </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Issued By: {certifications["Formal Education"][0].university}
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            }
          </div>
        </div>
        <div className="columns">
          <div className="column">
            {this.enumerateElectronics()}
          </div>
          <div className="column">
            {this.enumerateSoftSkills()}
          </div>
          <div className="column">
            {this.enumerateCS()}
          </div>
        </div>
      </div>
    );
  }
}

export default Certifications;
