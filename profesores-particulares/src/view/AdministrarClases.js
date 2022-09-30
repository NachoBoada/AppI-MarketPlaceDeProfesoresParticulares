import * as React from "react";
import Box from "@mui/material/Box";
import HeaderAdministrarClases from "../components/HeaderAdministrarClases";
import ListaParaAdministrarClases from "../components/ListaParaAdministrarClases";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export default function AdministrarClases() {
  return (
    <Box>
      <HeaderAdministrarClases />
      <Typography variant="h3" sx={{ mt: 5 }}>
        Clases
      </Typography>
      <Divider />
      <Box>
        <ListaParaAdministrarClases />
      </Box>
    </Box>
  );
}
