import './App.css'
import AboutUsSection from './components/AboutUsSection/AboutUsSection'
import BannerSection from './components/BannerSection/BannerSection'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import LeaderSection from './components/LeaderSection/LeaderSection'

function App() {
  return <>
    <Header/>

    <main>
      <HeroSection/>
      <AboutUsSection/>
      <LeaderSection/>
      <BannerSection/>
    </main>

    <Footer/>
  </>
}

export default App
