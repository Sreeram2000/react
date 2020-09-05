import React, { Component } from 'react';
import './App.css';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import Focusinput from './components/Focusinput';
import FRParentInput from './components/FRParentInput';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FRParentInput />
      </div>
    );
  }
}

export default App;
