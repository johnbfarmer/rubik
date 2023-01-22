import React, { Component } from 'react';
import Face from './Face.js';
import Cube from './Cube.js';
import './App.css';
const colors = [
  'red',
  'white',
  'yellow',
  'green',
  'blue',
  'orange'
];

class App extends Component {
  render() {
    return (
      <div className="App">
        Rubik's Cube
          <Cube />
      </div>
    );
  }
}

export default App;
