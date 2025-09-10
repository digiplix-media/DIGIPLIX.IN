import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import { initLenis } from "./lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


// initialize Lenis once on client
if (typeof window !== "undefined") {
  // const lenis = initLenis(); // use defaults from lenis.js

  const lenis = initLenis({
    duration: 1.8,
    wheelMultiplier: 0.65,
    touchMultiplier: 0.9,
  });

  // lenis details  
  // const lenis = new Lenis({
  //   duration: 1.5,          // easing duration , 
  //   easing: (t) => t,       // custom easing function (default: linear-ish)
  //   direction: 'vertical',  // 'vertical' or 'horizontal'
  //   gestureDirection: 'vertical', // gesture detection axis
  //   smooth: true,           // enables smooth scroll
  //   smoothTouch: false,     // smooth scroll on touch devices
  //   touchMultiplier: 1,     // sensitivity for touch
  //   wheelMultiplier: 1,     // sensitivity for mouse wheel
  //   infinite: false         // if true, creates infinite scroll loop
  // })

//   to make scroll feel smoother and floaty, increase duration (e.g., 2.0).
// To make scroll faster, increase wheelMultiplier and touchMultiplier.
//  To make scroll precise and slow, decrease multipliers.
  
  

  lenis.on("scroll", () => {
    ScrollTrigger.update();
  });

  window.addEventListener("resize", () => {
    ScrollTrigger.refresh();
  });
}




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
