import React, { Component } from 'react'
import {connect} from 'react-redux';
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        {this.props.bands.map(band => <li>{band.name}</li>)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    bands: state.bands
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    addBand: bandName => dispatch({type: 'ADD_BAND', payload: {name:bandName}})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
