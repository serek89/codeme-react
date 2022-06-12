import { useContext, useEffect, useState } from "react";
import ParingComponent from "../ParingComponent/ParingComponent";
import { TournamentContext } from "../TournamentProvider/TournamentProvider";

const RoundComponent = () => {
    const tournamentContext = useContext(TournamentContext);
    const players = [...tournamentContext.players];
    // const [paringList, setParinglist] = useState([]);

    // useEffect(()=>{
    //     while (players.length > 0) {
    //         let playerOne = players.shift();
    //         let playerTwo = players.shift();
    //         console.log("One:", playerOne);
    //         console.log("Two:", playerTwo);
    //         setParinglist([...paringList, {one: playerOne, two: playerTwo}]);
    //     } 
    // }, []);

    return (
        <div className="box">
            <ParingComponent paring={  {one: players[0], two: players[1]} } />
            <ParingComponent paring={  {one: players[2], two: players[3]} } />
        </div>
    );

}

export default RoundComponent;
