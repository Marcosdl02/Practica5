import { GraphQLError } from "npm:graphql@^16.8.1";
import { UsuarioModel, UsuarioModelType } from "../db/usuario.ts";
import { ComicModel,ComicModelType } from "../db/comic.ts";
import { ColeccionDeComicsModel, ColeccionComicModelType } from "../db/coleccionComics.ts";
import mongoose from "npm:mongoose@8.0.1";

export const Mutation = {
  
    crearUsuario: async (
        _: unknown,
        args: {nombre: string, correoElectronico: string, colecciondeComics:string}
      ): Promise<UsuarioModelType> => {
        const usuario = {
          nombre:args.nombre,
          correoElectronico:args.correoElectronico,
          ColeccionDeComics: new mongoose.Types.ObjectId(args.colecciondeComics)
        };
        const newUsuario = await UsuarioModel.create(usuario);
        return newUsuario;
      },

      actualizarUsuario: async (
        _: unknown,
        args: { id: string, nombre: string, correoElectronico: string, coleccionDeComics:string }
      ): Promise<UsuarioModelType> => {
        const usuario = await UsuarioModel.findByIdAndUpdate(
          args.id,
          { nombre: args.nombre,
            correoElectronico: args.correoElectronico,
            coleccionDeComics: args.coleccionDeComics,
          },
          { new: true, runValidators: true }
        );
        if (!usuario) {
          throw new GraphQLError(`No se ha encontrado un usuario con id ${args.id}`, {
            extensions: { code: "NOT_FOUND" },
          });
        }
        return usuario;
      },

      eliminarUsuario: async (
        _: unknown,
        args: { id: string }
      ): Promise<UsuarioModelType> => {
        const usuario = await UsuarioModel.findByIdAndDelete(args.id);
        if (!usuario) {
          throw new GraphQLError(`No se ha encontrado un usuario con id ${args.id}`, {
            extensions: { code: "NOT_FOUND" },
          });
        }
        return usuario;
      },

      crearComic: async (
        _: unknown,
        args: { titulo: string; descripcion: string; formato: string }
      ): Promise<ComicModelType> => {
        const { titulo, descripcion, formato } = args;
    
        try {
          const nuevoComic = new ComicModel({
            titulo,
            descripcion,
            formato
          });
    
          const comicCreado = await nuevoComic.save();
          return comicCreado;
        } catch (error) {
          // Manejo de errores si la creación del cómic falla
          throw new Error('No se pudo crear el cómic: ' + error);
        }
      },

      actualizarComic: async (
        _: unknown,
        args: { id: string; titulo?: string; descripcion?: string; formato?: string }
      ): Promise<ComicModelType> => {
        try {
          const { id, titulo, descripcion, formato } = args;
    
          const comicActualizado = await ComicModel.findByIdAndUpdate(
            id,
            { titulo, descripcion, formato },
            { new: true, runValidators: true }
          );
    
          if (!comicActualizado) {
            throw new Error(`No se ha encontrado un cómic con ID ${id}`);
          }
    
          return comicActualizado;
        } catch (error) {
          throw new Error('Error al actualizar el cómic: ' + error);
        }
      },

      eliminarComic: async (
        _: unknown,
        args: { id: string }
      ): Promise<ComicModelType> => {
        try {
          const comicEliminado = await ComicModel.findByIdAndDelete(args.id);
    
          if (!comicEliminado) {
            throw new Error(`No se ha encontrado un cómic con ID ${args.id}`);
          }
    
          return comicEliminado;
        } catch (error) {
          throw new Error('Error al eliminar el cómic: ' + error);
        }
      },

      crearColeccionDeComics: async (
        _: unknown,
        args: {nombre: string, comics:string}
      ): Promise<ColeccionComicModelType> => {
        const coleccion = {
          nombre:args.nombre,
          comics:[],

          
          // comics: new mongoose.Types.ObjectId(args.comics), (No funciona)
        };
        const newColeccion = await ColeccionDeComicsModel.create(coleccion);
        return newColeccion;
      },

      

};