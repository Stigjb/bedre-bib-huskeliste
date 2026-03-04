import type { Copy } from "@/lib/Copy";

// https://deichman.no/api/cicero/open/copies?id=9173219,CIC-5066485,9141499,809804,9128615,1505916,9126894,582794,989641,1829830
const baseUrl = "https://deichman.no/api/cicero/open/copies";

type RawCopy = Copy & { status: string };

export async function GET(req: Request) {
  const reqUrl = new URL(req.url);
  const ids = reqUrl.searchParams.get("id");

  if (ids === null) {
    return null;
  }

  const url = new URL(baseUrl);
  url.searchParams.set("id", ids);
  const res = await fetch(url);
  const data = await res.json();
  const result: Copy[] = [];
  for (const copiesItem of Object.values(data)) {
    for (const item of (copiesItem as { items: RawCopy[] }).items) {
      if (item.status !== "Ledig") {
        continue;
      }
      const resItem = {
        locLabel: item.locLabel,
        shelfmark: item.shelfmark,
        branchcode: item.branchcode,
      };
      result.push(resItem);
    }
  }
  return Response.json(result);
}
