import React, {Component} from 'react';
import './Summary.css';

// font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrochip, faLaptop, faCogs, faTh } from '@fortawesome/free-solid-svg-icons';

// typist for tagline
import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop'

const taglines = ["Let's solve some problem.", "Let's create a product.", "Let's build a business.", "Let's change the world!"]

class WhatIDoMobile extends Component{
    render () {
      return (
        <div>
          <div className="columns is-mobile">
            <div className="column is-half">
              <FontAwesomeIcon className="what-I-do-icons" icon={faMicrochip} color="#000000" />
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
          <FontAwesomeIcon className="what-I-do-icons" icon={faMicrochip} color="#000000" />
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

  render(){
    return (
      <div className="summary-background">
        <div className="summary-content">
          <div className="What-i-do-title title">
            What I do?
          </div>
          <div className="icons">
            {this.state.whatIDo}
          </div>
          <div className="tagline">
            <TypistLoop interval={2500}>
              {taglines.map(text => <Typist key={text} startDelay={100}>{text}</Typist>)}
            </TypistLoop>
          </div>
          <div className="desc columns is-one-third">
            <div className="column quote">
              <h4>
                Tech is reserved for the people like me - The freaks, the weirdos, the misfits, the geeks, the dweebs, the dorks <br /> - Richard Hendriks, Silicon Valley
              </h4>
            </div>
            <div className="column is-two-thirds workinfo">
              <p>
                A task oriented guy who likes to get his hands dirty working on interdisciplinary projects. <br />
                A learner with interest in versatile topics like Embedded System, Programming, Mechanics and many more. <br />
                Likes to get engaged in complete lifecycle of project, right from planning and designing to installation and marketing.
              </p>
              <p className="next-para">
                When I am not working, I like to indulge in discussions on science, philosophy, religion or any other topic. I love to watch TV series and have watched quite many of them. I like to indulge in adventures, swimming, road trips etc  a weird combination giving peace as well as getting my adrenaline high.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Summary;
