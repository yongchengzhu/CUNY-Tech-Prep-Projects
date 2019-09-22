import React from 'react';

class Zipcode extends React.Component {
  render() {
    return (
      <div>
        <div>Zipcode: {this.props.zipcode}</div>
        <ul>
          <li>State: {this.props.state.State}</li>
          <li>City: {this.props.state.City}</li>
          <li>Location: ({this.props.state.Lat}, {this.props.state.Long})</li>
          <li>Decommisioned: {this.props.state.Decommisioned}</li>
          <li>Tax Filed: {this.props.state.TaxReturnsFiled}</li>
          <li>Population: {this.props.state.EstimatedPopulation}</li>
          <li>Wages: {this.props.state.TotalWages}</li>
        </ul>
      </div>
    );
  }
}

export default Zipcode;