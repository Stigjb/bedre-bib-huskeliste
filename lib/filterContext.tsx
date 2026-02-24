import { createContext } from "react";

interface FilterContextType {
  filters: Record<string, boolean>;
  toggleValue: (key: string) => void;
}

export const FilterContext = createContext<FilterContextType>({
  filters: {},
  toggleValue: () => {},
});
