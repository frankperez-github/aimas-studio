import { env } from '../../next.config'
import SiteContext, { SiteContextProvider } from './Context/SiteContext'
import GoogleAnalytics from './GoogleAnalytics'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Aimas Studio',
  description: 'Generated using create next app by Frank Perez',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleAnalytics GA_Tracking_ID={env.GA_Tracking_ID}/>
      <SiteContextProvider>
        <body className={inter.className}>{children}</body>
      </SiteContextProvider>
    </html>
  )
}
