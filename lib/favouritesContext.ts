import { createContext } from "react";
import type { Favourite } from "./Favourite";

interface FavouritesContextType {
  favourites: Favourite[];
}

export const FavouritesContext = createContext<FavouritesContextType>({
  favourites: [],
});
