import React from 'react';
// import { Router, Route } from 'react-router';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

import App from './App'
import AppHeader from './AppHeader'
import About from './About'
import Login from './Login'


const Routes = (props) => {
  return(
    <Router>
      <div className="App">
        <AppHeader />
          <Switch>
            <Route exact path="/ballot" component={ App } />
            <Route path='/ballot/about' component={ About } />
            <Route path='/ballot/login' component={ Login } />
            <Route path="*" component={ App }/> 
          </Switch>
      </div>
    </Router>
  )
}

export default Routes;