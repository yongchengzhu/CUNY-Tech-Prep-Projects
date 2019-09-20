import React from 'react';

class City extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="city">
        <div className="city-title">{this.props.city}, {this.props.state}</div>
        <ul className="cities">
          <li>State: {this.props.state}</li>
          <li>Location: ({this.props.lat}, {this.props.long})</li>
          <li>Population (estimated): {this.props.population}</li>
          <li>Total Wages: {this.props.wages}</li>
        </ul>
      </div>
    );
  }
}

export default City;
