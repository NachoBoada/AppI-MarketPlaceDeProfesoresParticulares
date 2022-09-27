import * as React from "react";
import Header from "../components/Header";
import DescripcionDeLaAplicacion from "../components/DescripcionDeLaAplicacion";
import Divider from "@mui/material/Divider";

export default function SitioInstitucional() {
  return (
    <>
      <Header />
      <DescripcionDeLaAplicacion />
      <Divider />
    </>
  );
}
