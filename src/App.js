import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateTournament from "./CreateTournament/CreateTournament";
import IndexComponent from "./IndexComponent/IndexComponent";
import OngoingTournament from "./OngoingTournament/OngoingTournament";
import TournamentProvider from "./TournamentProvider/TournamentProvider";

function App() {
  return (
    <TournamentProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={ <IndexComponent/> } />
          <Route path="/create" element={ <CreateTournament/> } />
          <Route path="/ongoing" element={ <OngoingTournament/> } />
        </Routes>
      </BrowserRouter>
    </TournamentProvider>
  );
}

export default App;
