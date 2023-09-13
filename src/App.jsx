import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Header from './Components/Header';
import Error from './Components/Error'
import Login from './Components/Login';
function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/404" element={<Error/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      
      <Footer/>
    </BrowserRouter>
  </>
  );
}

export default App;
