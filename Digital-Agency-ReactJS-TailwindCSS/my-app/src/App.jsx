
import './App.css'
import { useState } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import TrustedBy from './components/TrustedBy'
import Services from './components/Services'
import OurWork from './components/OurWork'
import Teams from './components/Teams'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'



function App() {
  const [theme, setTheme] = useState("light")

  return (
    <>
      <div className='dark:bg-black relative'>
        <Navbar theme={theme} setTheme={setTheme} />
        <Hero />
        <TrustedBy />
        <Services />
        <OurWork />
        <Teams />
        <ContactUs />
        <Footer theme={theme} />
      </div>



    </>
  )
}

export default App
