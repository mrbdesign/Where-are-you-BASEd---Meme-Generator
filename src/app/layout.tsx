import type { Metadata } from "next";
import Head from "next/head";
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
  title: "Where are you BASEd?",
  description: "Create and share memes with ease.",
  openGraph: {
    title: "Where are you BASEd?",
    description: "Create and share memes with ease.",
    url: "https://www.basedwhere.world",
    siteName: "Where are you BASEd?",
    images: [
      {
        url: "https://www.basedwhere.world/images/Card-Image.png",
        width: 1200,
        height: 630,
        alt: "Meme Generator Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Where are you BASEd?",
    description: "Create and share memes with ease.",
    images: ["https://www.basedwhere.world/images/Card-Image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Where are you BASEd?" />
        <meta property="og:description" content="Create and share memes with ease." />
        <meta property="og:url" content="https://www.basedwhere.world" />
        <meta property="og:site_name" content="Where are you BASEd?" />
        <meta property="og:image" content="https://www.basedwhere.world/images/Card-Image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Where are you BASEd?" />
        <meta name="twitter:description" content="Create and share memes with ease." />
        <meta name="twitter:image" content="https://www.basedwhere.world/images/Card-Image.png" />
      </Head>
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