import React from 'react';

class Zipcode extends React.Component {
  render() {
    return (
      <li>{this.props.zipcode}, {this.props.state}</li>
    );
  }
}

export default Zipcode;