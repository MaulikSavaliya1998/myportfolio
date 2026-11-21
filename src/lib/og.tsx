import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { siteConfig } from "@/config/site";

export const OG_SIZE = { width: 1200, height: 630 };

/** Brand monogram used by the favicon / apple icon. */
export function Monogram({ size }: { size: number }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: size * 0.28,
        background: siteConfig.brandColor,
        color: "white",
        fontSize: size * 0.42,
        fontWeight: 800,
        letterSpacing: -1,
      }}
    >
      MS
    </div>
  );
}

export async function loadPortrait() {
  const buf = await readFile(join(process.cwd(), "public/images/maulik-og.png"));
  return `data:image/png;base64,${buf.toString("base64")}`;
}
