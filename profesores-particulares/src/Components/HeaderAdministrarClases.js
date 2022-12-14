import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import SchoolIcon from "@mui/icons-material/School";

export default function HeaderAdministrarClases() {
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
            Administrar Clases
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
                href={"/crear-clase"}
              >
                Crear Clase
              </Button>
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
