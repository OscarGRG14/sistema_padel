import React from "react";
import { motion } from "framer-motion";
import { item } from "../../utils/animation";
import { LuClipboardList } from "react-icons/lu";

const ListPlayers = ({ handleFormSelection }) => {
  return (
    <motion.div
      variants={item}
      className="container-option"
      onClick={() => handleFormSelection()}
    >
      <h1>Lista De Jugadores</h1>
      <LuClipboardList size="60" color="#252525" />
    </motion.div>
  );
};

export default ListPlayers;
