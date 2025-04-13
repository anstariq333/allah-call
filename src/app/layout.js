import { Inter } from "next/font/google";
import "./globals.css";
import "../styles/global.css"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AllahCall - Islamic Dawah Platform",
  description: "A platform dedicated to spreading authentic Islamic knowledge and connecting people with the message of Islam.",
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
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
