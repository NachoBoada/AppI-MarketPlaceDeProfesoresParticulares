import "./App.css";
import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SitioInstitucional from "./view/SitioInstitucional";
import Registrarse from "./view/Registrarse";
import RegistrarProfesor from "./view/RegistrarProfesor";
import RegistrarAlumno from "./view/RegistrarAlumno";
import Ingresar from "./view/Ingresar";
import RegistrarClase from "./view/RegistrarClase";

function App() {
  const [usuario, setUsuario] = React.useState({});

  return (
    <>
      <Router>
        <div>
          {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Routes>
            <Route
              path="/"
              element={
                <SitioInstitucional propiedades={{ usuario, setUsuario }} />
              }
            />
            <Route
              path="/registrarse"
              element={<Registrarse propiedades={{ usuario, setUsuario }} />}
            />
            <Route
              path="/registrar-profesor"
              element={
                <RegistrarProfesor propiedades={{ usuario, setUsuario }} />
              }
            />
            <Route
              path="/registrar-alumno"
              element={
                <RegistrarAlumno propiedades={{ usuario, setUsuario }} />
              }
            />
            <Route
              path="/ingresar"
              element={<Ingresar propiedades={{ usuario, setUsuario }} />}
            />
            <Route
              path="/registrar-clase"
              element={<RegistrarClase propiedades={{ usuario, setUsuario }} />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default App;
