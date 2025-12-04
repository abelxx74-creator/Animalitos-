import type React from "react"
import type { Metadata } from "next"
// <CHANGE> Adding rounded fonts for cute aesthetic
import { Nunito, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// <CHANGE> Using Nunito as the main font for a rounded, soft, kawaii look
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-nunito",
})
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  // <CHANGE> Updated metadata for Animalitos
  title: "Animalitos - Postres Artesanales con Forma de Animales",
  description:
    "Descubrí nuestros adorables postres artesanales con forma de animales. Ranitas, ositos, tortuguitas y más. Hechos con amor y los mejores ingredientes.",
  generator: "v0.app",
  keywords: ["postres", "artesanales", "animales", "donas", "cookies", "alfajores", "brownies", "medialunas"],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${nunito.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
