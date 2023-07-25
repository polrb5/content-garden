import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Menu } from './Menu'

import './globals.css'
import { getFolders } from '@/cli/sdk'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Content Garden',
  description: 'My beatiful content garden',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { folders } = await getFolders();
  
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <nav className="p-6 py-4 bg-gray-100 border-t-4 border-t-sky-500 flex items-center space-x-6">
          <h1 className="tracking-tighter font-semibold text-grey-700">Content Garden</h1>
          <Menu folders={folders} />
        </nav>
        {children}
      </body>
    </html>
  )
}
