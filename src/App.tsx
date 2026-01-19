import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import LeadGeneration from './components/sections/LeadGeneration';
import LeadNurturing from './components/sections/LeadNurturing';
import SalesEnablement from './components/sections/SalesEnablement';
import CaseStudies from './components/sections/CaseStudies';
import Solutions from './components/sections/Solutions';
import FAQ from './components/sections/FAQ';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <LeadGeneration />
        <LeadNurturing />
        <SalesEnablement />
        <CaseStudies />
        <Solutions />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
