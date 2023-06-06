import React from "react";
import { motion } from "framer-motion";
import { TbTournament } from "react-icons/tb";
import { item } from "../../utils/animation";

const ListTables = ({ handleFormSelection }) => {
  return (
    <motion.div
      variants={item}
      className="container-option"
      onClick={() => handleFormSelection()}
    >
      <h1>Mostrar Tabla</h1>
      <TbTournament size="60" color="#252525" />
    </motion.div>
  );
};

export default ListTables;
