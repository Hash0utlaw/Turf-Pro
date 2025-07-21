import { ImageResponse } from "next/og"
import type { NextRequest } from "next/server"

export const runtime = "edge"

export const alt = "Turf Professionals | Premium Artificial Turf Solutions"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function OG(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const poppinsBold = await fetch(new URL("../assets/fonts/Poppins-Bold.ttf", import.meta.url)).then((res) =>
    res.arrayBuffer(),
  )

  const poppinsRegular = await fetch(new URL("../assets/fonts/Poppins-Regular.ttf", import.meta.url)).then((res) =>
    res.arrayBuffer(),
  )

  const logoUrl = new URL("../public/turf-pros-logo.png", import.meta.url).toString()

  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        padding: "48px",
        fontFamily: '"Poppins"',
      }}
    >
      <img src={logoUrl || "/placeholder.svg"} alt="Turf Pros Logo" width="180" height="180" />
      <h1
        style={{
          fontSize: "72px",
          fontWeight: 700,
          color: "#1a2e05",
          marginTop: "40px",
          marginBottom: "20px",
          lineHeight: 1.1,
          textAlign: "center",
        }}
      >
        Turf Professionals
      </h1>
      <p
        style={{
          fontSize: "36px",
          fontWeight: 400,
          color: "#4a5568",
          textAlign: "center",
          maxWidth: "800px",
        }}
      >
        Premium Artificial Turf Solutions
      </p>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: "Poppins",
          data: poppinsBold,
          style: "normal",
          weight: 700,
        },
        {
          name: "Poppins",
          data: poppinsRegular,
          style: "normal",
          weight: 400,
        },
      ],
    },
  )
}
