import './globals.css'
import { Inter } from 'next/font/google'
import ToasterContext from '@/context/toasterContext'
import Provider from '@/context/AuthContext'
import { ThemeProvider } from "@/app/components/theme-provider"


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'project stores',
  description: 'Find the codes for all my projects to get started',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true} >
      <Provider>
      <ToasterContext/>
        {children}
      </Provider>
        </body>
    </html>
  )
}
