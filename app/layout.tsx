import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import './globals.css'
import AuthWrapper from "@/lib/api/authWrapper";

export const metadata: Metadata = {
  title: "MedicoIn",
  description: "Your smart health assistant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className='min-h-screen'>
        <AuthWrapper>
          <Navbar/>
            {children}
          <Footer/>
        </AuthWrapper>
      </body>
    </html>
  );
}
