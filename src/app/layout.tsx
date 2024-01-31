import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from '@/store/Provider'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Blockchain.com", template: '%s | Be early to the future of finance' },
  icons: '/icon.png'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
