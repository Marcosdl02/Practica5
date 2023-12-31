import mongoose from "npm:mongoose@8.0.1";
import { Comic } from "../types.ts";
const Schema = mongoose.Schema;

const ComicSchema = new Schema({
    titulo: { type: String, required: true },
    descripcion: { type: String, required: true },
    formato: { type: String, required: true }
  });

export type ComicModelType = mongoose.Document & Omit<Comic, "id">;


export const ComicModel = mongoose.model<ComicModelType>('Comic', ComicSchema);