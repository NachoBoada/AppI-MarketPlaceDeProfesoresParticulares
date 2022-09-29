export default function actualizarUsuario(nuevasPropiedadesDelUsuario) {
  console.log("usuario Antes: ", JSON.parse(localStorage.getItem("usuario")));
  const usuarioAnterior = JSON.parse(localStorage.getItem("usuario"));
  const usuarioActualizado = {
    ...usuarioAnterior,
    ...nuevasPropiedadesDelUsuario,
  };
  localStorage.setItem("usuario", JSON.stringify(usuarioActualizado));
  console.log("usuario Despues: ", JSON.parse(localStorage.getItem("usuario")));
}
