import './globals.css'

export const metadata = {
  title: 'Contact List App',
  description: 'A simple contact list app built with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
