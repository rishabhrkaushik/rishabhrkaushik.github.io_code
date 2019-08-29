import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Components
import Landing from './Components/Landing/Landing';
import Summary from './Components/Summary/Summary';
import Experience from './Components/Experience/Experience';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';


import * as serviceWorker from './serviceWorker';

// Bulma
import 'bulma/css/bulma.css'

ReactDOM.render(<Landing />, document.getElementById('landing'));
ReactDOM.render(<Summary  />, document.getElementById('summary'));
ReactDOM.render(<Experience />, document.getElementById('experience'));
ReactDOM.render(<Skills />, document.getElementById('skills'));
ReactDOM.render(<Projects />, document.getElementById('projects'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
