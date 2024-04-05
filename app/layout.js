import Navbar from '@/Component/Navbar'
import Script from 'next/script'
import './globals.css'
import { Montserrat } from 'next/font/google'
import Footer from '@/Component/Footer'

const montserrat = Montserrat({ subsets: ['latin'],variable:"--font mont" })
export const metadata = {
  title: 'Raj-65',
  description: 'Created in Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={`${montserrat.variable} dark:bg-dark font-mont bg-light w-full min-h-screen`} suppressHydrationWarning>
          <Script id="theme-switcher" strategy='beforeInteractive'>
            {`
              if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark')
              } else {
                document.documentElement.classList.remove('dark')
              }
            `}
          </Script>
          <Navbar className={'flex justify-between w-full px-32 py-8 font-medium items-center'}/>
          <div className=''>{children}</div>
          <Footer/>
      </body>
    </html>
  )
}
