import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "@/components";

export const metadata: Metadata = {
  title: "Andrew Dev",
  description: "Un portafolio web moderno y seguro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
