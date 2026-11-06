import type { Metadata } from "next";
import { Google_Sans, Google_Sans_Flex } from "next/font/google";
import "../globals.css";

const GoogleSans = Google_Sans({
  variable: "--font-Google_Sans",
  weight: "400",
  subsets: ["latin"],
  fallback: ["sans-serif"]
});

const Google_Sans_F = Google_Sans_Flex({
  variable: "--font-Google_Sans_Flex",
  weight: "400",
  subsets: ["latin"],
  fallback: ["Arial"]
});

export const metadata: Metadata = {
  title: "Projects",
  description: "Latest Programming Projects",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${GoogleSans.variable} ${Google_Sans_F.variable} h-full antialiased`}
    >
      <head><link rel="stylesheet" href="../public/globals.css"/></head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
