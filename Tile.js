import React, { Component } from 'react';
import './App.css';
const colors = [
  'red',
  'white',
  'yellow',
  'green',
  'blue',
  'orange'
];
class Tile extends Component {
  render() {
    // let color = colors[Math.floor(6*Math.random())];
    let color = this.props.color;
    console.log(color);
    return (
      
          <div className='cube-1-tile' style={{backgroundColor:color}}>
          </div>
    );
  }
}

export default Tile;
