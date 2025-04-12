import Header from './components/common/Header';
import Topstrip from './components/common/Topstrip'
import { Route, Routes } from 'react-router-dom';
import HomeView from './views/Home';
import Footer from './components/common/Footer';
import AboutView from './views/About';
import ProductView from './views/Products';
import BlogView from './views/Blogs';
import ContactView from './views/Contact';
import BlogList from './views/BlogList';
import BrochureView from './views/Brochure';
import ScrollToTop from './components/common/ScrollToTop';
import WhatsappIcon from './components/common/Icons/WhatspappIcon';
import ChatBot from './components/common/Icons/ChatBot';
import useReview from './hooks/useReview';
function App() {
  useReview();

  return (
    <div>
      <Topstrip />
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<HomeView />} />
        <Route path='/about' element={<AboutView />} />
        <Route path='/blog' element={<BlogList />} />
        <Route path='/brochure' element={<BrochureView />} />
        <Route path='/contact' element={<ContactView />} />
        <Route path='/brochure/:slug' element={<ProductView />} />
        <Route path="/blog/:slug" element={<BlogView />} />
      </Routes>
      <WhatsappIcon />
      <ChatBot />
      <Footer />
    </div>
  )
}

export default App;
