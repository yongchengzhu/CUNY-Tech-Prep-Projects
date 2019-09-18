import React, { Component } from 'react';
import ZipSearchField from './ZipSearchField';
import City from './City';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({ cities: [] });
  }

  fetchCities = async zipcode => {
    const response = await fetch(`http://ctp-zip-api.herokuapp.com/zip/${zipcode}`);
    const json     = await response.json();
    this.setState({ cities: json });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Zip Code Search</h2>
        </div>
        <div className="main">
          <ZipSearchField fetchCities={ this.fetchCities } />
          <div>
            <City cities={ this.state.cities } />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
