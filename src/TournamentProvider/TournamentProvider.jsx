import { createContext, useState } from "react";

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
        name,
        setName,
        players,
        setPlayers
    }

    return (
        <TournamentContext.Provider value={ value }>
            { props.children }
        </TournamentContext.Provider>
    )
}

export default TournamentProvider;
