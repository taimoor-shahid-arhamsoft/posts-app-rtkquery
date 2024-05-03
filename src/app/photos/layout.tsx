import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import Providers from "../provider";
import "../globals.css";
import Header from "@/components/Header/Header";

const notosans = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Photos Page",
  description: "Posts app in next js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={notosans.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}