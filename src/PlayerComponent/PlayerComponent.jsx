import { useContext } from "react";
import Player from "../Model/Player";
import { TournamentContext } from "../TournamentProvider/TournamentProvider";

const PlayerComponent = () => {
    const tournamentContext = useContext(TournamentContext);

    const addPlayer = () => {
        let nameImput = document.querySelector('input[id=playerName]');
        tournamentContext.setPlayers([
            ...tournamentContext.players,
            new Player(tournamentContext.players.length+1, nameImput.value)
        ]);
        nameImput.value = '';
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            addPlayer();
        }
    }

    const addForm = () => {
        return (
        <>
            <input type="text" id="playerName" placeholder="Nazwa gracza" onKeyDown={handleKeyDown}/>
            <button id="saveTournamentName" onClick={addPlayer}>Dodaj</button>
            <hr/>
        </>);
    }

    const playerRow = (index, player) => {
        return (
            <tr key={index}>
                <td>{ index + 1 }.</td>
                <td>{ player.name } (id: { player.id })</td>
                <td>{ player.wins }</td>
            </tr>);
    }

    return (
        <div className="box"> 
            { !tournamentContext.isStarted && addForm() }
            <table>
                <thead>
                <tr>
                    <th>l.p.</th>
                    <th>Nazwa</th>
                    <th>Zwycięstwa</th>
                </tr>
                </thead>
                <tbody>
                { tournamentContext.players.map((player, i) => playerRow(i, player)) }
                </tbody>
            </table>      
        </div>
    );
}

export default PlayerComponent;
