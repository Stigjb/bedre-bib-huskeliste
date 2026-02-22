import { Text, ScrollView, FlatList, View } from "react-native";
import favourites from '@/favourites.json';
import { BookComponent } from "@/components/Book";

const entries = favourites.map((entry) => <BookComponent {...entry} />);

export default function Index() {
  return (
    <View>
      <FlatList
        data={favourites}
        renderItem={({ item }) => <BookComponent {...item} />} />
    </View>
  );
}
