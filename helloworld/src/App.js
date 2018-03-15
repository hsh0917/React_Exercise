import React, { Component } from 'react';  // React is the default export from the file and component is export from that file but not by default.
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello World!!!</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export { App }; // if you don't declare it with default, you should rename of file that imports this.
//export default App; 
