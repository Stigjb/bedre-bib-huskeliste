import { Text, ScrollView } from "react-native";
import favourites from '@/favourites.json';
import { BookComponent } from "@/components/Book";

const entries = favourites.map((entry) => <BookComponent {...entry} />);

export default function Index() {
  return (
    <ScrollView>
      <ul>
        {entries.map(ent => <li>{ent}</li>)}
      </ul>
    </ScrollView>
  );
}
