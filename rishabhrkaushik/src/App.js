import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faQuora } from '@fortawesome/free-brands-svg-icons'
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
        "enable": true,
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
    text: 'Absolute Fucker',
    animation: 'fade',
  },
  {
    text: 'Project Destroyer',
    animation: 'fade',
  }
];

function App() {
  return (
    <div class="particles-canvas ">
      <div class="is-mobile is-vertical-center content">
        <figure class="profile-pic-div">
            <img class="image profile-pic" src="https://bulma.io/images/placeholders/256x256.png" alt="Profile Pic"/>
        </figure>
        <div className="intro">
          I AM RISHABH KAUSHIK
        </div>
        <div className="rotating-text">
          <ReactTextRotator
            content={fadeContent}
            time={3000}
          />
        </div>
        <div className="social-icons">
          <FontAwesomeIcon className="social-icon" icon={faLinkedin} />
          <FontAwesomeIcon className="social-icon" icon={faGithub} />
          <FontAwesomeIcon className="social-icon" icon={faQuora} />
        </div>
      </div>
      <Particles params={particleConfig}/>
    </div>
  );
}

export default App;
