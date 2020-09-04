import React, { Component } from 'react';
import './App.css';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import Focusinput from './components/Focusinput';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Focusinput />
      </div>
    );
  }
}

export default App;
