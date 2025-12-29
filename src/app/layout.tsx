import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Next Level Softball | Biomechanics-Driven Softball Pitching",
  description: "Data-backed mechanics, personalized programming, and video breakdowns built to help softball pitchers move better, throw harder, and stay healthy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0E0F11] text-[#F5F7FA]">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}



