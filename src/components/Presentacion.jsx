import React from "react";
import { motion } from "framer-motion";
import CodeTypingBro from "../assets/images/Code-typing-bro.png";
import ShinyText from './ShinyText';

function Presentacion() {
  return (
    <div id="about" className="mt-5 flex flex-col md:flex-row items-center justify-center gap-10 px-4 md:px-0">
      <div className="text-center md:text-left">
        <ShinyText text="¡Hola! Soy Fabrizio," className="font-bold text-2xl md:text-4xl mb-3 revealed text-white" speed={3} />
        <br />
        <ShinyText text="Full Stack Developer en crecimiento." className="text-xl md:text-2xl" speed={3} />
        <br />
        <ShinyText text="Transformo ideas en código." className="text-xl md:text-2xl" speed={3} />
      </div>
      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={CodeTypingBro}
          alt="Code Typing"
          className="w-64 h-64 md:w-96 md:h-96 rounded-lg"
          style={{
            filter: "drop-shadow(5px 5px 7px white)"
          }}
        />
      </motion.div>
    </div>
  );
}

export default Presentacion;
