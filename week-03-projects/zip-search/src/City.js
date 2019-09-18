import React from 'react';

class City extends React.Component {
  constructor(props) {
    super(props);
  }

  renderCities = () => {
    if (!this.props.cities.length) {
      return <p>No Results</p>
    }

    return (
      <div>
        {
          this.props.cities.map(city => {
            return (
              <div>
                <div>{city.City}, {city.State}</div>
                <li>State: {city.State}</li>
                <li>Location: ({city.Lat}, {city.Long})</li>
                <li>Population (estimated): {city.EstimatedPopulation}</li>
                <li>Total Wages: {city.TotalWages}</li>
              </div>
            )
          })
        }
      </div>
    );
  }

  render() {
    return (
      <div>
        { this.renderCities() }
      </div>
    );
  }
}

export default City;
