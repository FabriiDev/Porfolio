import "./App.css";
import Fondo from "./components/Fondo";
import NavBar from "./components/Navbar";
import Presentacion from "./components/Presentacion";
import SegundaSec from "./components/SegundaSec";
import Proyectos from "./components/Proyectos";
import Contacto from "./components/Contacto";

function App() {
  return (
    <Fondo>
      <NavBar />
      <div id="about" className="mt-20">
        <Presentacion />
      </div>
      <SegundaSec />
      <div id="projects">
        
        <Proyectos />
      </div>
      <div id="contact">
        <Contacto />
      </div>
    </Fondo>
  );
}

export default App;
