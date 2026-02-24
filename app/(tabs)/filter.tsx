import { BranchContext } from "@/lib/branchContext";
import { FilterContext } from "@/lib/filterContext";
import { Checkbox } from "expo-checkbox";
import { useContext } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";

export default function FilterPage() {
  const { filters, toggleValue } = useContext(FilterContext);
  const { branches } = useContext(BranchContext);
  return (
    <ScrollView>
      <View style={styles.fieldSet}>
        <Text style={styles.legend}>Filialer</Text>
        {Object.entries(branches).map(([key, val]) => (
          <View style={styles.field} key={key}>
            <Checkbox
              value={!!filters[key]}
              onValueChange={() => toggleValue(key)}
            />
            <Text>{val}</Text>
          </View>
        ))}
      </View>
      <View style={styles.fieldSet}>
        <Text style={styles.legend}>Medium</Text>
        <View style={styles.field}>
          <Checkbox
            value={!!filters.Bok}
            onValueChange={() => toggleValue("Bok")}
          />
          <Text>Bok</Text>
        </View>
        <View style={styles.field}>
          <Checkbox
            value={!!filters.Film}
            onValueChange={() => toggleValue("Film")}
          />
          <Text>Film</Text>
        </View>
        <View style={styles.field}>
          <Checkbox
            value={!!filters.Noter}
            onValueChange={() => toggleValue("Noter")}
          />
          <Text>Noter</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fieldSet: {
    borderColor: "#000",
    borderStyle: "solid",
    borderWidth: 1,
    padding: 8,
    gap: 8,
  },
  legend: {
    fontWeight: 700,
  },
  field: {
    flexDirection: "row",
    gap: 8,
  },
});
