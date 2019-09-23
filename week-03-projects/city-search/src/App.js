import React from 'react';

import './App.css';
import Header from './components/Header';
import Searchbar from './components/Searchbar';
import Results from './components/Results';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ zipcodes: [] });
  }

  fetchZipcodes = async city => {
    const response = await fetch(`http://ctp-zip-api.herokuapp.com/city/${city}`);
    const json     = await response.json();
    
    const zipcodes = await Promise.all(json.map(async zipcode => {
      const states = await this.fetchState(zipcode);

      for (let state of states) {
        if (state.City === city) {
          return ({ zipcode: zipcode, state: state });
        }
      }
    }));

    this.setState({ zipcodes: zipcodes });
  }

  fetchState = async zipcode => {
    const response = await fetch(`http://ctp-zip-api.herokuapp.com/zip/${zipcode}`);
    const json     = await response.json();
    
    return json;
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Searchbar fetchZipcodes={this.fetchZipcodes} />
        <Results zipcodes={this.state.zipcodes} />
      </div>
    );
  }
}

export default App;