import * as React from "react";
import Divider from "@mui/material/Divider";
import Header from "../components/Header";
import DescripcionDeLaAplicacion from "../components/DescripcionDeLaAplicacion";
import ListaDeClasesParaContratar from "../components/ListaDeClasesParaContratar";

export default function SitioInstitucional(props) {
  return (
    <>
      <Header />
      <DescripcionDeLaAplicacion />
      <Divider />
      <ListaDeClasesParaContratar />
    </>
  );
}
