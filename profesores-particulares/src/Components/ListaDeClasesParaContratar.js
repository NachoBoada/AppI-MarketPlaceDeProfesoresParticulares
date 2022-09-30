import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
//import clasesMockeadas from "../data/clasesMockeadas";

const clases = {
  prof1: {
    nombre: "Juan Fernandez",
    experiencia: {
      titulos:
        "Ingeniero Informático de UADE. Certificacion en SQL Oracle. Certificación en AWS Cloud Architect",
      trabajos:
        "Desarrollador en javascript durante 10 años. Arquitecto de microservicios desde el 2011",
    },
    clase: "Introducción a microservicios",
    duracion: "68 hs",
    frecuencia: "Martes y Jueves de 18:30 a 22:30 hs",
    costo: "$18000",
    calificacion: ["***"],
    comentarios: ["Muy bunea clase"],
  },
};

export default function ListaDeClasesParaContratar(props) {
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      <ListItem alignItems="flex-start">
        <Card elevation={0}>
          <React.Fragment>
            <CardContent>
              <Typography gutterBottom variant="h5">
                {clases.prof1.nombre} - {clases.prof1.clase}
              </Typography>
              <Typography variant="body2">
                <b>Duracion:</b> {clases.prof1.duracion}
              </Typography>
              <Typography variant="body2">
                <b>Frecuencia:</b> {clases.prof1.frecuencia}
              </Typography>
              <Typography variant="body2">
                <b>Precio:</b> {clases.prof1.costo}
              </Typography>
              <Typography variant="body2">
                <i>Experiencia:</i> {clases.prof1.experiencia.trabajos}
              </Typography>
              <Typography variant="body2">
                <i>Educación:</i> {clases.prof1.experiencia.titulos}
              </Typography>
              <Typography variant="body2">
                {clases.prof1.calificacion}
              </Typography>
              <Typography variant="body2">
                {clases.prof1.comentarios}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Contratar</Button>
            </CardActions>
          </React.Fragment>
        </Card>
      </ListItem>
      <Divider />
      <ListItem alignItems="flex-start">
        <Card elevation={0}>
          <React.Fragment>
            <CardContent>
              <Typography gutterBottom variant="h5">
                {clases.prof1.nombre} - {clases.prof1.clase}
              </Typography>
              <Typography variant="body2">
                <b>Duracion:</b> {clases.prof1.duracion}
              </Typography>
              <Typography variant="body2">
                <b>Frecuencia:</b> {clases.prof1.frecuencia}
              </Typography>
              <Typography variant="body2">
                <b>Precio:</b> {clases.prof1.costo}
              </Typography>
              <Typography variant="body2">
                <i>Experiencia:</i> {clases.prof1.experiencia.trabajos}
              </Typography>
              <Typography variant="body2">
                <i>Educación:</i> {clases.prof1.experiencia.titulos}
              </Typography>
              <Typography variant="body2">
                {clases.prof1.calificacion}
              </Typography>
              <Typography variant="body2">
                {clases.prof1.comentarios}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Contratar</Button>
            </CardActions>
          </React.Fragment>
        </Card>
      </ListItem>
      <Divider />
    </List>
  );
}
