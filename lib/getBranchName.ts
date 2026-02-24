import libraries from "@/libraries.json";

export default function getBranchName(kohaId: string): string | null {
  for (const lib of libraries) {
    if (lib.kohaId === kohaId) {
      return lib.name;
    }
  }
  return null;
}
