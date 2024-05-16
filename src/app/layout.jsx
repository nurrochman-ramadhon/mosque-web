import {  Poppins } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";


const poppins = Poppins({ subsets: ["latin"],weight:["300","400","500","600","700"] });

export const metadata = {
  icons:{
    icon:"/icon.png"
  },
  title: "Masjid Darussalam",
  description: "Selamat Datang di Beranda Masjid Darussalam",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
