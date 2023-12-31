export const typeDefs = `#graphql
 
type Usuario {
    id: ID!
    nombre: String!
    correoElectronico: String!
    coleccionDeComics: [ColeccionDeComics!]!
  }
  
  type Comic {
    id: ID!
    titulo: String!
    descripcion: String!
    formato: String!
  }
  
  type ColeccionDeComics {
    id: ID!
    nombre: String!
    comics: [Comic!]!
  }
  
  type Query {
    ListaUsuarios: [Usuario!]!
    InformacionUsuario(id: ID!): Usuario!
    ListaComics: [Comic!]!
    InformacionComic(id: ID!): Comic!
    ListaColecciones:[ColeccionDeComics!]!
 
  }
  
  type Mutation {
    crearUsuario(nombre: String!, correoElectronico: String!, coleccionDeComics: String): Usuario!
    actualizarUsuario(id: ID!, nombre: String, correoElectronico: String): Usuario!
    eliminarUsuario(id: ID!): Usuario!
    
    crearComic(titulo: String!, descripcion: String!, formato: String!): Comic!
    actualizarComic(id: ID!, titulo: String, descripcion: String, formato: String): Comic!
    eliminarComic(id: ID!): Comic!

    crearColeccionDeComics(nombre: String!, comics: String): ColeccionDeComics!
    

  }
`;