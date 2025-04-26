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
  title: "Where are you BASEd?",
  description: "Create and share memes with ease.",
  openGraph: {
    title: "Where are you BASEd?",
    description: "Create and share memes with ease.",
    url: "http://localhost:3000",
    siteName: "Where are you BASEd?",
    images: [
      {
        url: "http://localhost:3000/images/Card-Image.png",
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
    images: ["http://localhost:3000/images/Card-Image.png"],
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

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Where are you BASEd?" />
        <meta property="og:description" content="Create and share memes with ease." />
        <meta property="og:url" content="http://localhost:3000" />
        <meta property="og:site_name" content="Where are you BASEd?" />
        <meta property="og:image" content="http://localhost:3000/images/Card-Image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Where are you BASEd?" />
        <meta name="twitter:description" content="Create and share memes with ease." />
        <meta name="twitter:image" content="http://localhost:3000/images/Card-Image.png" />
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