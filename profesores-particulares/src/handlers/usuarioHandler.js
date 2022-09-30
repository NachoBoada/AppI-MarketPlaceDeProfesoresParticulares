export const crearUsuario = (claveUsuarioNuevo) => {
  if (obtenerUsuario(claveUsuarioNuevo)) {
    console.log(
      `El usuario ${claveUsuarioNuevo} YA EXISTE y tiene el valor ${obtenerUsuario(
        claveUsuarioNuevo
      )}`
    );
    return;
  }
  const usuarioNuevo = {};
  localStorage.setItem(
    claveUsuarioNuevo.toString(),
    JSON.stringify(usuarioNuevo)
  );
  console.log(
    `usuario ${claveUsuarioNuevo} CREADO: `,
    JSON.parse(localStorage.getItem(claveUsuarioNuevo.toString()))
  );
};

export const obtenerUsuario = (claveUsuario) => {
  console.log(
    `usuario ${claveUsuario}: `,
    JSON.parse(localStorage.getItem(claveUsuario.toString()))
  );
  return JSON.parse(localStorage.getItem(claveUsuario.toString()));
};

export const actualizarUsuario = (
  claveUsuario,
  nuevasPropiedadesDelUsuario
) => {
  console.log(
    "usuario Antes: ",
    JSON.parse(localStorage.getItem(claveUsuario))
  );
  const usuarioAnterior = JSON.parse(localStorage.getItem(claveUsuario));
  const usuarioActualizado = {
    ...usuarioAnterior,
    ...nuevasPropiedadesDelUsuario,
  };
  localStorage.setItem(claveUsuario, JSON.stringify(usuarioActualizado));
  console.log(
    "usuario Despues: ",
    JSON.parse(localStorage.getItem(claveUsuario))
  );
};

export const eliminarUsuario = (claveUsuarioNuevo) => {
  localStorage.removeItem(claveUsuarioNuevo.toString());
  console.log(
    `usuario ${claveUsuario} ELIMINADO: `,
    JSON.parse(localStorage.getItem(claveUsuarioNuevo.toString()))
  );
};
