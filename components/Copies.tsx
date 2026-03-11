import { useContext } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { BranchContext } from "@/lib/branchContext";
import type { Copy } from "@/lib/Copy";
import { FilterContext } from "@/lib/filterContext";

export function Copies({
  copies,
  close,
}: {
  copies: Copy[];
  close: () => void;
}) {
  const { getBranchName } = useContext(BranchContext);
  const { filters } = useContext(FilterContext);
  const activeBranches = [];
  const inactiveBranches = [];
  for (const copy of copies) {
    const { locLabel, shelfmark, branchcode } = copy;
    const branch = getBranchName(branchcode);
    const key = [locLabel, shelfmark, branchcode].join("_");
    const part = (
      <View key={key}>
        <Text style={styles.title}>{branch}</Text>
        <Text>{shelfmark}</Text>
        <Text>{locLabel}</Text>
      </View>
    );
    if (filters[branchcode]) {
      activeBranches.push(part);
    } else {
      inactiveBranches.push(part);
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.group}>{activeBranches}</View>
      {inactiveBranches.length > 0 && (
        <View style={styles.inactive}>{inactiveBranches}</View>
      )}
      <Pressable onPress={close} style={styles.closeButton}>
        <Text>Lukk</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "stretch",
    padding: 10,
    gap: 10,
  },
  title: { fontWeight: 700 },
  group: {
    gap: 10,
  },
  inactive: {
    borderTopColor: "#666",
    paddingTop: 10,
    borderTopWidth: 1,
    opacity: 0.4,
    gap: 10,
  },
  closeButton: {
    flexDirection: "row",
    justifyContent: "center",
    borderColor: "#000",
    borderWidth: 1,
    padding: 4,
  },
});
