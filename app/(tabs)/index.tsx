import { useContext } from "react";
import { FlatList, View } from "react-native";
import { FavouriteComponent } from "@/components/Favourite";
import { CopiesContext } from "@/lib/copiesContext";
import { FavouritesContext } from "@/lib/favouritesContext";
import { FilterContext } from "@/lib/filterContext";

export default function Index() {
  const { filters } = useContext(FilterContext);
  const { favourites } = useContext(FavouritesContext);
  const { copies } = useContext(CopiesContext);
  const filteredData = favourites.filter((item) => {
    const cs = copies[item.recordId];
    if (cs === undefined) {
      return false;
    }
    if (!filters[item.mediaType]) {
      return false;
    }
    return cs.some((c) => filters[c.branchcode]);
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
