import React from 'react';
import './Landing.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faQuora } from '@fortawesome/free-brands-svg-icons';

// for fading text
import ReactTextRotator from 'react-text-rotator';

// Particle JS
import Particles from 'react-particles-js';

const particleConfig = {
  "particles": {
    "number": {
      "value": 35,
      "density": {
        "enable": true,
        "value_area": 600
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1.6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 100,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
};

const fadeContent = [
  {
    text: 'Programmer',
    animation: 'fade',
  },
  {
    text: 'Electronics Engineer',
    animation: 'fade',
  },
  {
    text: 'Product Designer',
    animation: 'fade',
  },
  {
    text: 'Project Manager',
    animation: 'fade'
  }
];

function Landing() {
  return (
    <div className="landing-background is-mobile">
      <div className="content">
        <figure className="image">
          <img className="image profile-pic" src={require("./../../data/avatar.png")} alt="Profile Pic"/>
        </figure>
        <div className="intro">
          I AM RISHABH KAUSHIK
        </div>
        <div className="faded-text">
          <ReactTextRotator
            content={fadeContent}
            time={3000}
          />
        </div>
        <div className="social-icons">
          <div className="social-icon">
            <a href="https://www.linkedin.com/in/rishabhrkaushik/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className="social-icon" icon={faLinkedin} />
            </a>
            <a href="https://github.com/rishabhrkaushik" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className="social-icon" icon={faGithub} />
            </a>
            <a href="https://www.quora.com/profile/Rishabh-Kaushik-4" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className="social-icon" icon={faQuora} />
            </a>
          </div>
        </div>
      </div>
      <div className="animated-canvas">
      <Particles className="animated-canvas" params={particleConfig}/>
      </div>
    </div>
  );
}

export default Landing;
