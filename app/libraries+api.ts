interface BranchType {
  kohaId: string;
  name: string;
  isPickupBranch: boolean;
}

export async function GET(_req: Request) {
  const res = await fetch("https://deichman.no/api/libraries");
  const data = await res.json();
  const branches: Record<string, string> = {};
  data.forEach(({ kohaId, name, isPickupBranch }: BranchType) => {
    // filter out some special branches
    if (isPickupBranch) {
      branches[kohaId] = name;
    }
  });
  return Response.json(branches);
}
