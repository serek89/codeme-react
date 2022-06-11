import { useContext } from "react";
import { TournamentContext } from "../TournamentProvider/TournamentProvider";

const OngoingTournament = () => {
    const tournamentContext = useContext(TournamentContext);

  return (
    <div className="box">
        <h1>{ tournamentContext.name }</h1>
    </div>
    
    
  );
};

export default OngoingTournament;
