import {
  type PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { ActivityIndicator } from "react-native";
import type { Copy } from "@/lib/Copy";
import { CopiesContext } from "@/lib/copiesContext";
import { FavouritesContext } from "@/lib/favouritesContext";

export function CopiesProvider({ children }: PropsWithChildren) {
  const { favourites } = useContext(FavouritesContext);
  const [copies, setCopies] = useState<Copy[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const appendCopies = useCallback((newCs: Copy[]) => {
    setCopies((cs) => cs.concat(newCs));
  }, []);

  useEffect(() => {
    const ps: Promise<void>[] = [];
    for (let i = 0; i < favourites.length; i += 10) {
      const chunk = favourites.slice(i, i + 10);
      const ids = chunk.map((f) => f.recordId).join(",");
      const p = fetch(`/copies?id=${ids}`)
        .then((res) => res.json())
        .then(appendCopies);
      ps.push(p);
    }
    Promise.all(ps).then(() => setLoading(false));
  }, [appendCopies, favourites]);

  if (loading) {
    return <ActivityIndicator />;
  }
  const copiesMap: Record<string, Copy[]> = {};
  for (const c of copies) {
    if (c.recordId in copiesMap) {
      copiesMap[c.recordId].push(c);
    } else {
      copiesMap[c.recordId] = [c];
    }
  }
  const ctxVal = {
    copies: copiesMap,
  };
  return (
    <CopiesContext.Provider value={ctxVal}>{children}</CopiesContext.Provider>
  );
}
