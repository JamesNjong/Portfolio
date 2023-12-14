import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './base.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'this is James',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
