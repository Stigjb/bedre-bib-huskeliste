import { Checkbox } from "expo-checkbox";
import { useContext } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { BranchContext } from "@/lib/branchContext";
import { FilterContext } from "@/lib/filterContext";

export default function FilterPage() {
  const { filters, toggleValue, setAll } = useContext(FilterContext);
  const { branches } = useContext(BranchContext);
  const allBranches = Object.keys(branches);
  return (
    <ScrollView>
      <View style={styles.fieldSet}>
        <Text style={styles.legend}>Filialer</Text>
        <View style={styles.buttons}>
          <Pressable
            onPress={() => setAll(allBranches, true)}
            style={styles.button}
          >
            <Text>Alle</Text>
          </Pressable>
          <Pressable
            onPress={() => setAll(allBranches, false)}
            style={styles.button}
          >
            <Text>Ingen</Text>
          </Pressable>
        </View>
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
  button: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderColor: "#000",
    borderStyle: "solid",
    borderWidth: 1,
    backgroundColor: "#ddd",
  },
  buttons: {
    flexDirection: "row",
    gap: 4,
  },
});
