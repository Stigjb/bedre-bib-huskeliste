import { createContext } from "react";

interface ContextType {
  filters: Record<string, boolean>;
  toggleValue: (key: string) => {};
}

export const FilterContext = createContext({
  filters: {} as Record<string, boolean>,
  toggleValue: (key: string) => {},
});
