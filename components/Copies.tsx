import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { BranchContext } from "@/lib/branchContext";
import type { Copy } from "@/lib/Copy";

export function Copies({ copies }: { copies: Copy[] }) {
  const { getBranchName } = useContext(BranchContext);
  const parts = copies.map(({ locLabel, shelfmark, branchcode }) => {
    const branch = getBranchName(branchcode);
    const key = [locLabel, shelfmark, branchcode].join("_");
    return (
      <View style={styles.group} key={key}>
        <Text style={styles.title}>{branch}</Text>
        <Text>{shelfmark}</Text>
        <Text>{locLabel}</Text>
      </View>
    );
  });
  return <View>{parts}</View>;
}

const styles = StyleSheet.create({
  group: { margin: 10 },
  title: { fontWeight: 700 },
});
