import { useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/home'
import FinanceBanner from './Components/FinanceBanner'
import DeliveredProjects from './Components/DeliveredProjects'
import TestimonialsSection from './Components/TestimonialsSection'
import ServiceSection from './Components/ServiceSection'
import FAQSection from './Components/FAQSection'
import Footer from './Components/Footer'


function App() {
 

  return (
    <>
    <Navbar/>
    <Home/>
    <FinanceBanner/>
  <DeliveredProjects/>
  <TestimonialsSection/>
  <ServiceSection/>
  <FAQSection/>
  <Footer/>
  
    </>
  )
}

export default App
