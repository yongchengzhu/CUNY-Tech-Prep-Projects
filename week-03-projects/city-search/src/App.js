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
    this.setState({ zipcodes: json });
  }

  render() {
    return (
      <div>
        <Header />
        <Searchbar fetchZipcodes={this.fetchZipcodes} />
        <Results />
      </div>
    );
  }
}

export default App;