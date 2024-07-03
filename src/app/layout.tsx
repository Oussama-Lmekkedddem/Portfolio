import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import {Backgrounds, SideBar, NavBar} from "@/app/pages";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Backgrounds/>
      <NavBar/>
      <SideBar/>
      {children}
      </body>
    </html>
  );
}
