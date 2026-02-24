import { BranchContext } from "@/lib/branchContext";
import { PropsWithChildren, useEffect, useState } from "react";

export function BranchProvider({ children }: PropsWithChildren) {
  const [branches, setBranches] = useState<Record<string, string> | null>(null);
  useEffect(() => {
    fetch("https://deichman.no/api/libraries")
      .then((res) => res.json())
      .then((json) => {
        console.log({ json });
        const map: Record<string, string> = {};
        json.forEach(({ kohaId, name }: any) => (map[kohaId] = name));
        setBranches(map);
      });
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
