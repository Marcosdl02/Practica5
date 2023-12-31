export type Usuario = {
    id: string;
    nombre: string;
    correoElectronico: string;
    coleccionDeComics: ColeccionDeComics[];
  }
  
  // Definición del tipo Comic
export type Comic = {
    id: string;
    titulo: string;
    descripcion: string;
    formato: string;
  }
  
  // Definición del tipo ColeccionDeComics
export type ColeccionDeComics = {
    id: string;
    nombre: string;
    comics: Comic[];
  }