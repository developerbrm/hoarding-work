import { Nunito_Sans } from 'next/font/google'
import './globals.css'
import Head from 'next/head'

const fontObj = Nunito_Sans({
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata = {
  title: 'N.G. & Company',
  description:
    'Elevate your brand with high-impact advertisement hoardings. Reach a wider audience and achieve your marketing goals with our strategic hoarding solutions.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="hidden">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/icons/favicon_io/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/icons/favicon_io/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/icons/favicon_io/favicon-16x16.png"
        />
        <link rel="manifest" href="/assets/icons/favicon_io/site.webmanifest" />
      </head>
      <body className={`${fontObj.className}`}>{children}</body>
    </html>
  )
}
