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
      <div className="searchbar">
        <strong>City:</strong>
        <input 
          type="text" 
          placeholder="Enter a City" 
          onChange={this.handleChange} 
          onKeyPress={this.handleKeyPress}
        />
      </div>
    );
  }
}

export default Searchbar;