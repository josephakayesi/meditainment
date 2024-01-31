import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Meditainment",
  description: "Meditation and Entertainment",
};

import Navigation from "@/app/ui/Navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-[#FCF5E5] min-h-screen flex flex-col">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
