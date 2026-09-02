import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Octagonal chip with an "F" — echoes the CasiOak bezel. Placeholder mark.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(152deg, #edeef0, #b6bbc1 40%, #a7acb3 70%, #cfd2d6)",
        }}
      >
        <div
          style={{
            width: 46,
            height: 46,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#14161a",
            color: "#c4cabb",
            fontSize: 30,
            fontWeight: 700,
            fontFamily: "Georgia, serif",
            clipPath:
              "polygon(28% 0, 72% 0, 100% 28%, 100% 72%, 72% 100%, 28% 100%, 0 72%, 0 28%)",
          }}
        >
          F
        </div>
      </div>
    ),
    { ...size },
  );
}
