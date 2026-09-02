import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${profile.name} — ${profile.role}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          padding: 64,
          background: "#e8e8e6",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* steel bezel */}
        <div
          style={{
            flex: 1,
            display: "flex",
            padding: 10,
            background:
              "linear-gradient(152deg, #edeef0, #b6bbc1 22%, #e3e5e8 40%, #a7acb3 62%, #eaecee 82%, #bfc4ca)",
          }}
        >
          {/* resin face */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "56px 64px",
              background: "#f3f4f5",
              borderTop: "3px solid #d8402a",
            }}
          >
            <div
              style={{
                fontFamily: "monospace",
                fontSize: 20,
                letterSpacing: 6,
                textTransform: "uppercase",
                color: "#565a60",
              }}
            >
              {profile.role}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ fontSize: 108, lineHeight: 1, color: "#191b1e" }}>
                {profile.name}
              </div>
              <div style={{ fontSize: 30, color: "#565a60", maxWidth: 860 }}>
                {profile.tagline}
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
