import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { clasesMockeadas } from "../data/clasesMockeadas";
import ElementoParaLista from "./ElementoParaLista";

export default function ListaParaAdministrarClases() {
  return (
    <>
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
                <ElementoParaLista elemento={claseYProfesor} />
              </ListItem>
            </ul>
          </li>
        ))}
      </List>
    </>
  );
}
