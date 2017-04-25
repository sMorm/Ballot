// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MediaQuery from 'react-media';
import { Motion, spring } from 'react-motion'

// Stylesheets
import './styles/Results.css';

const preset = {stiffness: 100, damping: 15}
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

            <Motion 
            defaultStyle={{x: 0, y: 0}} 
            style={{x: spring(1, preset), y: spring(1, preset)}}>
              {value =>{
                const { x, y } = value;
                let style = {
                  opacity: y
                }
                let translate = {
                  transform: `scale(${x})`,
                  opacity: y
                }
                return (
                  <div style={style} className="resultContainer">
                  <ul key={index} className="App-results" style={translate}>
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
                      <button 
                        className="Dislike"
                        onClick={() => this.props.onDislike(index)}>
                      I don't like this 😐
                      </button>
                    </li>
                  <h2 className="App-results-rating">
                    {business.rating} Stars
                  </h2>
                  </ul>
                  </div>
                  )
               }
              }
            </Motion>

            )
            }
          </MediaQuery>
          )
        }
        )
    }
    <div className="tempBlock"/>
    </ul> 
    )   
  }
}

Results.propTypes = {
  businesses: PropTypes.array,
  onDislike: PropTypes.func
}

export default Results;













