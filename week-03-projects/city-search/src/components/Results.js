import React from 'react';
import Zipcode from './Zipcode';

class Results extends React.Component {
  render() {
    return (
      <div className="results">
        <ul>
          {
            this.props.zipcodes.map(zipcode => {
              return (
                <Zipcode zipcode={zipcode.zipcode} state={zipcode.state} />
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default Results;