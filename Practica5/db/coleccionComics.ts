import mongoose from "npm:mongoose@8.0.1";
import { ColeccionDeComics } from "../types.ts";
const Schema = mongoose.Schema;

const ColeccionDeComicsSchema = new Schema({
    nombre: { type: String},
    comics: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comic' }]
  });

export type ColeccionComicModelType = mongoose.Document & Omit<ColeccionDeComics, "id">;


export const ColeccionDeComicsModel = mongoose.model<ColeccionComicModelType>('ColeccionDeComics', ColeccionDeComicsSchema);