import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
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
import Faq from './components/Faq'
import BookDemo from './components/BookDemo'
import Login from './components/Login'
import ContactUs from './components/ContactUs'
import ToolPage from './components/ToolPage'
import ScrollToTop from './components/ScrollToTop'
import ToolPageWrapper from './components/ToolPageWrapper'
import PricingTable from './components/PricingTable'
import Label from './components/Label'
import Blogs from './components/Blogs'


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <div className='maincontainer'>
          <section className='Container'>
            <Navigation />
            <div className="content-wrapper">
              <Logo />
              <Hero />
            </div>
          </section>

          <section className="secondContainer">
            <Tools />
            <Partners />
            <Cards />
            <Plan showExtra={false} showFeatures={true} showButton={true} />
            <Pic />
            <Footer />
          </section>
        </div>

      ),
    },

    {
      path: "/tools",
      element: (
        <div>
          <div className='maincontainer'>
            <Navigation />
            <Tools />
            <Faq />
            <div className='secondContainer'>
              <Pic />
              <Footer />

            </div>
          </div>




        </div>
      )

    },

    {
      path: "/tools/:toolName",
      element: (
        <div className="maincontainer">
          <ScrollToTop />
          <Navigation />
          <ToolPageWrapper />

          <Tools />
          <Faq />
          <Pic />
          <Footer />
        </div>
      )
    },

    {
      path: "/pricing",
      element: (
        <>
          <div className='maincontainer'>
         
              <ScrollToTop />
              <Navigation />
              <Pricing />
    

            <div className="secondContainer">
              <Plan showExtra={true} showFeatures={true} showButton={true} />
              <Label />
              <Plan showExtra={true} showFeatures={false} showButton={false} />
              <PricingTable />
              <Faq />
              <Pic />
              <Footer />
            </div>
          </div>
        </>
      )

    },

    // {
    //   path:"/card1",
    //   element :(
    //     <div className="maincontainer">
    //        <ScrollToTop />
    //       <Navigation/>
    //       <Card1/>
    //       <Footer/>
    //     </div>
    //   )
    // },

    //     {
    //   path:"/card2",
    //   element :(
    //     <div className="maincontainer">
    //        <ScrollToTop />
    //       <Navigation/>
    //       <Card2/>
    //       <Footer/>
    //     </div>
    //   )
    // },

    //         {
    //   path:"/card3",
    //   element :(
    //     <div className="maincontainer">
    //        <ScrollToTop />
    //       <Navigation/>
    //       <Card3/>
    //       <Footer/>
    //     </div>
    //   )
    // },

    {
      path: "/bookademo",
      element: (
        <>
          <div className="maincontainer">

            <div className='Container'>
              <Navigation />
              <BookDemo />
            </div>
            <Faq />


            <div className='secondContainer'>
              <Footer />
            </div>
          </div>

        </>

      )
    },

    {
      path: "/login",
      element: (
        <>

          <Login mode="login" />

        </>
      )
    },

    {
      path: "/signup",
      element: (
        <>
          <Login mode="signup" />
        </>
      )
    },

    {
      path: "/contact",
      element: (
        <div className='maincontainer'>
          <ScrollToTop />
          <Navigation />
          <ContactUs />
          <Faq />
          <Footer />
        </div>

      )
    },

    {
      path: "/blogs",
      element: (
        <div className="maincontainer">
          
            <ScrollToTop />
            <Navigation />
            <Blogs />
         

          <Cards showDiscord={false} goBlogs={false} />
          <Pic />
          <Footer />
        </div>
      )
    }



  ]
);

function App() {


  return (

    <>


      <RouterProvider router={router} />

    </>


  )
}

export default App
