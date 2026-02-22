import FilterProvider from "@/components/FilterProvider";
import { FilterContext } from "@/lib/filterContext";
import { Tabs } from "expo-router";
import { useState } from "react";

export default function TabLayout() {
  return (
    <FilterProvider>
      <Tabs>
        <Tabs.Screen name="index" options={{ title: "Huskeliste" }} />
        <Tabs.Screen name="filter" options={{ title: "Filter" }} />
      </Tabs>
    </FilterProvider>
  );
}
