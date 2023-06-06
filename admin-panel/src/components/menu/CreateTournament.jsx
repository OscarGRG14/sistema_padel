import React from "react";
import { motion } from "framer-motion";
import { TfiCup } from "react-icons/tfi";
import { item } from "../../utils/animation";

const CreateTournament = ({ handleFormSelection }) => {
  return (
    <motion.div
      variants={item}
      className="container-option"
      onClick={() => handleFormSelection()}
    >
      <h1>Registrar Torneo</h1>
      <TfiCup size="50" color="#252525" />
    </motion.div>
  );
};

export default CreateTournament;
