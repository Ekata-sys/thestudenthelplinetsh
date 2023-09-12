
import './App.css';
import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Header from './Components/Header';
import Error from './Components/Error'
function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/404" element={<Error/>}/>
      </Routes>
      
      <Footer/>
    </BrowserRouter>
  </>
  );
}

export default App;
