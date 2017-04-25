// Dependencies
import React from 'react';
import MediaQuery from 'react-media';
import { Link } from 'react-router-dom'
// Stylesheets
import './styles/App.css'

/*
  @Appheader
  Displays App header, receives no props
*/

const AppHeader = () => {
    return (
        <div>
            <MediaQuery query="(max-width: 750px)">
              {matches => matches

                ?<div className="App-header-mobile">
                  <h1>B</h1>
                  <ul>
                    <li><Link to='/ballot' className='link'>Home</Link></li>             
                    <li><Link to='/ballot/team' className='link'>Team</Link></li>
                    <li><Link to='/ballot/about' className='link'>About</Link></li>
                    <li><Link to='/ballot/login' className='link'>Login</Link></li>
                  </ul>
                 </div>

                :<div className="App-header">
                  <h1><Link to='/ballot' className='link'>B</Link></h1>
                  <ul>
                    <li><Link to='/ballot' className='link'>Home</Link></li>             
                    <li><Link to='/ballot/team' className='link'>Team</Link></li>
                    <li><Link to='/ballot/about' className='link'>About</Link></li>
                    <li><Link to='/ballot/login' className='link'>Login</Link></li>
                  </ul>
                 </div>
              }
            </MediaQuery>
        </div>
    );
}

export default AppHeader;