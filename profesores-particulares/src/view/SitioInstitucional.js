import * as React from "react";
import Divider from "@mui/material/Divider";
import Header from "../components/Header";
import DescripcionDeLaAplicacion from "../components/DescripcionDeLaAplicacion";
import ListaDeClases from "../components/ListaDeClases";

export default function SitioInstitucional(props) {
  return (
    <>
      <Header propiedades={props} />
      <DescripcionDeLaAplicacion />
      <Divider />
      <ListaDeClases />
    </>
  );
}
