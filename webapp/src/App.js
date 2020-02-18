import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/Home';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Player from './pages/Player';
import FieldPage from './pages/Field';


function App() {

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/player">
            <Player />
          </Route>
          <Route path="/field">
            <FieldPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  )
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
