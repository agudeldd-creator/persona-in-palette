import type { Metadata } from "next";
import { Marcellus, Mulish } from "next/font/google";
import "./globals.css";

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-marcellus",
  display: "swap",
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mulish",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Persona in Palette | Certified Colour Analysis with Naomi",
  description:
    "Curated colour consulting with Naomi Ciarallo in Port Moody, BC. Discover your most flattering colours, jewelry metals, makeup and hair with a personalized seasonal colour analysis. Stop guessing, start glowing.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${marcellus.variable} ${mulish.variable}`}>{children}</body>
    </html>
  );
}
