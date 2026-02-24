import { createContext } from "react";

interface BranchContextType {
  branches: Record<string, string>;
  getBranchName: (id: string) => string | null;
}

export const BranchContext = createContext<BranchContextType>({
  branches: {},
  getBranchName: () => null,
});
