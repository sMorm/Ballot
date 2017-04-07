import React from 'react';
import './styles/Results.css';


const Results = (props) => {
  return(
    <div>
        {props.businesses.map((business, index) => {
          return(
            <ul key={index} className="App-results">
                    <p className="App-results-name">
                      {business.name}
                    </p>
                <li>
                    <a href={business.url} target="_blank" className="App-link">
                    <img className="picture" src={business.image_url} alt={business.id}/>
                    </a>
                    <p className="App-results-address">
                    <a 
                        href={`http://maps.google.com/?q=${business.location.display_address[0]}${business.location.display_address[1]}`}
                        target="_blank">
                        {business.location.display_address[0]}
                    </a>
                    </p>
                    <p className="App-results-price">
                    {business.price}
                    </p>
                </li>
            <h2 className="App-results-rating">
              {business.rating} Stars
            </h2>
            </ul>
            )
        })}
   </div> )
}

export default Results;