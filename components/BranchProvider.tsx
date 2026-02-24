import { BranchContext } from "@/lib/branchContext";
import { PropsWithChildren, useEffect, useState } from "react";

export function BranchProvider({ children }: PropsWithChildren) {
  const [branches, setBranches] = useState<Record<string, string> | null>(null);
  useEffect(() => {
    fetch("/libraries")
      .then((res) => res.json())
      .then((json) => setBranches(json));
  }, []);
  if (branches === null) {
    return null;
  }
  const ctxVal = {
    branches,
    getBranchName: (id: string) => branches[id] || null,
  };
  return (
    <BranchContext.Provider value={ctxVal}>{children}</BranchContext.Provider>
  );
}
