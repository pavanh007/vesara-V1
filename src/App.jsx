import { useState } from 'react'
import About from './pages/About';
import Home from './pages/about/Home';
import Testimonial from './pages/testimonial/testimonial';
import Work from './pages/work/work';

function App() {

  return (
    <>
      <Home/>
      <About />
      <Work />
      <Testimonial/>
    </>
  );
}

export default App
