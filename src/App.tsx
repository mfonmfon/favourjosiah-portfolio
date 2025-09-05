import React from 'react';
import Header from './components/header/Header';
import Hero from './components/herosection/Hero';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
// import Services from './components/service/Services';
import Testimonials from './components/testimoninals/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Portfolio />
      {/* <Services /> */}
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;