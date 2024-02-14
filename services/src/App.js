import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Banner from './Components/Banner';
import About from './Components/About';

import '../src/assets/style/works.css'

function App() {
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
