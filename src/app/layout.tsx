import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import {Backgrounds, SideBar, NavBar} from "@/app/pages";
import Head from "next/head";
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
      <Head>
          <link rel="icon" href="./../../public/icon.ico"/>
      </Head>
      <body className={inter.className}>
      <Backgrounds/>
      <NavBar/>
      <SideBar/>
      {children}
      </body>
      </html>
  );
}
