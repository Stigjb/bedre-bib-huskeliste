import getBranchName from "@/lib/getBranchName";
import { View, Text, StyleSheet } from "react-native";

type Props = {
  title: string;
  mainEntryName?: string;
  mainTitle: string;
  mediaType: string;
  availableBranches: string[] | null;
};

function Availability({ branches }: { branches: string[] | null }) {
  if (branches === null) {
    return null;
  }
  const namedBranches = branches.map(getBranchName);
  return <Text>Ledig ved {namedBranches.join(", ")}</Text>;
}

export function BookComponent({
  title,
  mainTitle,
  mainEntryName,
  mediaType,
  availableBranches,
}: Props) {
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
