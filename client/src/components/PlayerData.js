import React from 'react';
import Axios from 'axios';
import PlayerCard from './PlayerCard';

class PlayerData extends React.Component {

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
      .catch(err => console.log(err,'error'))
  }

  render() {
    return (
      <div>
          <PlayerCard players={this.state.players}/>
      </div>
    );
  }
}

export default PlayerData;