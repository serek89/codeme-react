import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateTournament from "./CreateTournament/CreateTournament";
import TournamentProvider from "./TournamentProvider/TournamentProvider";

function App() {
  return (
    <TournamentProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/create" element={<CreateTournament/>} />
      </Routes>
      </BrowserRouter>
    </TournamentProvider>
  );
}

export default App;
