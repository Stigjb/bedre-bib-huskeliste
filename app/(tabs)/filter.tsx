import { FilterContext } from "@/lib/filterContext";
import { Checkbox } from "expo-checkbox";
import { useContext } from "react";
import { ScrollView, View, Text } from "react-native";

export default function FilterPage() {
  const { filters, toggleValue } = useContext(FilterContext);
  console.log(filters);
  return (
    <ScrollView>
      <View>
        <Text>Filialer</Text>
        <View>
          <Checkbox
            value={!!filters.bjor}
            onValueChange={() => toggleValue("bjor")}
          />
          <Text>Bjørvika</Text>
        </View>
        <View>
          <Checkbox
            value={!!filters.fgry}
            onValueChange={() => toggleValue("fgry")}
          />
          <Text>Grünerløkka</Text>
        </View>
        <View>
          <Checkbox
            value={!!filters.fmaj}
            onValueChange={() => toggleValue("fmaj")}
          />
          <Text>Majorstua</Text>
        </View>
      </View>
      <View>
        <Text>Medium</Text>
        <View>
          <Checkbox
            value={!!filters.bok}
            onValueChange={() => toggleValue("bok")}
          />
          <Text>Bok</Text>
        </View>
        <View>
          <Checkbox
            value={!!filters.film}
            onValueChange={() => toggleValue("film")}
          />
          <Text>Film</Text>
        </View>
        <View>
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
