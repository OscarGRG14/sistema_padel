import "./App.css";
import Hero from "./components/Hero";
import Table from "./components/Table";
import PlayersList from "./components/PlayersList";
import ListTables from "./components/menu/ListTables";
import ListPlayers from "./components/menu/ListPlayers";
import TournamentList from "./components/TournamentList";
import CreatePlayers from "./components/menu/CreatePlayers";
import CreatePlayerForm from "./components/CreatePlayerForm";
import ListTournament from "./components/menu/ListTournament";
import CreateTournament from "./components/menu/CreateTournament";
import CreateTournamentForm from "./components/CreateTournamentForm";
import { motion } from "framer-motion";
import { useState } from "react";
import { container, item } from "./utils/animation";

function App() {
  const [formType, setFormType] = useState(null);

  const handleFormSelection = (type) => {
    setFormType(type);
  };

  const renderForm = () => {
    switch (formType) {
      case "createPlayers":
        return <CreatePlayerForm />;
      case "createTournament":
        return <CreateTournamentForm />;
      case "listPlayers":
        return <PlayersList />;
      case "listTournament":
        return <TournamentList />;
      case "listTable":
        return <Table />;
      default:
        return null;
    }
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="main"
    >
      <Hero />
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="container-menu"
      >
        <CreatePlayers
          handleFormSelection={() => handleFormSelection("createPlayers")}
        />
        <CreateTournament
          handleFormSelection={() => handleFormSelection("createTournament")}
        />
        <ListPlayers
          handleFormSelection={() => handleFormSelection("listPlayers")}
        />
        <ListTournament
          handleFormSelection={() => handleFormSelection("listTournament")}
        />
        <ListTables
          handleFormSelection={() => handleFormSelection("listTable")}
        />
      </motion.div>
      {renderForm()}
    </motion.main>
  );
}

export default App;
