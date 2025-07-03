import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import {Backgrounds, SideBar, NavBar} from "@/app/pages";
import Head from "next/head";
import { LanguageProvider } from "@/app/context/LanguageContext";


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
      <LanguageProvider>
      <Backgrounds/>
      <NavBar/>
      <SideBar/>
      {children}
      </LanguageProvider>
      </body>
      </html>
  );
}
