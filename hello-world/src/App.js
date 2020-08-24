import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet' 
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter'
import Hello from './components/Hello'
class App extends Component {
  render() {
    return (
      <div className="App">
      {<Greet name="Bruce" heroName="Batman"/>
      // <Greet name="Clark" heroName="Superman"/>
      // <Greet name="Diana" heroName="Wonder Woman"/>
      }
      <Welcome name="Clark" heroName="Superman"/>
      {//<Message />
      }
      <Counter />
      </div>
    );
  }
}

export default App;
