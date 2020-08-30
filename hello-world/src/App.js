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
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css' 
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import LifeCycleB from './components/LifeCycleB';

class App extends Component {
  render() {
    return (
      <div className="App">
      
      
      <LifeCycleA />

      {/*
        
        
        <LifeCycleA />
        
        //<ParentComponent /><StyleSheet primary={true} />
        //<EventBind /> 
        //<h1 className="error">Error</h1>
        //<h1 className={styles.success}>Success</h1>
        //<NameList /> <Form />
        //<UserGreeting /><Inline />*/
      }
      
      </div>
    );
  }
}

export default App;
