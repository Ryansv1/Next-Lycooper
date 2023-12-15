import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import '../../public/globals.css'
import { Providers }from './providers/providers'

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Lycooper',
  description: 'Sistema!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={poppins.className}>
      <body className="flex flex-col min-h-screen">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
