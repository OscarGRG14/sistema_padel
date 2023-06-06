import { motion } from "framer-motion";
import { BsInfoCircle } from "react-icons/bs";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Panel de Administrador</h1>
      <div className="container-hero">
        <BsInfoCircle size="100" color="#252525" />
        <p>
          Aquí puedes registrar jugadores y torneos, ver listas de jugadores y
          torneos, y consultar una tabla de clasificación. ¡Prepárate para
          disfrutar del deporte y llevar un control efectivo de tus competencias
          en un solo lugar!
        </p>
      </div>
    </motion.div>
  );
};

export default Hero;
