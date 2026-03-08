import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { BranchContext } from "@/lib/branchContext";
import type { Copy } from "@/lib/Copy";
import { FilterContext } from "@/lib/filterContext";

export function Copies({ copies }: { copies: Copy[] }) {
  const { getBranchName } = useContext(BranchContext);
  const { filters } = useContext(FilterContext);
  const activeBranches = [];
  const inactiveBranches = [];
  for (const copy of copies) {
    const { locLabel, shelfmark, branchcode } = copy;
    const branch = getBranchName(branchcode);
    const key = [locLabel, shelfmark, branchcode].join("_");
    const part = (
      <View style={styles.group} key={key}>
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
    <View>
      <View>{activeBranches}</View>
      {inactiveBranches.length > 0 && (
        <View style={styles.inactive}>{inactiveBranches}</View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  group: { margin: 10 },
  title: { fontWeight: 700 },
  inactive: { borderTopColor: "#666", borderTopWidth: 1, opacity: 0.4 },
});
