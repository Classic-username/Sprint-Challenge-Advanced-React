import React from 'react';
import logo from './logo.svg';
import './App.css';
import PlayerData from './components/PlayerData';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Advanced React Sprint: this displays the Women's World Cup most searched women.</h2>
        <PlayerData />
      </header>
    </div>
  );
}

export default App;
