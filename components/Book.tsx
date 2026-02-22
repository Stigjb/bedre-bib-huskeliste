import { View, Text, StyleSheet } from "react-native";

type Props = {
  mainTitle: string;
  mediaType: string;
  availableBranches: string[] | null;
}

function Availability({branches}: {branches: string[] | null}) {
  if (branches === null) {
    return null;
  }
  return <Text>Ledig ved {branches.join(', ')}</Text>;
}

export function BookComponent({ mainTitle, mediaType, availableBranches }: Props) {
  return <View style={styles.card}>
    <Text style={styles.title}>{mainTitle}</Text>
    <Text style={styles.mediaType}>{mediaType}</Text>
    <Availability branches={availableBranches} />
  </View>;
}

const styles = StyleSheet.create({
  card: {backgroundColor: '#ddd', borderRadius: 12, margin: 6, padding: 6},
  title: {fontWeight: 700},
  mediaType: {fontStyle: 'italic'},
})
