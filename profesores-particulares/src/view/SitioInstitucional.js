import * as React from "react";
import Divider from "@mui/material/Divider";
import Header from "../components/Header";
import DescripcionDeLaAplicacion from "../components/DescripcionDeLaAplicacion";
import ListaDeClases from "../components/ListaDeClases";

export default function SitioInstitucional(props) {
  localStorage.setItem("usuario", JSON.stringify({}));
  return (
    <>
      <Header />
      <DescripcionDeLaAplicacion />
      <Divider />
      <ListaDeClases />
    </>
  );
}
