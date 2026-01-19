import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import FreeTrial from './components/pages/FreeTrial.tsx'
import ProductFeatures from './components/pages/ProductFeatures.tsx'
import Solutions from './components/pages/Solutions.tsx'
import CaseStudies from './components/pages/CaseStudies.tsx'
import AboutUs from './components/pages/AboutUs.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/free-trial" element={<FreeTrial />} />
        <Route path="/product-features" element={<ProductFeatures />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
)
