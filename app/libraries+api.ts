export async function GET(req: Request) {
  const res = await fetch("https://deichman.no/api/libraries");
  const data = await res.json();
  const branches: Record<string, string> = {};
  data.forEach(({ kohaId, name, isPickupBranch }: any) => {
    // filter out some special branches
    if (isPickupBranch) {
      branches[kohaId] = name;
    }
  });
  return Response.json(branches);
}
