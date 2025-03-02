import React from 'react';
import { jsIcon, nodeJsIcon, javaIcon, css3Icon, html5Icon, mySqlIcon } from "../../assets/images";
import { motion } from "framer-motion";

function IconsUniversidadComponent() {
  return (
    <div className="flex flex-wrap justify-center gap-6 md:gap-10">
      <motion.img
        src={html5Icon}
        alt="HTML5"
        width="42px"
        height="42px"
        style={{ filter: "drop-shadow(0 0 0px pink)" }}
        whileHover={{ filter: "drop-shadow(0 0 10px rgba(227, 79, 38, 0.7))", scale: 1.1 }}
        transition={{ duration: 0.3 }}
        className="cursor-pointer"
        title="HTML5"
      />
      <motion.img
        src={css3Icon}
        alt="CSS3"
        width="42px"
        height="42px"
        style={{ filter: "drop-shadow(0 0 0px pink)" }}
        whileHover={{ filter: "drop-shadow(0 0 10px rgba(38, 77, 228, 0.7))", scale: 1.1 }}
        transition={{ duration: 0.3 }}
        className="cursor-pointer"
        title="CSS3"
      />
      <motion.img
        src={jsIcon}
        alt="JavaScript"
        width="42px"
        height="42px"
        style={{ filter: "drop-shadow(0 0 0px pink)" }}
        whileHover={{ filter: "drop-shadow(0 0 10px rgba(247, 223, 30, 0.7))", scale: 1.1 }}
        transition={{ duration: 0.3 }}
        className="cursor-pointer"
        title="JavaScript"
      />
      <motion.img
        src={nodeJsIcon}
        alt="Node.js"
        width="42px"
        height="42px"
        style={{ filter: "drop-shadow(0 0 0px pink)" }}
        whileHover={{ filter: "drop-shadow(0 0 10px rgba(102, 159, 102, 0.7))", scale: 1.1 }}
        transition={{ duration: 0.3 }}
        className="cursor-pointer"
        title="Node.js"
      />
      <motion.img
        src={javaIcon}
        alt="Java"
        width="42px"
        height="42px"
        style={{ filter: "drop-shadow(0 0 0px pink)" }}
        whileHover={{ filter: "drop-shadow(0 0 10px rgba(176, 114, 25, 0.7))", scale: 1.1 }}
        transition={{ duration: 0.3 }}
        className="cursor-pointer"
        title="Java"
      />
      <motion.img
        src={mySqlIcon}
        alt="MySQL"
        width="42px"
        height="42px"
        style={{ filter: "drop-shadow(0 0 0px pink)" }}
        whileHover={{ filter: "drop-shadow(0 0 10px rgba(0, 123, 255, 0.7))", scale: 1.1 }}
        transition={{ duration: 0.3 }}
        className="cursor-pointer"
        title="MySQL"
      />
    </div>
  );
}

export default IconsUniversidadComponent;
