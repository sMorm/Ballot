import React, { Component, PropTypes } from 'react';
import { ThreeBounce } from 'better-react-spinkit'

import './styles/Loading.css'

class Loading extends Component {
  static childContextTypes = {
    betterReactSpinkit: PropTypes.object
  };
  getChildContext () {
    return {
      betterReactSpinkit: {
        color: 'white',
        size: 25
      }
    }
  }
  render () {
    // Inline props override the contextual settings. 
    return (
        <div className="Loading-Container">
          <ThreeBounce size={15} color='salmon' />
          <p className="Loading-Message">Fetching Yelps...</p>
        </div>
    )
  }
}



export default Loading;