import { ImageResponse } from "next/og";

// Dynamically generated favicon — a "K" monogram on the brand gradient.
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

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
          fontSize: 44,
          fontWeight: 800,
          color: "#ffffff",
          background: "linear-gradient(135deg, #2563eb 0%, #22c55e 50%, #818cf8 100%)",
          borderRadius: "14px",
        }}
      >
        K
      </div>
    ),
    { ...size }
  );
}
