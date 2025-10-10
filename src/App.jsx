// src/App.jsx
import Navbar from './components/Navbar'
import Hero from './components/Hero'
// import SplashCursor from './components/ SplashCursor';
import AutoScroll from './components/AutoScroll'

import WordScroll from './components/WordScroll';
import WordScrollTwo from './components/WordScrollTwo';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';

// import CustomCursor from './components/CustomCursor';

// import FallingText from './components/FallingText';
import ContactCircle from './components/ContactCircle';

// smoth scroll 
// import SmoothScroll from './components/SmoothScroll'; 
import Work from "./components/Work";

// Import other components as we build them
import About from './components/About'
import Services from './components/Services'
// import Portfolio from './components/Portfolio'
// import Contact from './components/Contact'

// import DevelopmentBanner from './components/DevelopmentBanner'

function App() {
  return (
    <div className="min-h-screen bg-[#EEEEF4] font-serif">

{/* <SmoothScroll /> */}
    
     
      <Navbar />
     
      {/* <DevelopmentBanner/> */}
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />
    
          <ContactCircle/>
        <AutoScroll/>
        
        {/* <SplashCursor /> */}
        {/* <CustomCursor/> */}


     
        <About />
  
        <WordScroll />

        <Services />
        <WordScrollTwo />

        <Work/>
  
        <Clients />
        <Contact />
     

        
   
      </main>
      <Footer />
  
    </div>
  )
}

export default App

