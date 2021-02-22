import React, {Component} from 'react';
import './Summary.css';

// font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrochip, faLaptop, faCogs, faTh } from '@fortawesome/free-solid-svg-icons';

// typist for tagline
import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop'

import { Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import Chip from '@material-ui/core/Chip';

const taglines = ["Let's solve some problem.", "Let's create a product.", "Let's build a business.", "Let's change the world!"]

class WhatIDoMobile extends Component{
    render () {
      return (
        <div>
          <div className="columns is-mobile">
            <div className="column is-half">
              <FontAwesomeIcon className="what-I-do-icons" icon={faMicrochip} color="#CCCCCC" />
              <h4> Electronics </h4>
            </div>
            <div className="column is-half">
              <FontAwesomeIcon className="what-I-do-icons" icon={faLaptop} color="#F44336"/>
            <h4> Programming </h4>
            </div>
          </div>
          <div className="columns is-mobile">
            <div className="column is-half">
              <FontAwesomeIcon className="what-I-do-icons" icon={faTh} color="#03A9F4"/>
            <h4> Product Designing </h4>
            </div>
            <div className="column is-half">
              <FontAwesomeIcon className="what-I-do-icons" icon={faCogs} color="#777777"/>
            <h4> Robotics </h4>
            </div>
          </div>
        </div>
    );
  }
}

class WhatIDoDesktop extends Component {
  render () {
    return (
      <div className="columns is-desktop">
        <div className="column">
          <FontAwesomeIcon className="what-I-do-icons" icon={faMicrochip} color="#CCCCCC" />
          <h4> Electronics </h4>
        </div>
        <div className="column">
          <FontAwesomeIcon className="what-I-do-icons" icon={faLaptop} color="#F44336"/>
        <h4> Programming </h4>
        </div>
        <div className="column">
          <FontAwesomeIcon className="what-I-do-icons" icon={faCogs} color="#777777"/>
        <h4> Robotics </h4>
        </div>
        <div className="column">
          <FontAwesomeIcon className="what-I-do-icons" icon={faTh} color="#03A9F4"/>
        <h4> Product Designing </h4>
        </div>
      </div>
    );
  }
}

class Summary extends Component {

  constructor(props) {
    super(props);
    this.state = { whatIDo: 0 };


    if (window.innerWidth < 768) {
      this.state.whatIDo = <WhatIDoMobile />
    }
    else {
      this.state.whatIDo = <WhatIDoDesktop />
    }
  }

  returnText(){
    if (window.innerWidth > 768) {
      return(
        <div className="desc columns">
          <div className="column is-one-third quote">
            <h4>
              Tech is reserved for people like me - The freaks, the weirdos, the misfits, the geeks, the dweebs, the dorks <br /> - Richard Hendriks, Silicon Valley
            </h4>
          </div>
          <div className="column is-one-third">
            <Typography align="justify" gutterBottom={true} paragraph={true} variant="body1" component="p">
              A Engineer with a knack for Product Development, Project Management and Product Lifecycle. A Philomath who also likes to get his hands dirty working on cool stuff.
            <br />
            </Typography>
            <Typography align="justify" gutterBottom={true} paragraph={true} variant="body1" component="p">
              A System Thinker and a multidomain Technical Architect with experience in Electronics Engineering, Software Development and Product Management.
            </Typography>
          </div>
          <div className="column is-one-third">
            <Typography gutterBottom={true} variant="h5" component="h5">
              What else?
            </Typography>
            <Typography gutterBottom={true} paragraph={true} variant="body1" component="p" display="inline">
              I code! Where? Find my Github styled &nbsp;
                  <Link href="https://resume.github.io/?rishabhrkaushik" target="_blank">
                    <Chip label="Resume" color="primary" clickable />
                  </Link>
              .
              <br />
              I love to read! Find me on &nbsp;
              <Link href="https://www.goodreads.com/review/list/82274615-rishabh-kaushik?ref=nav_mybooks&shelf=read&utf8=%E2%9C%93" target="_blank">
                  <Chip label="Goodread" color="primary" clickable />
              </Link>
              .
              <br />
              I write! Not much but find me on &nbsp;
              <Link href="https://medium.com/@rishabhrkaushik" target="_blank">
                  <Chip label="Medium" color="primary" clickable />
              </Link>
                &nbsp; or &nbsp;
              <Link href="https://www.quora.com/profile/Rishabh-Kaushik-4" target="_blank">
                  <Chip label="Quora" color="primary" clickable />
              </Link>
              .
              <br />
              I binge! What? Find me on &nbsp;
              <Link href="https://simkl.com/318567/stats/" target="_blank">
                  <Chip label="Simkl" color="primary" clickable />
              </Link>
              .
            </Typography>
            <br />
            <br />
            <Typography gutterBottom={true} paragraph={true} variant="body1" component="p" display="inline">
              I also like to go for hikings or any type of adventures and love swimming.
            </Typography>
          </div>
        </div>
      )
    }
    else {
      return(
        <div>
          <div className="column is-one-third para">
            <Typography align="justify" gutterBottom={true} paragraph={true} variant="body1" component="p">
              A task oriented guy. I like to get my hand dirty working on a project. A system thinker, likes to think of impact of decision on the system.
              A designer and multi domain technical architect.
            </Typography>
          </div>
          <div className="column is-one-third">
            <Typography color="textPrimary" gutterBottom={true} variant="h5" component="h5">
              What else?
            </Typography>
            <Typography color="textPrimary" gutterBottom={true} paragraph={true} variant="body1" component="p" display="inline">
              I code! Where? Find my Github styled &nbsp;
              <Link href="https://resume.github.io/?rishabhrkaushik" target="_blank">
              Resume
              </Link>
              .
              <br />
              I write! Not much but find me on &nbsp;
              <Link href="https://medium.com/@rishabhrkaushik" target="_blank">
              Medium &nbsp;
              </Link>
               or &nbsp;
              <Link href="https://www.quora.com/profile/Rishabh-Kaushik-4" target="_blank">
              Quora
              </Link>
              .
              <br />
              I binge! What? Find me on &nbsp;
              <Link href="https://simkl.com/318567/stats/" target="_blank">
              Simkl
              </Link>
              .
            </Typography>
            <br />
            <br />
            <Typography color="textPrimary" gutterBottom={true} paragraph={true} variant="body1" component="p" display="inline">
              I also like to read, go for hikings or any type of adventures and love swimming.
            </Typography>
          </div>
        </div>
      );
    }
  }

  render(){
    return (
      <div className="summary-background">
        <div className="summary-content">
          <div className="What-i-do-title dark-title title">
            What I do?
          </div>
          <div className="icons">
            {this.state.whatIDo}
          </div>
          <div className="tagline">
            <TypistLoop interval={2500}>
              {taglines.map(text => <Typist className="code" key={text} startDelay={100}>{text}</Typist>)}
            </TypistLoop>
          </div>
          {this.returnText()}
        </div>
      </div>
    );
  }
}

export default Summary;
