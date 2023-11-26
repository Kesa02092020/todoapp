import './styles/globals.scss'

export const metadata = {
  title: 'Chups',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
