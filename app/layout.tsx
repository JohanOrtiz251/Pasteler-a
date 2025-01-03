import './globals.css'
import type { Metadata } from 'next'
import { Inter, Roboto_Mono } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const robotoMono = Roboto_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pastelería Navideña',
  description: 'Deliciosos postres navideños para tu temporada festiva',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.className} ${robotoMono.className} bg-gray-900 text-white`}>{children}</body>
    </html>
  )
}

