import type { Metadata } from "next";
import localFont from "next/font/local";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import "core-js/es/array";
import "core-js/es/object";
import "core-js/es/promise";
import "regenerator-runtime/runtime";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "караоке от $индиката",
  description:
    "сонгбук с песнями для караоке. проект московского музыкального синдиката",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main>{children}</main>
      </body>
      <GoogleAnalytics gaId="G-MZCC5VJHV4"/>
    </html>
  );
}
