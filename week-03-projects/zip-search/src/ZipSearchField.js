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
        <div className="form-group row">
          <label className="label col-form-label col-3" for="zipcode">Zipcode: </label>
          <div className="col-9">
            <input 
              id="zipcode"
              className="form-control"
              type="text" 
              placeholder="Try 10016"
              onChange={this.handleChange} 
              onKeyPress={this.handleKeyPress} 
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ZipSearchField;
