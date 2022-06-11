import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TournamentContext } from "../../TournamentProvider/TournamentProvider";

const TournamentControler = () => {
  const tournamentContext = useContext(TournamentContext);
  const navigate = useNavigate();

  const saveName = (e) => {
    tournamentContext.setName(e.target.value);
  };

  const startTournament = () => {
    tournamentContext.isStarted = true;
    navigate('/ongoing');
  };

  return (
    <div className="box">
      <input
        type="text"
        id="tournamentName"
        placeholder="Nazwa turnieju"
        onChange={saveName}
      />
      <button onClick={startTournament}>Start</button>
    </div>
  );
};

export default TournamentControler;
