import { useContext } from "react";
import { TournamentContext } from "../../TournamentProvider/TournamentProvider";

const PlayerComponent = () => {
    const tournamentContext = useContext(TournamentContext);

    const addPlayer = () => {
        let playerName = document.querySelector('input[id=playerName]').value;
        tournamentContext.setPlayers([
            ...tournamentContext.players,
            { name: playerName }
        ]);
    }

    const addForm = () => {
        return (
        <>
            <input type="text" id="playerName" placeholder="Nazwa gracza" />
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

    console.log(tournamentContext.players)

    return (
        <div className="box"> 
            { addForm() }
            <hr/>
            <table>
                <tr>
                    <th>l.p.</th>
                    <th>Nazwa</th>
                </tr>
                { tournamentContext.players.map((player, i) => playerRow(i, player)) }
            </table>      
        </div>
    );
}

export default PlayerComponent;
