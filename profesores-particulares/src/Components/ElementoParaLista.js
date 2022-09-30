import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ElementoParaLista(props) {
  const clase = props?.elemento?.clase;
  return (
    <>
      {clase ? (
        <Card sx={{ minWidth: 275 }} elevation={0}>
          <CardContent>
            <Typography variant="h5" fontWeight={"bold"}>
              {clase.materia} - {clase.nombre}
            </Typography>
            <Typography>{clase.frecuencia}</Typography>
            <Typography color="text.secondary">
              Duración de la cursada: {clase.duracion}
            </Typography>
            <Typography>Precio: {clase.costo}</Typography>
          </CardContent>

          <CardActions>
            <Button size="small">Modificar</Button>
            <Button size="small">Publicar</Button>
            <Button size="small">Despublicar</Button>
            <Button size="small">Eliminar</Button>
          </CardActions>
        </Card>
      ) : (
        <Typography variant="h2">NO POSEE CLASES CARGADAS</Typography>
      )}
    </>
  );
}
