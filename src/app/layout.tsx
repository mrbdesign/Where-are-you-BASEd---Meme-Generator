// filepath: /Users/mr.briandesign/Where-are-you-BASEd---Meme-Generator/src/app/layout.tsx
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

export const metadata = {
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