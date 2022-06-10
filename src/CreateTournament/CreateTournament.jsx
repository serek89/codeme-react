import { useContext } from "react";
import { TournamentContext } from "../TournamentProvider/TournamentProvider";
import PlayerComponent from "./PlayerComponent/PlayerComponent";

const CreateTournament = () => {
    const tournamentContext = useContext(TournamentContext);

    const saveName = () => {
        let name = document.querySelector('input[id=tournamentName]').value;
        tournamentContext.setName(name);
    }

    console.log(tournamentContext.name);

    return (
        <>
        <div className="box">
            <input 
            type="text" 
            id="tournamentName" 
            placeholder="Nazwa turnieju"
            />
            <button id="saveTournamentName" onClick={ saveName }>Zapisz</button>
        </div>
        <PlayerComponent/>
        </>
        
    )
}

export default CreateTournament;
