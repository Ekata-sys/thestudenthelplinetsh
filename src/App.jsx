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
import Service from './Components/Service/Service';
import OrderNow from './Components/OrderNow/OrderNow';
import Offer from './Components/Offer/Offer';
import FAQs from './Components/FAQs/FAQs';
import Privacypolicy from './Components/Policy/Privacypolicy';
import RefundPolicy from './Components/Policy/RefundPolicy';
import RevisionPolicy from './Components/Policy/RevisionPolicy';
import TermsAndConditions from './Components/Policy/TermsAndConditions';
import Experts from './Components/Experts/Experts';
import Sample from './Components/Sample/Sample';
import SampleDetail from './Components/Sample/SampleDetail';
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
        <Route path="/service/:title" element={<Service/>}/>
        <Route path="/au/:title" element={<Service/>}/>
        <Route path="/assignment/:title" element={<Service/>}/>
        <Route path="/dissertation/:title" element={<Service/>}/>
        <Route path="/quiz/:title" element={<Service/>}/>
        <Route path="/offer" element={<Offer/>}/>
        <Route path="/order" element={<OrderNow/>}/>
        <Route path="/faqs" element={<FAQs/>}/>
        <Route path="/privacy-policy" element={<Privacypolicy/>}/>
        <Route path="/refund-policy" element={<RefundPolicy/>}/>
        <Route path="/revision-policy" element={<RevisionPolicy/>}/>
        <Route path="/terms-and-conditions" element={<TermsAndConditions/>}/>
        <Route path="/experts" element={<Experts/>}/>
        <Route path="/sample" element={<Sample/>}/>
        <Route path="/sample-detail/:url" element={<SampleDetail/>}/>
      </Routes>
      
      <Footer/>
    </BrowserRouter>
  </>
  );
}

export default App;
