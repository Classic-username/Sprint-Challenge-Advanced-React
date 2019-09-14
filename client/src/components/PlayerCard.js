import React, { useEffect, useState } from 'react';

const PlayerCard = (props) => {

    return(

        <div>
            {props.players.map(player => (
                <div key={player.id}>
                    <h3>Name: {player.name}</h3>
                    <p>Country: {player.country}</p>
                    <p>Searched for {player.searches} time(s).</p>
                </div>
            ))}
            <h1>Hello!</h1>
        </div>
    )

}

export default PlayerCard;