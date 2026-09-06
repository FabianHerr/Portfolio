import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// "FH" in a machined octagon, mirrors components/Monogram.tsx (the nav mark).
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
          background: "#ededea",
        }}
      >
        <div
          style={{
            width: 50,
            height: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#191b1e",
            color: "#ededea",
            fontSize: 25,
            fontWeight: 700,
            letterSpacing: 1,
            clipPath:
              "polygon(24% 0, 76% 0, 100% 24%, 100% 76%, 76% 100%, 24% 100%, 0 76%, 0 24%)",
          }}
        >
          FH
        </div>
      </div>
    ),
    { ...size },
  );
}
