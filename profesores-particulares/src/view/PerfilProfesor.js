import * as React from "react";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import SchoolIcon from "@mui/icons-material/School";
import ListaParaAdministrarClases from "../components/ListaParaAdministrarClases";
import { Divider } from "@mui/material";

const profesor = {
  nombre: "Juan Fernandez",
  titulos:
    "Ingeniero Informático de UADE. Certificacion en SQL Oracle. Certificación en AWS Cloud Architect",
  trabajos:
    "Desarrollador en javascript durante 10 años. Arquitecto de microservicios desde el 2011",
};

const HeaderConBoton = (props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            href={"/"}
          >
            <SchoolIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {props.titulo}
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Stack spacing={2} direction="row">
              <Button
                size="large"
                edge="end"
                aria-label="account of current user"
                color="inherit"
                variant="outlined"
                href={"/administrar-clases"}
              >
                Administrar Clases
              </Button>
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

/*
{
  console.log(
    "obtenerUsuario(usuario).tipoDeUsuario: ",
    obtenerUsuario("usuario")?.tipoDeUsuario
  ) ||
    (obtenerUsuario("usuario")?.tipoDeUsuario === "Profesor" && (
      <Button
        size="large"
        edge="end"
        aria-label="account of current user"
        color="inherit"
        variant="outlined"
        href={"/administrar-clases"}
      >
        Administrar Clases
      </Button>
    )) ||
    (obtenerUsuario("usuario")?.tipoDeUsuario === "Alumno" && (
      <Button
        size="large"
        edge="end"
        aria-label="account of current user"
        color="inherit"
        variant="outlined"
        href={"/calificar-clases"}
      >
        Calificar Clases
      </Button>
    ));
}*/

export default function PerfilProfesor(props) {
  return (
    <>
      <HeaderConBoton titulo={"Perfil Profesor"} />
      <Typography variant="h2" sx={{ m: 2 }}>
        {profesor.nombre}
      </Typography>
      <Typography variant="h4" sx={{ m: 2 }}>
        Titulos
      </Typography>
      <Typography variant="h5" sx={{ m: 2, pl: 10 }}>
        {profesor.titulos}
      </Typography>
      <Typography variant="h4" sx={{ m: 2, pt: 10 }}>
        Trabajos
      </Typography>
      <Typography variant="h5" sx={{ m: 2, pl: 10 }}>
        {profesor.trabajos}
      </Typography>
      <Divider />
      <ListaParaAdministrarClases />
    </>
  );
}
