import { Inter } from "next/font/google";
import "./globals.css";
import "../styles/global.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AllahCall - Islamic Learning Platform",
  description: "Discover the beautiful message of Islam through authentic knowledge and understanding",
  icons: {
    icon: [
      {
        url: '/Allah.png',
        sizes: '32x32',
        type: 'image/png',
        style: { borderRadius: '50%' }
      },
      {
        url: '/Allah.png',
        sizes: '64x64',
        type: 'image/png',
        style: { borderRadius: '50%' }
      }
    ],
    apple: [
      {
        url: '/Allah.png',
        sizes: '180x180',
        type: 'image/png',
        style: { borderRadius: '50%' }
      }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/Allah.png',
        style: { borderRadius: '50%' }
      }
    ]
  },
  manifest: '/manifest.json'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
