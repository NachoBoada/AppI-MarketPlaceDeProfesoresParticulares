import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { clasesMockeadas } from "../data/clasesMockeadas";
import HeaderBasico from "../components/HeaderBasico";

const ClaseContratada = (props) => {
  const [calificacion, setCalificacion] = React.useState(0);
  const clase = props?.elemento?.clase;

  return clase ? (
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
        <Typography paddingLeft={1} paddingRight={1} fontWeight="bold">
          Calificar clase:
        </Typography>
        <Rating
          name="simple-controlled"
          value={calificacion}
          onChange={(event, newValue) => {
            setCalificacion(newValue);
          }}
        />
      </CardActions>
    </Card>
  ) : (
    <Typography variant="h2">NO POSEE CLASES CONTRATADAS</Typography>
  );
};

const ListaDeClasesContratadas = () => {
  return (
    <List
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        position: "relative",
        overflow: "auto",
        "& ul": { padding: 0 },
      }}
    >
      {clasesMockeadas.map((claseYProfesor) => (
        <li key={`section-${claseYProfesor.idClase}`}>
          <ul>
            <ListItem
              divider
              disablePadding
              key={`listitem-${claseYProfesor.idClase}`}
            >
              <ClaseContratada elemento={claseYProfesor} />
            </ListItem>
          </ul>
        </li>
      ))}
    </List>
  );
};

export default function CalificarClases() {
  return (
    <>
      <HeaderBasico titulo="Calificar Clases" />
      <Typography variant="h3" sx={{ mt: 3 }}>
        Clases Contratadas
      </Typography>
      <Divider />
      <ListaDeClasesContratadas />
    </>
  );
}
