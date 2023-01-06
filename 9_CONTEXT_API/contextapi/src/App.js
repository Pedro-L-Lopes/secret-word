import './App.css';

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Products from'./pages/Products'

import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <h1>Context Api</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />}/>
          <Route path='/Products' element={<Products />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
