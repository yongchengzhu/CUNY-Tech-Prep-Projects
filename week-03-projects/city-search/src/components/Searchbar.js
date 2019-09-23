import React from 'react';

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ searchValue: '' });
  }

  handleChange = event => {
    this.setState({ searchValue: event.target.value.toUpperCase() });
  }

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      this.props.fetchZipcodes(this.state.searchValue);
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col s12 m6 offset-s2 offset-m4">
          <div className="searchbar input-field inline">
            <label htmlFor="searchbar-input">City</label>
            <input 
              type="text"
              id="searchbar-input"
              onChange={this.handleChange} 
              onKeyPress={this.handleKeyPress}
            />
          </div>
          <button className="btn blue-grey darken-4">Search</button>
        </div>
      </div>
    );
  }
}

export default Searchbar;