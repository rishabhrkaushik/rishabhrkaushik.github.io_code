import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Landing from './Landing/Landing';
import Experience from './Experience/Experience'
import * as serviceWorker from './serviceWorker';

// Bulma
import 'bulma/css/bulma.css'

ReactDOM.render(<Landing />, document.getElementById('landing'));
ReactDOM.render(<Experience />, document.getElementById('experience'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
