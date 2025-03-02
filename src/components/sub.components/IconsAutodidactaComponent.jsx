import React from 'react'
import { tailwindIcon, reactIcon, boostrapIcon } from '../../assets/images'
import { motion } from "framer-motion";

function IconsAutodidactaComponent() {
return (
    <div className="flex justify-center gap-10">
        <motion.img
            src={reactIcon}
            alt="React"
            width="42px"
            height="42px"
            style={{ filter: "drop-shadow(0 0 0px #61DAFB)" }}
            whileHover={{ filter: "drop-shadow(0 0 10px #61DAFB)", scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="cursor-pointer"
            title="React"
        />

        <motion.img
            src={boostrapIcon}
            alt="Bootstrap"
            width="42px"
            height="42px"
            style={{ filter: "drop-shadow(0 0 0px #7952B3)" }}
            whileHover={{ filter: "drop-shadow(0 0 10px #7952B3)", scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="cursor-pointer"
            title="Bootstrap"
        />

        <motion.img
            src={tailwindIcon}
            alt="Tailwind CSS"
            width="42px"
            height="42px"
            style={{ filter: "drop-shadow(0 0 0px #38B2AC)" }}
            whileHover={{ filter: "drop-shadow(0 0 10px #38B2AC)", scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="cursor-pointer"
            title="Tailwind CSS"
        />
        
    </div>
)
}

export default IconsAutodidactaComponent