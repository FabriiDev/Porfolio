import React from "react";
import IconsUniversidadComponent from "./sub.components/IconsUniversidadComponent";
import IconsAutodidactaComponent from "./sub.components/IconsAutodidactaComponent"

function SegundaSec() {
  return (
    <div className="mt-9 m-auto w-11/12 lg:w-3/4">
      <div className="text-lg md:text-xl mb-7 text-center">
        <p>
          Soy Fabrizio, un apasionado por la programación y el desarrollo de
          software. Me encanta aprender nuevas tecnologías y crear proyectos
          tanto en frontend como en backend. Siempre busco mejorar mis
          habilidades y explorar nuevas herramientas para seguir creciendo como
          desarrollador.
        </p>
      </div>
      <div>
        <div className="gap-2 text-center">
          <p className="text-lg md:text-xl mb-5">
            Actualmente soy estudiante de la tecnicatura de Desarrollo de
            Software en la
            <a href="https://www.ulp.edu.ar/" target="_blank" className="text-pink-500 font-semibold"> ULP</a>
          </p>
          <p className="text-lg md:text-xl mb-5">
            Donde he adquirido conocimientos en:
          </p>
          <IconsUniversidadComponent />
          <p className="text-lg md:text-xl mt-5 mb-5">
            De manera autodidacta he aprendido lo siguiente:
          </p>
          <IconsAutodidactaComponent />
        </div>
      </div>
    </div>
  );
}

export default SegundaSec;
