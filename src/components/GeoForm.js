// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Media
import Geopin from '../assets/geopin.jpg'

// Stylesheets
import './styles/GeoForm.css'

/*
  @GeoForm

  Functionality:
  UI that will be rendered if user decides
  that they want to use geolocation.

  Given Props:
  onSubmit, invoked when user finishes
  entering parameters.

*/

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

GeoForm.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  name1: PropTypes.string,
  searchTerm: PropTypes.string
}

export default GeoForm;