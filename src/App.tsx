import { Route, Routes } from 'react-router-dom';
import Topstrip from './components/common/Topstrip'
import CtaStrip from './components/common/CtaStrip';
import Header from './components/common/Header';
import HomeView from './views/Home';
import AboutView from './views/About';
import BrochureView from './views/Brochure';
import ProductView from './views/Products';
import BlogList from './views/BlogList';
import BlogView from './views/Blogs';
import ContactView from './views/Contact';
import ScrollToTop from './components/common/ScrollToTop';
import WhatsappIcon from './components/common/Icons/WhatspappIcon';
import Footer from './components/common/Footer';
import ChatBot from './components/common/Icons/ChatBot';
import useReview from './hooks/useReview';
import MessageBot from './components/common/ChatBot';

function App() {
  useReview();

  return (
    <div>
      <Topstrip />
      <CtaStrip />
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<HomeView />} />
        <Route path='/about' element={<AboutView />} />
        <Route path='/brochure' element={<BrochureView />} />
        <Route path='/blog' element={<BlogList />} />
        <Route path='/contact' element={<ContactView />} />
        <Route path='/brochure/:slug' element={<ProductView />} />
        <Route path="/blog/:slug" element={<BlogView />} />
      </Routes>
      <WhatsappIcon />
      <MessageBot />
      <ChatBot />
      <Footer />
    </div>
  )
}

export default App;
