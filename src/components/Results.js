// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MediaQuery from 'react-media';

// Stylesheets
import './styles/Results.css';


/*
  @Results
  Functionality: 
  Returns a UI with the given
  businesses

  Given Props
  businesses: an array of Yelp businesses
  onDislike: a function that deals with when
             the user dislikes a business

*/

class Results extends Component {
  render(){
  return(
    <ul>
      {this.props.businesses.map((business, index) => {
        return(
          <MediaQuery query="(max-width: 750px)" key={index}>
          {matches => matches 
            ? (
              <div className="App-results-mobile">
                <p className="App-results-name-mobile">
                  {business.name}
                </p>
                <li>
                  <a href={business.url} target="_blank" className="App-link">
                  <img style={{height: 100}} src={business.image_url} alt={business.id}/>
                  </a>
                  <div className="App-results-address">
                  <a 
                    href={`http://maps.google.com/?q=${business.location.display_address[0]}${business.location.display_address[1]}`}
                    target="_blank">
                    {business.location.display_address[0]}
                  </a>
                  </div>
                  <p className="App-results-price-mobile">
                    {business.price}
                  </p>
                </li>
                <p className="App-results-rating-mobile">
                  {business.rating} Stars
                </p>
              </div>
              )

            : (
              <ul key={index} className="App-results">
              <p className="App-results-name">
                {business.name}
              </p>
                <li>
                  <a href={business.url} target="_blank" className="App-link">
                  <img className="picture" src={business.image_url} alt={business.id}/>
                  </a>
                  <div className="App-results-address">
                  <a 
                    href={`http://maps.google.com/?q=${business.location.display_address[0]}${business.location.display_address[1]}`}
                    target="_blank">
                    {business.location.display_address[0]}
                  </a>
                  </div>
                  <p className="App-results-price">
                    {business.price}
                  </p>
                </li>
              <h2 className="App-results-rating">
                {business.rating} Stars
              </h2>
              </ul>
            )
            }
          </MediaQuery>
          )
        }
        )
    }
    </ul> 
    )   
  }
}

Results.propTypes = {
  businesses: PropTypes.array,
  onDislike: PropTypes.func
}

export default Results;