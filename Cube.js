import React, { Component } from 'react';
import Face from './Face.js';
import Tile from './Tile.js';
import './App.css';
const colors = [
  'red',
  'white',
  'yellow',
  'green',
  'blue',
  'orange'
];

class Cube extends Component {
  getCorner = (colors) => {
    return (
      [
        <Tile key={colors[3]+1} color={colors[0]}/>,
        <Tile key={colors[3]+2} color={colors[1]}/>,
        <Tile key={colors[3]+3} color={colors[2]}/>,
      ]
    );
  }

  render() {
    let corners = [
      this.getCorner([colors[0], colors[1], colors[4],1]),
      this.getCorner([colors[0], colors[2], colors[4],2]),
      this.getCorner([colors[0], colors[2], colors[3],3]),
      this.getCorner([colors[0], colors[1], colors[4],4]),
      this.getCorner([colors[5], colors[1], colors[4],5]),
      this.getCorner([colors[5], colors[2], colors[4],6]),
      this.getCorner([colors[5], colors[2], colors[3],7]),
      this.getCorner([colors[5], colors[1], colors[4],8]),
    ];

    return (
        <div className='cube-1'>
          <Face tiles={[corners[0][0],corners[1][0],corners[2][0],corners[3][0]]} />
          <Face tiles={[corners[0][1],corners[3][1],corners[4][1],corners[3][1]]} />
          <Face tiles={[corners[1][1],corners[2][1],corners[5][1],corners[6][1]]} />
        </div>
    );
  }
}

export default Cube;
