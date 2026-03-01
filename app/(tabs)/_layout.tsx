import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import { BranchProvider } from "@/components/BranchProvider";
import FilterProvider from "@/components/FilterProvider";

export default function TabLayout() {
  return (
    <BranchProvider>
      <FilterProvider>
        <Tabs>
          <Tabs.Screen
            name="index"
            options={{
              tabBarIcon: ({ color }) => (
                <Ionicons name={"list"} color={color} size={24} />
              ),
              title: "Huskeliste",
            }}
          />
          <Tabs.Screen
            name="filter"
            options={{
              tabBarIcon: ({ color }) => (
                <Ionicons name={"filter"} color={color} size={24} />
              ),
              title: "Filter",
            }}
          />
        </Tabs>
      </FilterProvider>
    </BranchProvider>
  );
}
