import { Text, View } from "react-native";
import favourites from '@/favourites.json';

const entries = favourites.map((entry) => entry.mainTitle);

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ul>
        {entries.map(ent => <li>{ent}</li>)}
      </ul>
    </View>
  );
}
