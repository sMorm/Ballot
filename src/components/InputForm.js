import React from 'react';
import './styles/InputForm.css';
import Geopin from '../assets/geopin.jpg'

const Form = (props) => {
    return (
        <div className="Form-container">
            <form onSubmit={props.onSubmit} autoComplete="off">
                <input 
                  name={props.name1}
                  className="Form-input left" 
                  type="text"
                  placeholder="Term"
                  onChange={props.onChange}
                  value={props.searchTerm}
                  required>
                </input>
                <input 
                  name={props.name2}
                  className="Form-input right" 
                  type="text"
                  placeholder="Location"
                  onChange={props.onChange}
                  value={props.searchLocation}
                  required>
                </input>
                {
                    props.onMobile === false
                  ? <img 
                  src={Geopin} alt="Geolocation Pin"
                  className="GeoImg"
                  type="button"
                  onClick={props.useLocation}/>
                  
                  : <div></div>
                }
                <button 
                  className="Form-button" 
                  type="submit">
                    Search!
                </button>
            </form>
        </div>
        );
}

export default Form;