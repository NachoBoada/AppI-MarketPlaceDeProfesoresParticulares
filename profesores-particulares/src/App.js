import "./App.css";
import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SitioInstitucional from "./view/SitioInstitucional";
import Registrarse from "./view/Registrarse";
import RegistrarProfesor from "./view/RegistrarProfesor";
import RegistrarAlumno from "./view/RegistrarAlumno";
import Ingresar from "./view/Ingresar";
import AdministrarClases from "./view/AdministrarClases";
import CrearClase from "./view/CrearClase";
import CalificarClases from "./view/CalificarClases";

function App() {
  return (
    <>
      <Router>
        <div>
          {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Routes>
            <Route path="/" element={<SitioInstitucional />} />
            <Route path="/registrarse" element={<Registrarse />} />
            <Route path="/registrar-profesor" element={<RegistrarProfesor />} />
            <Route path="/registrar-alumno" element={<RegistrarAlumno />} />
            <Route path="/ingresar" element={<Ingresar />} />
            <Route path="/administrar-clases" element={<AdministrarClases />} />
            <Route path="/crear-clase" element={<CrearClase />} />
            <Route path="/calificar-clases" element={<CalificarClases />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default App;
