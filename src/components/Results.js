import React from 'react';
import MediaQuery from 'react-media';
import './styles/Results.css';


const Results = (props) => {
  return(
    <ul>
        {props.businesses.map((business, index) => {
          return(
            <MediaQuery query="(max-width: 750px)" key={index}>
            {matches => matches 
                ?(
                    <div className="App-results-mobile">
                        <p className="App-results-name-mobile">
                          {business.name}
                        </p>
                        <li >
                            <a href={business.url} target="_blank" className="App-link">
                            <img style={{height: 100}} src={business.image_url} alt={business.id}/>
                            </a>
                            <p className="App-results-address">
                            <a 
                                href={`http://maps.google.com/?q=${business.location.display_address[0]}${business.location.display_address[1]}`}
                                target="_blank"
                                >
                                {business.location.display_address[0]}
                            </a>
                            </p>
                            <p className="App-results-price-mobile">
                            {business.price}
                            </p>

                        </li>
                        <p className="App-results-rating-mobile">
                        {business.rating} Stars
                        </p>
                    </div>
                    )

                :(
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
            }
            </MediaQuery>

            )
        })}
   </ul> )
}

export default Results;