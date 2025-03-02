import React from 'react';
import CardProyectos from './sub.components/CardProyectos';
import SplitText from './SplitText';
import { museoGif, museoStatic, atencionMedicaGif, atencionMedicaStatic, supertodoGif, supertodoStatic } from '../assets/images';

const proyectos = [
  {
    titulo: 'Super Mercado',
    descripcion: 'Una app para ver, crear o editar productos de un supermercado',
    imagen: supertodoGif,
    imagenStatic: supertodoStatic,
    link: 'https://github.com/FabriiDev/ProyectoSuperMarket',
    programado: 'JAVA'
  },
  {
    titulo: 'Atencion Medica',
    descripcion: 'Un proyecto para que los médicos puedan ver su agenda diaria, atender a los pacientes y ver o crear su respectiva historia clínica',
    imagen: atencionMedicaGif,
    imagenStatic: atencionMedicaStatic,
    link: 'https://github.com/FabriiDev/AtencionMedicaStiegerArias',
    programado: 'PUG, CSS, JavaScript, Node, Bootstrap, otras librerías'
  },
  {
    titulo: 'Museo Metropolitano del Arte',
    descripcion: 'Un sitio consumiendo la API del Museo Metropolitano del Arte de Londres',
    imagen: museoGif,
    imagenStatic: museoStatic,
    link: 'https://github.com/FabriiDev/Arias-Proyecto-Integrador-WebII-node',
    programado: 'HTML, CSS, JavaScript, Node, API, otras librerias'
  },
];

const Proyectos = () => {
  return (
    <div id='projects' className='flex flex-col items-center justify-center mt-20 px-4'>
      <div className='mb-6 p-5 text-center w-full flex justify-center'>
        <SplitText
          text='Proyectos realizados'
          className='text-pink-500 font-bold text-4xl text-shadow-white shadow-proyectos text-center'
          speed={5}
          maxIterations={5}
          animateOn='view'
        />
      </div>
      <section className='flex flex-wrap justify-center gap-8 sm:gap-12 lg:gap-16 p-4 sm:p-6 w-full'>
        {proyectos.map((proyecto, index) => (
          <CardProyectos key={index} {...proyecto} />
        ))}
      </section>
      <p className='text-2xl m-3 text-center'>
        Puedes ver todos mis proyectos{' '}
        <a href='https://github.com/FabriiDev?tab=repositories' target='_blank' className='text-pink-500 underline decoration-1 pb-2 font-semibold'>
          aquí
        </a>
      </p>
    </div>
  );
};

export default Proyectos;