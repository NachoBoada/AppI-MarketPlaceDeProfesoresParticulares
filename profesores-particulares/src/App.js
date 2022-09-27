import "./App.css";
import * as React from "react";
import SitioInstitucional from "./view/SitioInstitucional";
import SignUp from "./view/SignUp";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div>
          {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Routes>
            <Route path="/" element={<SitioInstitucional />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
