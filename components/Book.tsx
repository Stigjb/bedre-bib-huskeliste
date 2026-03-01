import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { BranchContext } from "@/lib/branchContext";
import type { Favourite } from "@/lib/Favourite";

function Availability({ branches }: { branches: string[] | null }) {
  const { getBranchName } = useContext(BranchContext);
  if (branches === null) {
    return null;
  }
  const namedBranches = branches.map(getBranchName);
  return <Text>Ledig ved {namedBranches.join(", ")}</Text>;
}

export function FavouriteComponent({
  title,
  mainEntryName,
  mediaType,
  availableBranches,
}: Favourite) {
  let emoji = "";
  if (mediaType === "Bok") {
    emoji = "📕 ";
  } else if (mediaType === "Film") {
    emoji = "📽️ ";
  } else if (mediaType === "Noter") {
    emoji = "🎼 ";
  }
  return (
    <View style={styles.card}>
      <Text style={styles.title}>
        {emoji}
        {title}
      </Text>
      {mainEntryName && <Text style={styles.author}>{mainEntryName}</Text>}
      <Availability branches={availableBranches} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: "#ddd", borderRadius: 12, margin: 6, padding: 6 },
  title: { fontWeight: 700 },
  author: { fontStyle: "italic" },
});
