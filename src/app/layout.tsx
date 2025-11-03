import type { Metadata } from "next";

import "./globals.css";
import { inter } from "@/confg/fonts";


export const metadata: Metadata = {
  title: " Cristian-shop",
  description: "Tienda de ropa ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}
