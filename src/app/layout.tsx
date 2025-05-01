import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AppSneak - #1 Online Resources Tool For Apps & Games",
  description:
    "AppSneak is a worldwide, free, and open-source app generation website. Get the latest and most updated app and game tweaks, absolutely online and free!",
  keywords:
    "app resources, free coins, free diamonds, game cheats, app generator, mobile games, online tools",
  authors: [{ name: "AppSneak Team" }],
  metadataBase: new URL("https://appsneak-clone.netlify.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://appsneak-clone.netlify.app/",
    title: "AppSneak - #1 Online Resources Tool For Apps & Games",
    description:
      "AppSneak is a worldwide, free, and open-source app generation website. Get the latest and most updated app and game tweaks, absolutely online and free!",
    siteName: "AppSneak",
    images: [
      {
        url: "/app-sneak-logo.png",
        width: 512,
        height: 512,
        alt: "AppSneak Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AppSneak - #1 Online Resources Tool For Apps & Games",
    description:
      "Get free coins, diamonds and resources for your favorite games and apps.",
    images: ["/app-sneak-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
