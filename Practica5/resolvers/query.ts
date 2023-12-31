import { GraphQLError } from "npm:graphql@^16.8.1";
import { UsuarioModel, UsuarioModelType } from "../db/usuario.ts";
import { ComicModel,ComicModelType } from "../db/comic.ts";
import { ColeccionDeComicsModel, ColeccionComicModelType } from "../db/coleccionComics.ts";

export const Query = {
  
    InformacionUsuario: async (
        _: unknown,
        args: { id: string }
      ): Promise<UsuarioModelType> => {
        const usuario = await UsuarioModel.findById(args.id);
        if (!usuario) {
          throw new GraphQLError(`No se ha encontrado usuario con id ${args.id}`, {
            extensions: { code: "NOT_FOUND" },
          });
        }
        return usuario;
      },

    ListaUsuarios: async (): Promise<UsuarioModelType[]> => {
        const usuarios = await UsuarioModel.find().exec();
        return usuarios;
      },

    InformacionComic: async (
        _: unknown,
        args: { id: string }
      ): Promise<ComicModelType> => {
        try {
          const comic = await ComicModel.findById(args.id);
          if (!comic) {
            throw new Error(`No se ha encontrado un cómic con ID ${args.id}`);
          }
          return comic;
        } catch (error) {
          throw new Error('Error al obtener la información del cómic: ' + error);
        }
      },

    ListaComics: async (): Promise<ComicModelType[]> => {
        try {
          const comics = await ComicModel.find().exec();
          return comics;
        } catch (error) {
          throw new Error('Error al obtener la lista de cómics: ' + error);
        }
      },

    ListaColecciones: async (): Promise<ColeccionComicModelType[]> => {
        try {
          const colecciones = await ColeccionDeComicsModel.find().exec();
          return colecciones;
        } catch (error) {
          throw new Error('Error al obtener la lista de colecciones: ' + error);
        }
      }

};