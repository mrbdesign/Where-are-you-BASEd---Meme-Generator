import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Where are you BASEd? Meme Generator",
  description: "Create and share memes with Farcaster Frame compatibility.",
  openGraph: {
    images: [
      {
        url: "http://localhost:3000/fallback-preview.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  other: {
    "fc:frame": "vNext",
    "fc:frame:image": "http://localhost:3000/preview-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />

        {/* Farcaster Frame Meta Tags */}
        <meta property="fc:frame" content="vNext" />
        <meta
          property="fc:frame:image"
          content="http://localhost:3000/preview-image.png"
        />
        <meta
          property="og:image"
          content="http://localhost:3000/fallback-preview.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        {/* Footer */}
        <footer className="-mt-12 text-center text-sm text-gray-600">
          <a
            href="https://www.mrbriandesign.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            @mrbriandesign
          </a>
        </footer>
      </body>
    </html>
  );
}