import React from 'react';
// import { Router, Route } from 'react-router';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

import App from './App'
import NotFound from './NotFound'


const Routes = (props) => (
  <Router>
    <div>
        <Route path="/" component={App} />
    </div>
  </Router>
);

export default Routes;