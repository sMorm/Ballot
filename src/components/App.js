import React, { Component } from 'react';
import MediaQuery from 'react-media';
import axios from 'axios';

import shuffle from 'shuffle-array';

// Components
import AppHeader from './AppHeader'
import InputForm from './InputForm';
import GeoForm from './GeoForm'
import Loading from './Loading'
import Result from './Results'
// Stylesheets
import './styles/App.css';

const baseURL = 'https://ballotyelp.herokuapp.com/yelpsearch/'

class App extends Component {
  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onDislike = this.onDislike.bind(this);
    this.useLocation = this.useLocation.bind(this);
    this.state = {
      businesses: [],
      disliked: [],
      searchTerm: '',
      searchLocation: '',
      geoLocation: false,
      coordinates: '',
      isLoading: false
    }
  }

  /*
    @onSubmit
    Manages loading and gelocation use state.
    If geolocation is used, make request with
    different endpoint. The response will then
    shuffle and applied to the business state.
  */

  onSubmit(event){
    event.preventDefault();
    this.setState({
      isLoading: true,
    })
    axios.get(this.state.geoLocation === true
      ?`${baseURL}${this.state.searchTerm}/${this.state.coordinates.longitude}/${this.state.coordinates.latitude}`
      :`${baseURL}${this.state.searchTerm}/${this.state.searchLocation}`)
    .then(response => {
        shuffle(response.data.businesses);
        this.setState({
          businesses: response.data.businesses.slice(0,6),
          isLoading: false
        });
    });
  }

  /*
    @onChange
    This function manages state changes in each
    text box, and applies to the correct 'name'
    specified. For example, if term changes, it
    will be applied to the correct 'name'.
  */

  onChange(event){
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  /*
    @Manages loading and gelocation use state.
    If geolocation is used, make request with
    different endpoint. The response will then
    shuffle and applied to the business state.
  */

  onDislike(businessId){
    const { businesses, disliked } = this.state;
    disliked.push(businesses[businessId]);
    businesses.splice(businessId, 1);
    this.setState({
      businesses,
      disliked
    })
  }

  /*
    @useLocation
    Function used to prompt the user whether
    they want to use their geolocation. When
    it's invoked, it will negate the state
    of geoLocation.
  */

  useLocation(event){
    this.setState({
      geoLocation: !this.state.geoLocation,
    });
    navigator.geolocation.getCurrentPosition((position) => {
      const coordinates ={
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }
      this.setState({
        coordinates: coordinates
      })
    });
  }

  render() {
    return (
      <div className="App">
        <AppHeader />
        <MediaQuery query="(max-width: 750px)">
          {matches => matches
            ? (
              <div>
                <InputForm
                name1="searchTerm" name2="searchLocation"
                onSubmit={this.onSubmit}
                onChange={this.onChange}
                useLocation={this.useLocation}
                searchTerm={this.state.searchTerm}
                searchLocation={this.state.searchLocation}
                getLocation={this.state.geoLocation}
                onMobile={true}
                />
              </div>
            ) 
            
            : (
              <div>
              {
              !this.state.geoLocation
              ?   <InputForm
                  name1="searchTerm" name2="searchLocation"
                  onSubmit={this.onSubmit}
                  onChange={this.onChange}
                  useLocation={this.useLocation}
                  searchTerm={this.state.searchTerm}
                  searchLocation={this.state.searchLocation}
                  getLocation={this.state.geoLocation}
                  onMobile={false}
                  />
              :   <GeoForm 
                  name1="searchTerm"
                  onSubmit={this.onSubmit}
                  onChange={this.onChange}
                  useLocation={this.useLocation}
                  searchTerm={this.state.searchTerm}
                  searchLocation={this.state.searchLocation}
                  getLocation={this.state.geoLocation}
                  />
                }
              </div>
          )}
        </MediaQuery>
        {
          this.state.isLoading
          ? <Loading />
          : <Result businesses={this.state.businesses} 
                    onDislike={this.onDislike}/>
        }
        <div className="TempBlock"></div>
      </div>
    );
  }
}

export default App;
