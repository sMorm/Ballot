import React from 'react';
import MediaQuery from 'react-media';

import './styles/App.css'

const AppHeader = (props) => {
    return (
        <div>
            <MediaQuery query="(max-width: 750px)">
              {matches => matches

                ?<div className="App-header-mobile">
                  <h1>B</h1>
                  <p><a href="http://github.com/team-ballot/ballot-web" target="_blank">See Github</a></p>
                 </div>

                :<div className="App-header">
                  <h1>Ballot</h1>
                 </div>
              }
            </MediaQuery>
            <div className="App-intro">
              <p>To get started, enter the type of food and your location</p>
            </div>
        </div>
    );
}

export default AppHeader;