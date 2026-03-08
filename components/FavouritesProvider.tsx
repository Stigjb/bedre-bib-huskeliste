import { type PropsWithChildren, useEffect, useState } from "react";
import type { Favourite } from "@/lib/Favourite";
import { FavouritesContext } from "@/lib/favouritesContext";

export function FavouritesProvider({ children }: PropsWithChildren) {
  const [favourites, setFavourites] = useState<Favourite[] | null>(null);
  useEffect(() => {
    fetch("/favourites")
      .then((res) => res.json())
      .then((json) => setFavourites(json));
  }, []);
  if (favourites === null) {
    return null;
  }
  const ctxVal = {
    favourites,
  };
  return (
    <FavouritesContext.Provider value={ctxVal}>
      {children}
    </FavouritesContext.Provider>
  );
}
