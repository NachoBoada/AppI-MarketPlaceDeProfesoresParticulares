import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SchoolIcon from "@mui/icons-material/School";
import MoreIcon from "@mui/icons-material/MoreVert";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function Header(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <SchoolIcon
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Profesores Particulares
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Stack spacing={2} direction="row">
              {props?.propiedades?.usuario?.tipoDeUsuario === "Profesor" ? (
                <Button
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  color="inherit"
                  variant="outlined"
                  href={"/registrar-clase"}
                >
                  Registrar Clase
                </Button>
              ) : null}
              <Button
                size="large"
                edge="end"
                aria-label="account of current user"
                color="inherit"
                variant="outlined"
                href={"/ingresar"}
              >
                Ingresar
              </Button>
              <Button
                size="large"
                edge="end"
                aria-label="account of current user"
                color="inherit"
                variant="outlined"
                href={"/registrarse"}
              >
                Registrarse
              </Button>
            </Stack>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
