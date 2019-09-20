import React from 'react';

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ searchValue: '' });
  }

  handleChange = event => {
    this.setState({ searchValue: event.target.value.toUpperCase() });
  }

  render() {
    console.log(this.state.searchValue);
    return (
      <div className="searchbar">
        <strong>City:</strong>
        <input type="text" placeholder="Enter a City" onChange={this.handleChange} />
      </div>
    );
  }
}

export default Searchbar;