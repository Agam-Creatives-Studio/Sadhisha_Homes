import { useState } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);


import Footer from './Components/common/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/index-pages/Home';
import About from './Pages/about-pages/About';
import Availability from './Pages/index-pages/Availability';
import Services from './Pages/index-pages/Services';
import Projects from './Pages/index-pages/Projects';
import Careers from './Pages/join-us-pages/Careers';
import ChannelPartners from './Pages/join-us-pages/ChannelPartners';
import InvestorClub from './Pages/index-pages/InvestorClub';
import Blogs from './Pages/resources-pages/Blogs';
import Csr from './Pages/about-pages/Csr';
import Recognition from './Pages/about-pages/Recognition';
import TermsAndConditions from './Components/common/TermsAndConditions';
import AuroArchitects from './Pages/affilate-pages/AuroArchitects';
import SadhishaConstruction from './Pages/affilate-pages/SadhishaConstruction';
import SadhishaHomes from './Pages/affilate-pages/SadhishaHomes';
import SadhishaRapidEdge from './Pages/affilate-pages/SadhishaRapidEdge';
import SadhishaRealty from './Pages/affilate-pages/SadhishaRealty';
import SadhishaInteriors from './Pages/affilate-pages/SadhishaInteriors';
import ThanksPage from './Pages/thanks-and-error-pages/ThanksPage';
import NotFoundPage from './Pages/thanks-and-error-pages/NotFoundPage';
import TitleReveal from './styles/pages/test/TitleReveal';
import SingleProjectPage from './Pages/index-pages/SingleProjectPage';
import ExtellNavbar from './Components/common/ExtellNavbar';

function App() {

  return (
    <>
      <ExtellNavbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/availabilty' element={<Availability />} />
        <Route path='/investor-club' element={<InvestorClub />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects/:slug' element={<SingleProjectPage/>} />
        <Route path='/services' element={<Services />} />

        <Route path='/auro-architects' element={<AuroArchitects />} />
        <Route path='/sadhisha-homes' element={< SadhishaHomes />} />
        <Route path='/sadhisha-constructions' element={< SadhishaConstruction />} />
        <Route path='/sadhisha-rapid-edge' element={<SadhishaRapidEdge />} />
        <Route path='/sadhisha-realty' element={< SadhishaRealty />} />
        <Route path='/sadhisha-interiors' element={< SadhishaInteriors />} />

        <Route path='/about' element={<About />} />
        <Route path='/recognition' element={<Recognition />} />
        <Route path='/corprate-social-responsibility' element={<Csr />} />

        <Route path='/blogs' element={<Blogs />} />

        <Route path='/careers' element={<Careers />} />
        <Route path='/channel-partners' element={<ChannelPartners />} />


        <Route path='/terms-and-conditions' element={<TermsAndConditions />} />
        <Route path='/thank-you' element={<ThanksPage/>} />
        <Route path='*' element={<NotFoundPage/>} />
        <Route path='/test' element={<TitleReveal/>} />

      </Routes>
      <Footer />
    </>
  )
}

export default App
