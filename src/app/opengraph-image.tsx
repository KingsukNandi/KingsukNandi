import { ImageResponse } from "next/og";

// Dynamic social-share preview image (used for Open Graph + Twitter).
export const alt = "Kingsuk Nandi · Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#000000",
          backgroundImage:
            "radial-gradient(circle at 20% 25%, rgba(37,99,235,0.35), transparent 45%), radial-gradient(circle at 85% 80%, rgba(99,102,241,0.35), transparent 45%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "26px",
            color: "#22c55e",
            fontWeight: 600,
          }}
        >
          <div
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "9999px",
              backgroundColor: "#22c55e",
              display: "flex",
            }}
          />
          Open to opportunities
        </div>

        <div
          style={{
            display: "flex",
            fontSize: "120px",
            fontWeight: 800,
            letterSpacing: "-4px",
            lineHeight: 1.05,
            marginTop: "28px",
          }}
        >
          Kingsuk Nandi
        </div>

        <div
          style={{
            display: "flex",
            fontSize: "46px",
            fontWeight: 600,
            color: "#93c5fd",
            marginTop: "8px",
          }}
        >
          Full-Stack Developer
        </div>

        <div
          style={{
            display: "flex",
            fontSize: "30px",
            color: "rgba(255,255,255,0.65)",
            marginTop: "28px",
          }}
        >
          React · Next.js · Node.js · PostgreSQL · Python ML · Google Cloud
        </div>

        <div
          style={{
            display: "flex",
            fontSize: "26px",
            color: "rgba(255,255,255,0.45)",
            marginTop: "auto",
          }}
        >
          kingsuk-nandi.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}
