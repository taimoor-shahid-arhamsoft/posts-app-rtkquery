import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import Providers from "./provider";
import "./globals.css";

const notosans = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Posts App RTKQuery",
  description: "Posts app in next js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={notosans.className}><Providers>{children}</Providers></body>
    </html>
  );
}
