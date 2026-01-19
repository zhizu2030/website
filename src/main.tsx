import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import FreeTrial from './components/pages/FreeTrial.tsx'
import ProductFeatures from './components/pages/ProductFeatures.tsx'
import Solutions from './components/pages/Solutions.tsx'
import CaseStudies from './components/pages/CaseStudies.tsx'
import AboutUs from './components/pages/AboutUs.tsx'

// 路由处理组件，用于处理GitHub Pages的路由问题
const RouteHandler = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // 处理从404.html重定向过来的路径
    const params = new URLSearchParams(window.location.search);
    const path = params.get('path');
    if (path) {
      // 移除/website前缀
      const cleanPath = path.replace('/website', '');
      navigate(cleanPath);
    }
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/free-trial" element={<FreeTrial />} />
      <Route path="/product-features" element={<ProductFeatures />} />
      <Route path="/solutions" element={<Solutions />} />
      <Route path="/case-studies" element={<CaseStudies />} />
      <Route path="/about-us" element={<AboutUs />} />
    </Routes>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <RouteHandler />
    </BrowserRouter>
  </StrictMode>,
)
