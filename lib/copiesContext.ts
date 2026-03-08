import { createContext } from "react";
import type { Copy } from "./Copy";

interface CopiesContextType {
  copies: Record<string, Copy[]>;
}

export const CopiesContext = createContext<CopiesContextType>({
  copies: {},
});
