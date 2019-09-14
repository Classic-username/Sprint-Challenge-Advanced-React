import React from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import PlayerCard from './components/PlayerCard';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      players: []
    }
  }
  

  componentDidMount() {
    const url = 'http://localhost:5000/api/players'
    Axios
      .get(url)
      .then(res => this.setState({ players: res.data }))
      .then(console.log(this.state, 'inside CDM'))
      .catch(err => console.log(err,'error'))
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state, 'inside CDU')
    // if (prevState.players !== this.state.players){
    //   console.log(this.state.players,'in CompDidUp')

    // }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <PlayerCard players={this.state.players}/>
        </header>
      </div>
    );
  }
}

export default App;
