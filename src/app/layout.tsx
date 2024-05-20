import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import "swiper/css";
import "swiper/css/pagination";
export const metadata: Metadata = {
  title: "Movies",
  description: "By Ngo Van Vu",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
