import './App.css';
import React, { useEffect } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Banner from './Components/Banner';
import About from './Components/About';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import '../src/assets/style/works.css'

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Banner/>}/>
  
        
        

      </Routes>
      </BrowserRouter>
      <About />
    </div>
  );
}

export default App;
