import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function ContratarClase() {
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
  };

  return (
    <ThemeProvider theme={theme}>
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
              id="telefono"
              label="Telefono"
              name="telefono"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="mail"
              label="Mail"
              id="mail"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="horario"
              label="Horario de Referencia"
              id="horario"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="motivo"
              label="Motivo de la contratacion"
              id="motivo"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Enviar contratacion
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
