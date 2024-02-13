import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Banner from './Components/Banner';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Banner/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
