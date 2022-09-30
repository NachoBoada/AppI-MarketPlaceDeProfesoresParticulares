import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import HeaderBasico from "../components/HeaderBasico";
import { actualizarUsuario, obtenerUsuario } from "../handlers/usuarioHandler";

const theme = createTheme();

export default function CrearClase() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      materia: data.get("materia"),
      nombre: data.get("nombre"),
      duracion: data.get("duracion"),
      frecuencia: data.get("frecuencia"),
      costo: data.get("costo"),
    });

    let usu = obtenerUsuario("usuario");
    let claseAAgregar = {
      materia: data.get("materia"),
      nombre: data.get("nombre"),
      duracion: data.get("duracion"),
      frecuencia: data.get("frecuencia"),
      costo: data.get("costo"),
    };
    console.log("usu", usu);
    if (!usu?.clases) actualizarUsuario("usuario", { clases: [claseAAgregar] });
    else {
      let clasesConClaseAAgregar = usu.clases;
      clasesConClaseAAgregar.push(claseAAgregar);
      actualizarUsuario("usuario", { clases: clasesConClaseAAgregar });
    }
    obtenerUsuario("usuario");
  };

  return (
    <ThemeProvider theme={theme}>
      <HeaderBasico titulo="Crear Clase" />
      <Typography
        variant="h4"
        display="flex"
        justifyContent={"center"}
        margin={3}
      >
        Complete los datos de la Clase que desea agregar
      </Typography>

      <Container maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="materia"
              label="Materia"
              name="materia"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="nombre"
              label="Nombre"
              id="nombre"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="duracion"
              label="Duracion (en horas)"
              id="duracion"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="frecuencia"
              label="Frecuencia"
              id="frecuencia"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="costo"
              label="Costo"
              id="costo"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Crear Clase
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
