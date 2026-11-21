import { ImageResponse } from "next/og";
import { getProject, profile, projects } from "@/data";
import { OG_SIZE } from "@/lib/og";
import { siteConfig } from "@/config/site";

export const alt = "Project case study";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectOgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug) ?? projects[0];
  const brand = siteConfig.brandColor;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          color: "white",
          background: `linear-gradient(135deg, #0b0a10 0%, #0b0a10 35%, ${brand} 140%)`,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, letterSpacing: 3, textTransform: "uppercase", opacity: 0.85 }}>
          {`Case study · ${project.domain}`}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 96, fontWeight: 800, lineHeight: 1 }}>{project.name}</div>
          <div style={{ display: "flex", fontSize: 40, marginTop: 16, opacity: 0.92 }}>{project.tagline}</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 32 }}>
            {project.stack.slice(0, 6).map((t) => (
              <div key={t} style={{ display: "flex", fontSize: 22, padding: "8px 18px", borderRadius: 999, background: "rgba(0,0,0,0.22)" }}>
                {t}
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 26, fontWeight: 700 }}>{`${profile.name} — ${profile.headline}`}</div>
      </div>
    ),
    size,
  );
}
