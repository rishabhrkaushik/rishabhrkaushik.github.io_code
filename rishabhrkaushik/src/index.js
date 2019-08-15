import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Components
import Landing from './Landing/Landing';
import Summary from './Summary/Summary';
import Experience from './Experience/Experience';
import Skills from './Skills/Skills';

import * as serviceWorker from './serviceWorker';

// Bulma
import 'bulma/css/bulma.css'

ReactDOM.render(<Landing />, document.getElementById('landing'));
ReactDOM.render(<Summary  />, document.getElementById('summary'));
ReactDOM.render(<Experience />, document.getElementById('experience'));
ReactDOM.render(<Skills />, document.getElementById('skills'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
