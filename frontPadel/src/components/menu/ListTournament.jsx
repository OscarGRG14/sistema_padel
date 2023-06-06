import React from "react";
import { motion } from "framer-motion";
import { RiFileList2Line } from "react-icons/ri";
import { item } from "../../utils/animation";

const ListTournament = ({ handleFormSelection }) => {
  return (
    <motion.div
      variants={item}
      className="container-option"
      onClick={() => handleFormSelection()}
    >
      <h1>Lista de Torneos</h1>
      <RiFileList2Line size="60" color="#252525" />
    </motion.div>
  );
};

export default ListTournament;
