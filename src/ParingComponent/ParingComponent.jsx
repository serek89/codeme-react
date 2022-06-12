import { useContext } from "react";
import { TournamentContext } from "../TournamentProvider/TournamentProvider";

const ParingComponent = (props) => {
    const tournamentContext = useContext(TournamentContext);
    const playerOne = props.paring.one;
    const playerTwo = props.paring.two;

    const playerOneWin = () => {
        playerOne.wins += 1;
        tournamentContext.setPlayers([...tournamentContext.players, "DUPA"]);
    }

    console.log(tournamentContext.players);


    return (
        <div>
            <button value={ playerOne.id } onClick={ playerOneWin }>{ playerOne.name }</button> 
            vs. 
            <button>{ props.paring.two.name }</button>
        </div>
    );
}

export default ParingComponent;
