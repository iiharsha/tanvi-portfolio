import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

// Load the Inter font
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tanvi Reddy - Portfolio",
  description: "A showcase of my work and projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Link to Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;400;700&family=Poppins:wght@400;600&family=Roboto:wght@400;700&family=ZCOOL+XiaoWei&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.className} bg-beige flex flex-col min-h-screen`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
