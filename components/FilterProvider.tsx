import { type PropsWithChildren, useState } from "react";
import { FilterContext } from "@/lib/filterContext";

export default function FilterProvider({ children }: PropsWithChildren) {
  const [filters, setFilters] = useState<Record<string, boolean>>({
    bjor: true,
    fgry: true,
    fmaj: true,
    Bok: true,
    Film: true,
    Noter: true,
  });
  const toggleValue = (key: string) => {
    if (key in filters) {
      const old = filters[key];
      setFilters({ ...filters, [key]: !old });
    } else {
      setFilters({ ...filters, [key]: true });
    }
  };
  const setAll = (keys: string[], val: boolean) => {
    const newFilters = { ...filters };
    for (const k of keys) {
      newFilters[k] = val;
    }
    setFilters(newFilters);
  };
  return (
    <FilterContext.Provider value={{ filters, setAll, toggleValue }}>
      {children}
    </FilterContext.Provider>
  );
}
