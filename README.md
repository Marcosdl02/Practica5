Uso
La API cuenta con las siguientes funcionalidades:

Usuarios
Crear un nuevo usuario
Obtener información de un usuario por su ID
Obtener una lista de todos los usuarios
Actualizar información de un usuario existente
Eliminar un usuario

Cómics
Crear un nuevo cómic
Obtener información de un cómic por su ID
Obtener una lista de todos los cómics
Actualizar información de un cómic existente
Eliminar un cómic


Ejemplos de consultas GraphQL

A continuación se presentan algunos ejemplos de consultas GraphQL para utilizar con la API:

¡
# Crear un nuevo usuario
mutation {
  crearUsuario(nombre: "Nombre", correoElectronico: "correo@example.com") {
    id
    nombre
    correoElectronico
  }
}

# Obtener todos los usuarios
query {
  ListaUsuarios {
    id
    nombre
    correoElectronico
  }
}

# Crear un nuevo cómic
mutation {
  crearComic(titulo: "Título del cómic", descripcion: "Descripción...", formato: "Formato") {
    id
    titulo
    descripcion
    formato
  }
}

# Obtener información de un cómic por su ID
query {
  InformacionComic(id: "ID_DEL_COMIC") {
    id
    titulo
    descripcion
    formato
  }
}
