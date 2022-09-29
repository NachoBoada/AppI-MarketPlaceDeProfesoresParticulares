import * as React from "react";
import Box from "@mui/material/Box";
import HeaderAdministrarClases from "../components/HeaderAdministrarClases";
import ListaParaAdministrarClases from "../components/ListaParaAdministrarClases";

export default function AdministrarClases() {
  return (
    <Box>
      <HeaderAdministrarClases />
      <ListaParaAdministrarClases />
    </Box>
  );
}
