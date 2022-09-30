export const clasesMockeadas = [
  {
    idClase: 1,
    idProfesor: 1,
    clase: {
      nombre: "Introducción a microservicios",
      materia: "Microservicios",
      duracion: "68 hs",
      frecuencia: "Martes y Jueves de 18:30 a 22:30 hs",
      costo: "$18000",
      calificaciones: [3, 5, 1],
      comentarios: ["Buena clase", "Excelente", "Mala clase"],
    },
    profesor: {
      nombre: "Juan Fernandez",
      titulos:
        "Ingeniero Informático de UADE. Certificacion en SQL Oracle. Certificación en AWS Cloud Architect",
      trabajos:
        "Desarrollador en javascript durante 10 años. Arquitecto de microservicios desde el 2011",
    },
  },
  {
    idClase: 2,
    idProfesor: 1,
    clase: {
      nombre: "Microservicios Avanzados",
      materia: "Microservicios",
      duracion: "68 hs",
      frecuencia: "Viernes de 18:30 a 22:30 hs",
      costo: "$20000",
      calificaciones: [2, 4],
      comentarios: ["Maso", "Buena"],
    },
    profesor: {
      nombre: "Juan Fernandez",
      titulos:
        "Ingeniero Informático de UADE. Certificacion en SQL Oracle. Certificación en AWS Cloud Architect",
      trabajos:
        "Desarrollador en javascript durante 10 años. Arquitecto de microservicios desde el 2011",
    },
  },
  {
    idClase: 3,
    idProfesor: 2,
    clase: {
      nombre: "Introducción a Historia",
      materia: "Historia",
      duracion: "68 hs",
      frecuencia: "Martes y Miercoles de 18:30 a 22:30 hs",
      costo: "$1000",
      calificaciones: [2],
      comentarios: ["Floja"],
    },
    profesor: {
      nombre: "Laura Garcia",
      titulos: "Historiadora.",
      trabajos: "Profesora universitaria de historia.",
    },
  },
];
