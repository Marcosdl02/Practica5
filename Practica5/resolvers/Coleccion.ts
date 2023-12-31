import { ComicModel, ComicModelType } from "../db/comic.ts";
import { ColeccionComicModelType } from "../db/coleccionComics.ts";

export const ColeccionDeComics = {
  comics: async (parent: ColeccionComicModelType): Promise<ComicModelType[]> => {
    const comics = await ComicModel.find({ _id: parent._id });
    return comics;
  },
};