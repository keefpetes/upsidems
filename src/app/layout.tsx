import type { Metadata } from "next";
import "./globals.css";
import ActivateTouchStates from "@/components/ActivateTouchStates";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Upside MS Foundation",
  description:
    "Upside MS exists to close the accessibility gap in natural spaces, restoring the right to move, breathe, and heal for people with MS and other mobility challenges in Canada.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ActivateTouchStates />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
