import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import OnchainKitClientProvider from "./OnchainKitClientProvider"; // Import the client provider

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  /* ...your metadata here... */
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <head>
        {/* ...meta tags... */}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <OnchainKitClientProvider>
          {children}
        </OnchainKitClientProvider>
        {/* Footer */}
        <footer className="-mt-12 text-center text-sm text-gray-600">
          <a href="https://www.mrbriandesign.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">@mrbriandesign</a>
        </footer>
      </body>
    </html>
  );
}
