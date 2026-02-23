import { FilterContext } from "@/lib/filterContext";
import { type PropsWithChildren, useState } from "react";

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
  return (
    <FilterContext.Provider value={{ filters, toggleValue }}>
      {children}
    </FilterContext.Provider>
  );
}
