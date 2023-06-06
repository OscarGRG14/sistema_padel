import React from "react";
import { motion } from "framer-motion";
import { MdOutlineEmojiPeople } from "react-icons/md";
import { item } from "../../utils/animation";

const CreatePlayers = ({ handleFormSelection }) => {
  return (
    <motion.div
      variants={item}
      className="container-option"
      onClick={() => handleFormSelection()}
    >
      <h1>Registrar Jugador</h1>
      <MdOutlineEmojiPeople size="60" color="#252525" />
    </motion.div>
  );
};

export default CreatePlayers;
