import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCities } from '../actions';

import City from './city.jsx'

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCities: setCities },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

class CityList extends Component {
  componentWillMount() {
    // TODO Dispatch an action to update the REDUX state tree (cities)
    this.props.setCities();
  }

  render () {
    return (
      <div className='cities'>
        {this.props.cities.map((city) => <City city={city} key={city.name} />)}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
