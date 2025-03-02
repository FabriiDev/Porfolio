import React from "react";

const CardProyectos = ({ titulo, descripcion, imagen, link, programado, imagenStatic }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" title="Ver proyecto">
      <div className="bg-gray-800 text-white rounded-2xl shadow-lg overflow-hidden w-full sm:w-80 md:w-96 lg:w-100 transition-transform transform hover:scale-105 card-proyectos relative">
        <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden">
          <img
            src={imagenStatic}
            alt={titulo}
            className="w-full h-full object-cover static-image"
          />
          <img
            src={imagen}
            alt={titulo}
            className="w-full h-full object-cover gif-image"
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold">{titulo}</h3>
          <p className="text-gray-400 mt-2">{descripcion}</p>
          <p className="text-pink-500 mt-2 font-bold">
            Hecho con: <span className="text-gray-400 font-medium">{programado}</span>
          </p>
        </div>
      </div>
    </a>
  );
};

export default CardProyectos;
