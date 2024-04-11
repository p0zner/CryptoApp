import React, { Component } from 'react';
import './styles/Loader.css'

export class Loader extends Component {
  render() {
    return (
      <div className='lds-dual-ring'></div>
    )
  }
}

export default Loader