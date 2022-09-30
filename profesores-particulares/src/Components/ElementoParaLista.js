import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
//import { clasesMockeadas } from "../data/clasesMockeadas";

const ComentarioDeClase = (props) => {
  const [abrirMotivoDeBloqueo, setabrirMotivoDeBloqueo] = React.useState(false);

  const comentario = props?.elemento;
  const indice = props?.indice;

  return (
    <Card sx={{ minWidth: 400 }}>
      <CardContent>
        <Typography variant="h6" paddingTop={1}>
          {`Comentario ${indice + 1}`}
        </Typography>
        <Typography variant="body1" paddingTop={1}>
          {comentario}
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small" onClick={() => setabrirMotivoDeBloqueo(true)}>
          Bloquear
        </Button>
        <Dialog
          open={abrirMotivoDeBloqueo}
          onClose={() => setabrirMotivoDeBloqueo(false)}
          scroll={"paper"}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <DialogContent>
            <Box>
              <TextField
                required
                fullWidth
                multiline
                maxRows={4}
                id="motivoDeBloqueo"
                label="Motivo de bloqueo"
                name="motivoDeBloqueo"
              />
              <Button
                size="small"
                sx={{ pt: 1 }}
                onClick={() => setabrirMotivoDeBloqueo(false)}
              >
                Notificar alumno
              </Button>
            </Box>
          </DialogContent>
        </Dialog>

        <Button
          size="small"
          onClick={() => alert(`Comentario "${comentario}" Publicado`)}
        >
          Publicar
        </Button>
      </CardActions>
    </Card>
  );
};

const ListaDeComentarios = (props) => {
  const comentarios = props.elemento;
  const setOpen = props.setOpen;
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
      {comentarios.map((comentario, index) => (
        <li key={`section-${comentario}${index}`}>
          <ul>
            <ListItem
              divider
              disablePadding
              key={`listitem-${comentario}${index}`}
            >
              <ComentarioDeClase
                elemento={comentario}
                indice={index}
                setOpen={setOpen}
              />
            </ListItem>
          </ul>
        </li>
      ))}
    </List>
  );
};

export default function ElementoParaLista(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            <Button size="small" onClick={handleOpen}>
              Comentarios
            </Button>
            <Dialog
              open={open}
              onClose={handleClose}
              scroll={"paper"}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <DialogContent>
                <Box>
                  <ListaDeComentarios
                    elemento={clase.comentarios}
                    setOpen={setOpen}
                  />
                </Box>
              </DialogContent>
            </Dialog>

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
