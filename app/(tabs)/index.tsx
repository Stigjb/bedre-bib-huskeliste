import { useContext, useEffect, useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import { FavouriteComponent } from "@/components/Book";
import type { Favourite } from "@/lib/Favourite";
import { FilterContext } from "@/lib/filterContext";

export default function Index() {
  const { filters } = useContext(FilterContext);
  const [favourites, setFavourites] = useState<Favourite[] | null>(null);
  useEffect(() => {
    fetch("/favourites")
      .then((res) => res.json())
      .then((data) => setFavourites(data));
  }, []);
  if (favourites === null) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }
  const filteredData = favourites.filter((item) => {
    if (item.availableBranches === null) {
      return false;
    }
    if (!filters[item.mediaType]) {
      return false;
    }
    return item.availableBranches.some(
      (branch: string) => filters[branch] === true,
    );
  });
  return (
    <View>
      <FlatList
        data={filteredData}
        renderItem={({ item }) => <FavouriteComponent {...item} />}
      />
    </View>
  );
}
