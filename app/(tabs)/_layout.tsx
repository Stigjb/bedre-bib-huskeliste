import FilterProvider from "@/components/FilterProvider";
import { FilterContext } from "@/lib/filterContext";
import { Tabs } from "expo-router";
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
  return (
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
  );
}
