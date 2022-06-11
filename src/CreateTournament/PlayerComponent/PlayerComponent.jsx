import { useContext } from "react";
import { TournamentContext } from "../../TournamentProvider/TournamentProvider";

const PlayerComponent = () => {
    const tournamentContext = useContext(TournamentContext);

    const addPlayer = () => {
        let nameImput = document.querySelector('input[id=playerName]');
        tournamentContext.setPlayers([
            ...tournamentContext.players,
            { name: nameImput.value }
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
        </>);
    }

    const playerRow = (index, player) => {
        return (
            <tr>
                <td>{ index + 1 }.</td>
                <td>{ player.name }</td>
            </tr>);
    }

    return (
        <div className="box"> 
            { addForm() }
            <hr/>
            <table>
                <thead>
                <tr>
                    <th>l.p.</th>
                    <th>Nazwa</th>
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
