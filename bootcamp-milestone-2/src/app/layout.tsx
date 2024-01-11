import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google"; // You can change the font to anything you want.
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });
require("dotenv").config();

export const metadata = {
  title: "Aidan's Personal Website",
  template: "%s",
  description: "A personal website for Aidan Nesbitt",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Navbar />
      <body className={inter.className}>{children}</body>
      <Analytics />
      <Footer />
    </html>
  );
}
