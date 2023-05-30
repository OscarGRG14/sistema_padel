import CreatePlayerForm from './components/CreatePlayerForm';
import PlayerList from './components/PlayersList';
import CreateTournament from './components/CreateTournament';
import TournamentList from './components/TournamentList';
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Panel de Administrador</h1>
      <CreatePlayerForm />
      <CreateTournament />
      <PlayerList/>
      <TournamentList />
    </div>
  );
}

export default App;
