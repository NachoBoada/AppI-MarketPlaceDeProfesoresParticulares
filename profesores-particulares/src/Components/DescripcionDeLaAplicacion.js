import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export default function DescripcionDeLaAplicacion() {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Typography variant="h3" gutterBottom align="center">
          Encontrá los mejores Profesores Particulares!
        </Typography>
        <Divider />
        <Typography variant="h5">Funcionalidades disponibles</Typography>
        <ul>
          <li>Registrarse como alumno</li>
          <li>Registrarse como profesor</li>
          <li>
            Buscar la clase que querés filtrando por materia, tipo de clase,
            frecuencia o calificación
          </li>
          <li>Los profesores pueden registrar clases</li>
          <li>Los alumnos pueden contratar clases</li>
          <li>Los alumnos pueden calificar las clases que hayan contratado</li>
          <li>Los alumnos pueden comentar las clases que hayan contratado</li>
          <li>
            Los profesores pueden bloquear los comentarios antes de que sean
            publicados
          </li>
        </ul>
      </Box>
    </>
  );
}
