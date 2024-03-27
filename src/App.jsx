import { useState } from 'react'
import {
  Work,
  About,
  Testimonial,
  Partner,
  Team,
  Footer,
  Home,
} from "./pages/root/index.js";
import { ConstructHome } from './pages/construction/home/constructHome.jsx';

function App() {

  return (
    <>
      {/* <Home/>
      <About />
      <Work />
      <Testimonial />
      <Partner/>
      <Team />
      <Footer/> */}
      <ConstructHome/>
    </>
  );
}

export default App
