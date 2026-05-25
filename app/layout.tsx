import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "We Mart Cooperation",
  description: "We provide high-quality fashion, electronics, and lifestyle products with a modern and user-friendly shopping experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen w-full flex flex-col bg-slate-50 pb-40 sm:pb-28">
        <Navbar />
        <main className="flex-1 min-h-0 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
