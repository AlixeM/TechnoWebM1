import Header from '../components/Header'; 
import Footer from '../components/Footer'; 

export const metadata = {
  title: 'Bibliothèque',
  description: 'Système de gestion des livres pour une bibliothèque',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children} 
        <Footer /> 
      </body>
    </html>
  )
}
