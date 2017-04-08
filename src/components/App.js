import React, { Component } from 'react';
import MediaQuery from 'react-media';
import axios from 'axios';

import shuffle from 'shuffle-array';

// Components
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
    this.useLocation = this.useLocation.bind(this);
    this.state = {
          businesses: [],
          searchTerm: '',
          searchLocation: '',
          geoLocation: false,
          coordinates: '',
          isLoading: false
    }
  }

  onSubmit(event){
    event.preventDefault()
    this.setState({
      isLoading: true,
    })
    axios.get(this.state.geoLocation === true
      ?`${baseURL}${this.state.searchTerm}/${this.state.coordinates.longitude}/${this.state.coordinates.latitude}`
      :`${baseURL}${this.state.searchTerm}/${this.state.searchLocation}`)
    .then((response) => {
        shuffle(response.data.businesses);
        this.setState({
            businesses: response.data.businesses.slice(0,6),
            isLoading: false
        })
    })
  }

  onChange(event){
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  useLocation(event){
    this.setState({
      geoLocation: !this.state.geoLocation,
    })
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
        <MediaQuery query="(max-width: 750px)">
          {matches => matches

            ?<div className="App-header-mobile">
              <h1>Ballot</h1>
             </div>

            :<div className="App-header">
              <h1>Ballot</h1>
             </div>
          }
        </MediaQuery>
        <div className="App-intro">
          <p>To get started, enter the type of food and your location</p>
        </div>

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
                  this.state.geoLocation === false
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
          this.state.isLoading === true
          ? <Loading />
          : <Result businesses={this.state.businesses} />
        }
        
        <div className="TempBlock"></div>
      </div>
    );
  }
}

export default App;
