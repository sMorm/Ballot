import React from 'react';
import { ThreeBounce } from 'better-react-spinkit'

import './styles/Loading.css'

/*
  @Loading

  Renders loading animation,
*/

const Loading = () => {
  return(
    <div className="Loading-Container">
      <ThreeBounce size={15} color='salmon' />
      <p className="Loading-Message">
        Fetching Yelps...
      </p>
    </div>
  )
}

export default Loading;