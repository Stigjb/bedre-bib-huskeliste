import favourites from "@/favourites.json";

export function GET(req: Request) {
  const result = favourites.map(({ tag, mainEntryName, title, mediaType, availableBranches }) => ({
    tag,
    mainEntryName,
    title,
    mediaType,
    availableBranches,
  }));
  return Response.json(result);
}
