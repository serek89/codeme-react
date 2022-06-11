import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { TournamentContext } from "../TournamentProvider/TournamentProvider"

const IndexComponent = () => {
    const tournamentContext = useContext(TournamentContext);
    let navigate = useNavigate();

    useEffect(() => {
        tournamentContext.isStarted
        ?  navigate('/ongoing')
        :  navigate('/create');
    });
}

export default IndexComponent;