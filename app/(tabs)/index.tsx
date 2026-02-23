import { FlatList, View } from "react-native";
import favourites from "@/favourites.json";
import { BookComponent } from "@/components/Book";
import { useContext } from "react";
import { FilterContext } from "@/lib/filterContext";

export default function Index() {
  const { filters } = useContext(FilterContext);
  const filteredData = favourites.filter((item) => {
    if (item.availableBranches === null) {
      return false;
    }
    if (!filters[item.mediaType]) {
      return false;
    }
    return item.availableBranches.some((branch) => filters[branch] === true);
  });
  return (
    <View>
      <FlatList
        data={filteredData}
        renderItem={({ item }) => <BookComponent {...item} />}
      />
    </View>
  );
}
