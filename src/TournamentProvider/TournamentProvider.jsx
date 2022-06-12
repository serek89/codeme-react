import { createContext, useState } from "react";
import Player from "../Model/Player";

export const TournamentContext = createContext({
    name: '',
    setName: '',
    players: [],
    setPlayers: '',
    isStarted: false
});

const TournamentProvider = (props) => {
    const [name, setName] = useState('');
    const [players, setPlayers] = useState([]);

    const value = {
        name: 'Testowy',
        setName,
        players: [
            new Player(1, 'Asia'),
            new Player(2, 'Kasia'),
            new Player(3, 'Basia'),
            new Player(4, 'Anka'),
        ],
        setPlayers,
        isStarted: true
    }

    return (
        <TournamentContext.Provider value={ value }>
            { props.children }
        </TournamentContext.Provider>
    )
}

export default TournamentProvider;
