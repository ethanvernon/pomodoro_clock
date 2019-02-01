import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {Parent} from './Parent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Parent/>
      </div>
    );
  }
}

export default App;
