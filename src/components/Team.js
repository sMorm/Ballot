import React from 'react';

import './styles/Team.css'
import serey from '../assets/serey.jpg'
import brandon from '../assets/brandon.jpg'
import ryan from '../assets/ryan.jpg'
import elmer from '../assets/elmer.jpg'

const Team = () => {
  return(
    <div className='teamContainerAll'>
      <h1>Team</h1>
        <div className='teamContainer'>

          <div className='profile'>
            <a href="http://github.com/smorm" target="_blank">
              <img src={serey} alt='serey'/>
              <h1>Serey</h1>
            </a>
          </div>

          <div className='profile'>
            <a href="https://github.com/Liqueseous" target="_blank">
              <img src={ryan} alt='ryan'/>
              <h1>Ryan</h1>
            </a>
          </div>

          <div className='profile'>
            <a href="https://github.com/BrandonKarl" target="_blank">
              <img src={brandon} alt='brandon'/>
              <h1>Brandon</h1>
            </a>
          </div>

          <div className='profile'>
            <a href="https://github.com/Melendeze13" target="_blank">
              <img src={elmer} alt='elmer'/>
              <h1>Elmer</h1>
            </a>
          </div>

      </div>
    </div>
  );
}

export default Team