import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import { BrowserRouter, Routes } from 'react-router-dom'
import { Route } from 'react-router'
import LandingPage from './Pages/LandingPage.jsx'
import Aboutus from './Pages/AboutUs.jsx'
import Contact from './Pages/Contact.jsx'
import Products from './Pages/Produts.jsx'
import NotFound from './Pages/NotFound.jsx'
import NavBar from './Compoments/NavBar.jsx'
import Footer from './Compoments/Footer.jsx'
import ProductDet from './Pages/DetPage.jsx' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<LandingPage/>} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/detpage/:id" element={<ProductDet />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    {/* <App /> */}
  </StrictMode>,
)
