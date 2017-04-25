import React from 'react';
// import { Router, Route } from 'react-router';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

import App from './App'
import NotFound from './NotFound'
import AppHeader from './AppHeader'
import Team from './Team'
import About from './About'
import Login from './Login'


const Routes = (props) => {
  return(
    <Router>
      <div className="App">
        <AppHeader />
          <Switch>
            <Route exact path="/" component={ App } />
            <Route path='/team' component={ Team } />
            <Route path='/about' component={ About } />
            <Route path='/login' component={ Login } />
            <Route path="*" component={ NotFound }/> 
          </Switch>
      </div>
    </Router>
  )
}

export default Routes;