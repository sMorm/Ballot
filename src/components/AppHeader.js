// Dependencies
import React from 'react';
import MediaQuery from 'react-media';
import { Link } from 'react-router-dom'

// Stylesheets
import './styles/App.css'

// Media
import Logo from '../assets/ballot-logo.svg'

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
                    <li><Link to='/ballot/about' className='link'>About</Link></li>
                    <li><Link to='/ballot/login' className='link'>Login</Link></li>
                  </ul>
                 </div>

                :<div>
                <div className="App-header">
                  <Link to='/ballot' className='link'><img src={Logo} alt='Logo'/></Link>
                  <ul>
                    <li><Link to='/ballot' className='link'>Home</Link></li>             
                    <li><Link to='/ballot/about' className='link'>About</Link></li>
                    <li><Link to='/ballot/login' className='link'>Login</Link></li>
                  </ul>
                 </div>

                </div>
              }
            </MediaQuery>
        </div>
    );
}

export default AppHeader;