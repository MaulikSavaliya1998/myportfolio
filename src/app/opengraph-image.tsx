import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";
import { profile, stats } from "@/data";
import { loadPortrait, OG_SIZE } from "@/lib/og";

export const alt = `${profile.name} — ${profile.headline}`;
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function OpengraphImage() {
  const portrait = await loadPortrait();
  const brand = siteConfig.brandColor;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0b0a10",
          color: "white",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", top: -260, left: 200, width: 900, height: 600, borderRadius: 9999, background: `radial-gradient(closest-side, ${brand}66, transparent)`, display: "flex" }} />

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 0 0 72px", width: 760 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 22, color: "#a1a1aa", letterSpacing: 4, textTransform: "uppercase" }}>
            <div style={{ width: 10, height: 10, borderRadius: 999, background: brand, display: "flex" }} />
            Portfolio
          </div>
          <div style={{ display: "flex", fontSize: 80, fontWeight: 800, lineHeight: 1.02, marginTop: 16, letterSpacing: -2 }}>{profile.name}</div>
          <div style={{ display: "flex", fontSize: 40, fontWeight: 700, marginTop: 12, color: brand }}>{profile.headline}</div>
          <div style={{ display: "flex", fontSize: 26, color: "#d4d4d8", marginTop: 20 }}>React · Next.js · Node.js · TypeScript · AWS</div>
          <div style={{ display: "flex", gap: 16, marginTop: 36 }}>
            {stats.slice(0, 3).map((s) => (
              <div key={s.label} style={{ display: "flex", flexDirection: "column", padding: "12px 20px", borderRadius: 16, border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.04)" }}>
                <div style={{ display: "flex", fontSize: 30, fontWeight: 800 }}>{`${s.prefix ?? ""}${s.value}${s.suffix ?? ""}`}</div>
                <div style={{ display: "flex", fontSize: 16, color: "#a1a1aa" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", position: "absolute", right: 40, bottom: 0, width: 420, height: 560, alignItems: "flex-end", justifyContent: "center" }}>
          <div style={{ position: "absolute", bottom: 20, width: 380, height: 380, borderRadius: 9999, background: brand, display: "flex" }} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={portrait} alt="" width={420} height={435} style={{ position: "relative" }} />
        </div>
      </div>
    ),
    size,
  );
}
