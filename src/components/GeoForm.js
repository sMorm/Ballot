import React from 'react';
import Geopin from '../assets/geopin.jpg'

import './styles/GeoForm.css'

const GeoForm = (props) => {
    return (
        <div className="Form-container">
            <form onSubmit={props.onSubmit} autoComplete="off">
                <input 
                  name={props.name1}
                  className="GeoForm-input" 
                  type="text"
                  placeholder="Look for burgers, sushi, etc."
                  onChange={props.onChange}
                  value={props.searchTerm}
                  required>
                </input>

                <img src={Geopin} alt="Geolocation"
                  className="GeoFormImg"
                  type="button"
                  onClick={props.useLocation}
                />

                <button 
                  className="Form-button" 
                  type="submit">
                    Search!
                </button>
            </form>
        </div>
        );
}

export default GeoForm;