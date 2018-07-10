import React from 'react';
import logo from './logo.svg';
import './App.css';
import Description from './Description';
import NumTerms from './NumTerms';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <Description />
    <NumTerms />
  </div>
)

export default App;
