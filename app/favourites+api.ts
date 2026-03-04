import favourites from "@/favourites.json";

export function GET(_req: Request) {
  const result = favourites.map(
    ({
      tag,
      recordId,
      mainEntryName,
      title,
      mediaType,
      availableBranches,
    }) => ({
      tag,
      recordId,
      mainEntryName,
      title,
      mediaType,
      availableBranches,
    }),
  );
  return Response.json(result);
}
