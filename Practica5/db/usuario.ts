import mongoose from "npm:mongoose@8.0.1";
import { Usuario } from "../types.ts";
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
    nombre: { type: String, required: true },
    correoElectronico: { type: String, required: true },
    coleccionDeComics: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ColeccionDeComics' }]
});

export type UsuarioModelType = mongoose.Document & Omit<Usuario, "id">;


export const UsuarioModel = mongoose.model<UsuarioModelType>('Usuario', UsuarioSchema);