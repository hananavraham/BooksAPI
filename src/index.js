import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router} from 'react-router-dom'
//import BooksList from './BooksList'
import ReactRouter from './router/router'

ReactDOM.render(
    <Router>
        <ReactRouter/>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
