import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/navbar/NavBar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <NavBar />
        </div>
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
