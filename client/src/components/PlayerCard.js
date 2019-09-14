import React, { useEffect, useState } from 'react';

const PlayerCard = (props) => {

    console.log(props.players,'props PlayerCardComp')

    return(
        

        <div>
            {props.players.map(player => (
                <div key={player.id}>
                    <h2>Name: {player.name}</h2>
                    <p>Country: {player.country}</p>
                    <p>Searched for {player.searches} times.</p>
                </div>
            ))}
            <h1>Hello!</h1>
        </div>
    )

}

export default PlayerCard;