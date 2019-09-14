import React from 'react';
import logo from './logo.svg';
import './App.css';
import PlayerData from './components/PlayerData';
import useBlindMode from './hooks/useBlindMode'


function App() {

  const [blindMode, setBlindMode] = useBlindMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setBlindMode(!blindMode)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h2>Advanced React Sprint: this displays the Women's World Cup most searched women from June-July.</h2>
          <button onClick={toggleMode}>inconspicuous button</button>
        </div>
        
        <PlayerData />
      </header>
    </div>
  );
}

export default App;
