import { FilterContext } from "@/lib/filterContext";
import { Checkbox } from "expo-checkbox";
import { useContext } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";

export default function FilterPage() {
  const { filters, toggleValue } = useContext(FilterContext);
  return (
    <ScrollView>
      <View style={styles.fieldSet}>
        <Text style={styles.legend}>Filialer</Text>
        <View style={styles.field}>
          <Checkbox
            value={!!filters.bjor}
            onValueChange={() => toggleValue("bjor")}
          />
          <Text>Bjørvika</Text>
        </View>
        <View style={styles.field}>
          <Checkbox
            value={!!filters.fgry}
            onValueChange={() => toggleValue("fgry")}
          />
          <Text>Grünerløkka</Text>
        </View>
        <View style={styles.field}>
          <Checkbox
            value={!!filters.fmaj}
            onValueChange={() => toggleValue("fmaj")}
          />
          <Text>Majorstua</Text>
        </View>
      </View>
      <View style={styles.fieldSet}>
        <Text style={styles.legend}>Medium</Text>
        <View style={styles.field}>
          <Checkbox
            value={!!filters.bok}
            onValueChange={() => toggleValue("bok")}
          />
          <Text>Bok</Text>
        </View>
        <View style={styles.field}>
          <Checkbox
            value={!!filters.film}
            onValueChange={() => toggleValue("film")}
          />
          <Text>Film</Text>
        </View>
        <View style={styles.field}>
          <Checkbox
            value={!!filters.noter}
            onValueChange={() => toggleValue("noter")}
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
