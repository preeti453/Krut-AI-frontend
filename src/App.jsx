import './App.css'
import Navigation from './components/Navigation'
import Logo from './components/TempoLogo'
import Hero from './components/Hero'
import Tools from './components/Tools'
import Partners from './components/Partners'
import Cards from './components/Cards'
import Pic from './components/Pic'
import { plans } from './components/data'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import Plan from "./components/Plan"



function App() {


  return (
    <div className='maincontainer'>
      <section className='Container'>
        <Navigation />
        <div className="content-wrapper">
          <Logo />
          <Hero />
        </div>


      </section>
      <section className="secondContainer"> {/* for the background color */}
        <Tools />
        <Partners />
        <Cards />

        {/* <Pricing plans={plans} /> */}
        <Plan/>

        <Pic />

        <Footer />

      </section>



    </div>

  )
}

export default App
