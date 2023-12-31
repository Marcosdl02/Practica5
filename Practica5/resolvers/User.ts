import { UsuarioModelType } from "../db/usuario.ts";
import { ColeccionDeComicsModel, ColeccionComicModelType } from "../db/coleccionComics.ts";

export const Usuario = {
  colecciondeComics: async (parent: UsuarioModelType): Promise<ColeccionComicModelType[]> => {
    const coleccion = await ColeccionDeComicsModel.find({ _id: parent._id });
    return coleccion;
  },
};