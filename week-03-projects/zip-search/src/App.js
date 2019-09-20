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
    if (zipcode.length !== 5) {
      this.setState({ cities: [] });
      return;
    }

    try {
      const response = await fetch(`http://ctp-zip-api.herokuapp.com/zip/${zipcode}`);
      const json     = await response.json();
      this.setState({ cities: json });
    } catch(err) {
      this.setState({ cities: [] });
    }
  }

  renderCities = () => {
    if (!this.state.cities.length) return <div>No Results</div>

    return (
      <div>
        { 
          this.state.cities.map(city => {
            return (
              <City 
                city={city.City}
                state={city.State}
                lat={city.Lat}
                long={city.Long}
                population={city.EstimatedPopulation}
                wages={city.TotalWages}
              />
            );
          })
        }
      </div>
    );
  }

  render() {
    return (
      <div className="App container">
        <div className="row">
          <div className="col">
            <div className="App-header">
              <h2>Zip Code Search</h2>
            </div>
            
            <div className="main row justify-content-center">
              <div className="col-12 col-md-4">
                <ZipSearchField fetchCities={ this.fetchCities } />
                { this.renderCities() }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
