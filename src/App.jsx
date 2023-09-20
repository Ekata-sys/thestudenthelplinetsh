import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Header from './Components/Header';
import Error from './Components/Error'
import Login from './Components/Login';
import Contact from './Components/Contact';
import AboutUs from './Components/AboutUs';
import SignUp from './SignUp';
import HowWork from './Components/HowWork';
import Reviews from './Components/Reviews';
import Search from './Components/Search';
import HomePageAU from './Components/HomePageAU';
function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/404" element={<Error/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/resister" element={<SignUp/>}/>
        <Route path="/howitwork" element={<HowWork/>}/>
        <Route path="/reviews" element={<Reviews/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/au" element={<HomePageAU/>}/>
      </Routes>
      
      <Footer/>
    </BrowserRouter>
  </>
  );
}

export default App;
