import { useContext } from "react";
import PlayerComponent from "../PlayerComponent/PlayerComponent";
import RoundComponent from "../RoundComponent/RoundComponent";
import { TournamentContext } from "../TournamentProvider/TournamentProvider";


const OngoingTournament = () => {
    const tournamentContext = useContext(TournamentContext);

  return (
    <>
    <div className="box">
        <h1>{ tournamentContext.name }</h1>
    </div>
    <RoundComponent/>
    <PlayerComponent/>
    </>
  );
};

export default OngoingTournament;
