import React, { Component } from 'react';

import City from './city.jsx'

class CityList extends Component {
  render () {
    return (
      <div className='cities'>
        {this.props.cities.map((city) => <City city={city} key={city.name} />)}
      </div>
    );
  }
}

export default CityList;
