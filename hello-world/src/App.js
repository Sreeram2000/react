import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet' 
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter'
import Hello from './components/Hello'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';

class App extends Component {
  render() {
    return (
      <div className="App">
      {//<ParentComponent />
       //<EventBind />
      }
      <UserGreeting />
      </div>
    );
  }
}

export default App;
