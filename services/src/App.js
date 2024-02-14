import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Banner from './Components/Banner';
import '../src/assets/style/works.css'
import Ourworks from './Components/Ourworks';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Banner/>}/>
        <Route path='/ourworks' element={<Ourworks/>}/>
        <Route path='/footer' element={<Footer/>}/>
        

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
