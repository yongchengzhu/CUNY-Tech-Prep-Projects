import React from 'react';

class ZipSearchField extends React.Component {
  constructor(props) {
    super(props);
    this.state = { zipcode: '' }
  }

  handleChange = event => {
    this.setState({ zipcode: event.target.value });
  }

  handleKeyPress = async event => {
    if (event.key === 'Enter') {
      this.props.fetchCities(this.state.zipcode);
    }
  }

  render() {
    return (
      <div>
        Zipcode: 
        <input 
          type="text" 
          placeholder="Try 10016"
          onChange={this.handleChange} 
          onKeyPress={this.handleKeyPress} 
        />
      </div>
    );
  }
}

export default ZipSearchField;
