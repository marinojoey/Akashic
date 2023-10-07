import React from 'react'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Personal Site',
  description: 'Personal site of Joey Marino',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex min-h-screen flex-col justify-between`}>
        <NavBar />
        <main className="mb-0 mt-0 h-full flex-grow bg-primary pl-0">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
