import React from 'react';
import Zipcode from './Zipcode';

class Results extends React.Component {
  render() {
    return (
      <div className="results">
          {
            this.props.zipcodes.map(zipcode => {
              return (
                <Zipcode 
                  key={zipcode.zipcode} 
                  zipcode={zipcode.zipcode} 
                  state={zipcode.state} 
                />
              );
            })
          }
      </div>
    );
  }
}

export default Results;