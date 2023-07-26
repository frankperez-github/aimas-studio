import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import MainPage from '@/Components/MainPage'
import SideMenu from '@/Components/SideMenu'

export default function Home() {
  return (
    <main className="main">
      <SideMenu />
      <Header />
      <MainPage />
      <Footer />
    </main>
  )
}
