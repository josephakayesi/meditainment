import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

import Navigation from "@/app/ui/Navigation";
// import Footer from "@/app/components/Footer"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#FCF5E5] min-h-screen flex flex-col">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
