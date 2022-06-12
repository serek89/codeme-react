import { useContext, useEffect, useState } from "react";
import ParingComponent from "../ParingComponent/ParingComponent";
import { TournamentContext } from "../TournamentProvider/TournamentProvider";

const RoundComponent = () => {
    const tournamentContext = useContext(TournamentContext);
    const [paringList, setParinglist] = useState([]);

    useEffect(()=>{
        const players = [...tournamentContext.players];
        while (players.length > 0) {
            let playerOne = players.shift();
            let playerTwo = players.shift();
            setParinglist([...paringList,
                "a"
            ]);
        } 
    }, []);

    console.log(paringList);

    return (
        <div className="box">
            { paringList.map((id, paring) => {return(<>{id}</>)}) }
        </div>
    );

}

export default RoundComponent;
