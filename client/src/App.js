import React from 'react';
import Nav from './components/Nav'
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
        <Nav/>
        <Route exact path="/search" component={Search}/>
        <Route exact path="/favorites" component={Favorites}/>
        </header>
      </Router>
    </div>
  );
}

export default App;
